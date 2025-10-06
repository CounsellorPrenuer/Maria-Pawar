import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
  category: string;
  price: number;
}

export default function BookingModal({ open, onOpenChange, serviceName, category, price }: BookingModalProps) {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/bookings", data);
    },
  });

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (bookingId: string, userData: BookingFormData) => {
    setIsProcessing(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      
      if (!scriptLoaded) {
        toast({
          title: "Error",
          description: "Failed to load payment gateway. Please try again.",
          variant: "destructive",
        });
        setIsProcessing(false);
        return;
      }

      // Create Razorpay order
      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: price,
          bookingId,
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error("Failed to create payment order");
      }

      const options = {
        key: orderData.key_id,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Inspire2Grow",
        description: serviceName,
        order_id: orderData.order.id,
        handler: async function (response: any) {
          try {
            // Verify payment
            const verifyResponse = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingId,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              toast({
                title: "Success!",
                description: "Payment completed successfully. We'll contact you soon!",
              });
              queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
              onOpenChange(false);
              form.reset();
            } else {
              toast({
                title: "Payment Verification Failed",
                description: "Please contact support with your payment ID.",
                variant: "destructive",
              });
            }
          } catch (error) {
            toast({
              title: "Error",
              description: "Payment verification failed. Please contact support.",
              variant: "destructive",
            });
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: userData.name,
          email: userData.email,
          contact: userData.phone,
        },
        theme: {
          color: "#FFC107",
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
            toast({
              title: "Payment Cancelled",
              description: "You cancelled the payment. Your booking is saved as pending.",
            });
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Payment error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to process payment. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    try {
      const bookingData = {
        ...data,
        category,
        serviceName,
        price,
        paymentStatus: "pending",
      };

      const booking = await createBookingMutation.mutateAsync(bookingData);
      
      // Proceed to payment
      await handlePayment(booking.id, data);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="dialog-booking">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Complete Your Booking</DialogTitle>
          <DialogDescription>
            Enter your details to proceed with the payment for {serviceName}
          </DialogDescription>
        </DialogHeader>

        <div className="my-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Service:</span>
            <span className="font-semibold">{serviceName}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Category:</span>
            <span className="font-semibold">{category}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-primary/10">
            <span className="text-sm text-muted-foreground">Amount:</span>
            <span className="text-2xl font-bold text-accent">₹{price.toLocaleString()}</span>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your full name" 
                      {...field} 
                      data-testid="input-booking-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      {...field} 
                      data-testid="input-booking-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="9876543210" 
                      {...field} 
                      data-testid="input-booking-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
                disabled={isProcessing}
                data-testid="button-booking-cancel"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={isProcessing || createBookingMutation.isPending}
                data-testid="button-booking-submit"
              >
                {isProcessing || createBookingMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay ₹${price.toLocaleString()}`
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
