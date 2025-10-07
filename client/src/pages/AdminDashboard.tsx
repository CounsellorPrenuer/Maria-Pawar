import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, FileDown, DollarSign, Users, ShoppingCart, Mail, LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Booking, Contact } from "@shared/schema";
import { format } from "date-fns";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data: authCheck, isLoading: authLoading } = useQuery<{ authenticated: boolean; user?: any }>({
    queryKey: ["/api/auth/check"],
  });

  const isAuthenticated = authCheck?.authenticated ?? false;

  const { data: stats } = useQuery<{
    totalBookings: number;
    totalContacts: number;
    totalLeads: number;
    paidBookings: number;
    pendingBookings: number;
    totalRevenue: number;
  }>({
    queryKey: ["/api/admin/stats"],
    enabled: isAuthenticated,
  });

  const { data: bookings = [] } = useQuery<Booking[]>({
    queryKey: ["/api/bookings"],
    enabled: isAuthenticated,
  });

  const { data: contacts = [] } = useQuery<Contact[]>({
    queryKey: ["/api/contacts"],
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (!authLoading && !authCheck?.authenticated) {
      setLocation("/admin/login");
    }
  }, [authCheck, authLoading, setLocation]);

  const handleLogout = async () => {
    try {
      await apiRequest("POST", "/api/auth/logout");
      toast({
        title: "Logged out",
        description: "Successfully logged out",
      });
      setLocation("/admin/login");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to logout",
      });
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!authCheck?.authenticated) {
    return null;
  }

  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        headers.map((header) => {
          const value = row[header];
          return typeof value === "string" && value.includes(",")
            ? `"${value}"`
            : value;
        }).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const statsCards = [
    {
      label: "Total Bookings",
      value: stats?.totalBookings || 0,
      icon: ShoppingCart,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Paid Bookings",
      value: stats?.paidBookings || 0,
      icon: ShoppingCart,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
    {
      label: "Pending Bookings",
      value: stats?.pendingBookings || 0,
      icon: ShoppingCart,
      color: "text-yellow-600",
      bgColor: "bg-yellow-600/10",
    },
    {
      label: "Contact Forms",
      value: stats?.totalContacts || 0,
      icon: Mail,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      label: "Total Leads",
      value: stats?.totalLeads || 0,
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      label: "Revenue",
      value: `₹${stats?.totalRevenue?.toLocaleString() || 0}`,
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold font-serif" data-testid="text-dashboard-title">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Manage all customer data, bookings, and submissions
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="default"
                className="bg-accent text-accent-foreground"
                onClick={() => exportToCSV([...bookings, ...contacts], "all-leads")}
                data-testid="button-export-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Export All Data
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="overview" data-testid="tab-overview">
              Overview
            </TabsTrigger>
            <TabsTrigger value="leads" data-testid="tab-leads">
              All Leads ({stats?.totalLeads || 0})
            </TabsTrigger>
            <TabsTrigger value="bookings" data-testid="tab-bookings">
              Bookings ({stats?.totalBookings || 0})
            </TabsTrigger>
            <TabsTrigger value="contact-forms" data-testid="tab-contact-forms">
              Contact Forms ({stats?.totalContacts || 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((stat, index) => (
                <Card key={index} className="p-6 backdrop-blur-sm bg-card/50 hover-elevate">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="p-6 backdrop-blur-sm bg-card/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recent Bookings</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => exportToCSV(bookings, "bookings")}
                    disabled={bookings.length === 0}
                    data-testid="button-export-bookings"
                  >
                    <FileDown className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
                {bookings.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No bookings yet
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b">
                        <tr>
                          <th className="text-left py-2">Name</th>
                          <th className="text-left py-2">Service</th>
                          <th className="text-left py-2">Category</th>
                          <th className="text-left py-2">Price</th>
                          <th className="text-left py-2">Status</th>
                          <th className="text-left py-2">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.slice(0, 5).map((booking) => (
                          <tr key={booking.id} className="border-b hover:bg-muted/50">
                            <td className="py-3">{booking.name}</td>
                            <td className="py-3 text-sm text-muted-foreground">{booking.serviceName}</td>
                            <td className="py-3 text-sm text-muted-foreground">{booking.category}</td>
                            <td className="py-3 font-semibold">₹{booking.price.toLocaleString()}</td>
                            <td className="py-3">
                              <Badge variant={booking.paymentStatus === "paid" ? "default" : "secondary"}>
                                {booking.paymentStatus}
                              </Badge>
                            </td>
                            <td className="py-3 text-sm text-muted-foreground">
                              {format(new Date(booking.createdAt), "MMM dd, yyyy")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>

              <Card className="p-6 backdrop-blur-sm bg-card/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recent Contact Forms</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => exportToCSV(contacts, "contacts")}
                    disabled={contacts.length === 0}
                    data-testid="button-export-contacts"
                  >
                    <FileDown className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
                {contacts.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No contact forms yet
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b">
                        <tr>
                          <th className="text-left py-2">Name</th>
                          <th className="text-left py-2">Email</th>
                          <th className="text-left py-2">Phone</th>
                          <th className="text-left py-2">Message</th>
                          <th className="text-left py-2">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.slice(0, 5).map((contact) => (
                          <tr key={contact.id} className="border-b hover:bg-muted/50">
                            <td className="py-3">{contact.name}</td>
                            <td className="py-3 text-sm text-muted-foreground">{contact.email}</td>
                            <td className="py-3 text-sm text-muted-foreground">{contact.phone}</td>
                            <td className="py-3 text-sm text-muted-foreground max-w-xs truncate">
                              {contact.message}
                            </td>
                            <td className="py-3 text-sm text-muted-foreground">
                              {format(new Date(contact.createdAt), "MMM dd, yyyy")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leads">
            <Card className="p-6 backdrop-blur-sm bg-card/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">All Leads (Bookings + Contact Forms)</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => exportToCSV([...bookings, ...contacts], "all-leads")}
                  disabled={bookings.length === 0 && contacts.length === 0}
                  data-testid="button-export-leads"
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
              {bookings.length === 0 && contacts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No leads to display
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left py-2">Type</th>
                        <th className="text-left py-2">Name</th>
                        <th className="text-left py-2">Email</th>
                        <th className="text-left py-2">Phone</th>
                        <th className="text-left py-2">Details</th>
                        <th className="text-left py-2">Status/Message</th>
                        <th className="text-left py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ...bookings.map(b => ({ ...b, type: 'booking' as const })),
                        ...contacts.map(c => ({ ...c, type: 'contact' as const }))
                      ]
                        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .map((lead) => (
                          <tr key={lead.id} className="border-b hover:bg-muted/50">
                            <td className="py-3">
                              <Badge variant={lead.type === 'booking' ? "default" : "secondary"}>
                                {lead.type === 'booking' ? 'Booking' : 'Contact'}
                              </Badge>
                            </td>
                            <td className="py-3">{lead.name}</td>
                            <td className="py-3 text-sm text-muted-foreground">{lead.email}</td>
                            <td className="py-3 text-sm text-muted-foreground">{lead.phone}</td>
                            <td className="py-3 text-sm text-muted-foreground">
                              {lead.type === 'booking' 
                                ? `${(lead as any).serviceName} - ${(lead as any).category} - ₹${(lead as any).price.toLocaleString()}`
                                : '-'
                              }
                            </td>
                            <td className="py-3 text-sm text-muted-foreground max-w-xs truncate">
                              {lead.type === 'booking'
                                ? <Badge variant={(lead as any).paymentStatus === "paid" ? "default" : "outline"}>
                                    {(lead as any).paymentStatus}
                                  </Badge>
                                : (lead as any).message
                              }
                            </td>
                            <td className="py-3 text-sm text-muted-foreground">
                              {format(new Date(lead.createdAt), "MMM dd, yyyy HH:mm")}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card className="p-6 backdrop-blur-sm bg-card/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">All Bookings</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => exportToCSV(bookings, "bookings")}
                  disabled={bookings.length === 0}
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
              {bookings.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No bookings to display
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left py-2">Name</th>
                        <th className="text-left py-2">Email</th>
                        <th className="text-left py-2">Phone</th>
                        <th className="text-left py-2">Service</th>
                        <th className="text-left py-2">Category</th>
                        <th className="text-left py-2">Price</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Payment ID</th>
                        <th className="text-left py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b hover:bg-muted/50">
                          <td className="py-3">{booking.name}</td>
                          <td className="py-3 text-sm text-muted-foreground">{booking.email}</td>
                          <td className="py-3 text-sm text-muted-foreground">{booking.phone}</td>
                          <td className="py-3 text-sm text-muted-foreground">{booking.serviceName}</td>
                          <td className="py-3 text-sm text-muted-foreground">{booking.category}</td>
                          <td className="py-3 font-semibold">₹{booking.price.toLocaleString()}</td>
                          <td className="py-3">
                            <Badge variant={booking.paymentStatus === "paid" ? "default" : "secondary"}>
                              {booking.paymentStatus}
                            </Badge>
                          </td>
                          <td className="py-3 text-sm text-muted-foreground font-mono">
                            {booking.razorpayPaymentId || "-"}
                          </td>
                          <td className="py-3 text-sm text-muted-foreground">
                            {format(new Date(booking.createdAt), "MMM dd, yyyy HH:mm")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="contact-forms">
            <Card className="p-6 backdrop-blur-sm bg-card/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">All Contact Form Submissions</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => exportToCSV(contacts, "contacts")}
                  disabled={contacts.length === 0}
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
              {contacts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No contact forms to display
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left py-2">Name</th>
                        <th className="text-left py-2">Email</th>
                        <th className="text-left py-2">Phone</th>
                        <th className="text-left py-2">Message</th>
                        <th className="text-left py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact) => (
                        <tr key={contact.id} className="border-b hover:bg-muted/50">
                          <td className="py-3">{contact.name}</td>
                          <td className="py-3 text-sm text-muted-foreground">{contact.email}</td>
                          <td className="py-3 text-sm text-muted-foreground">{contact.phone}</td>
                          <td className="py-3 text-sm text-muted-foreground max-w-md">
                            {contact.message}
                          </td>
                          <td className="py-3 text-sm text-muted-foreground">
                            {format(new Date(contact.createdAt), "MMM dd, yyyy HH:mm")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
