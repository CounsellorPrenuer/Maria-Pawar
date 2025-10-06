import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageInfo?: {
    category: string;
    package: string;
    price: string;
  };
  onSubmit: (details: {
    name: string;
    email: string;
    phone: string;
    packageInfo?: { category: string; package: string; price: string };
  }) => void;
}

export default function BookingModal({ isOpen, onClose, packageInfo, onSubmit }: BookingModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone, packageInfo });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md backdrop-blur-xl bg-card/95">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Complete Your Booking</DialogTitle>
        </DialogHeader>

        {packageInfo && (
          <div className="bg-primary/10 rounded-lg p-4 mb-4">
            <p className="text-sm text-muted-foreground">{packageInfo.category}</p>
            <p className="font-semibold text-lg">{packageInfo.package}</p>
            <p className="text-2xl font-bold text-primary">{packageInfo.price}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              data-testid="input-booking-name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-booking-email"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              data-testid="input-booking-phone"
              className="mt-1"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              data-testid="button-booking-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
              data-testid="button-booking-proceed"
            >
              Proceed to Payment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
