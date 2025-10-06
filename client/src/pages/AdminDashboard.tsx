import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminStats from "@/components/AdminStats";
import { Download, LogOut, FileDown } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Bookings", value: 0, color: "text-foreground" },
    { label: "Pending", value: 0, color: "text-yellow-600" },
    { label: "Contacted", value: 0, color: "text-blue-600" },
    { label: "Completed", value: 0, color: "text-green-600" },
    { label: "Contact Forms", value: 0, color: "text-purple-600" },
    { label: "Lead Downloads", value: 0, color: "text-orange-600" },
    { label: "Total Payments", value: 0, color: "text-blue-600" },
    { label: "Revenue", value: 0, color: "text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Manage all customer data, bookings, and submissions
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="default"
                className="bg-secondary text-secondary-foreground"
                data-testid="button-export-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Export All Data
              </Button>
              <Button variant="destructive" data-testid="button-logout">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview" data-testid="tab-overview">
              Overview
            </TabsTrigger>
            <TabsTrigger value="bookings" data-testid="tab-bookings">
              Bookings
            </TabsTrigger>
            <TabsTrigger value="contact-forms" data-testid="tab-contact-forms">
              Contact Forms
            </TabsTrigger>
            <TabsTrigger value="payments" data-testid="tab-payments">
              Payments
            </TabsTrigger>
            <TabsTrigger value="lead-downloads" data-testid="tab-lead-downloads">
              Lead Downloads
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <AdminStats stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recent Bookings</h3>
                  <Button variant="ghost" size="sm" data-testid="button-export-bookings">
                    <FileDown className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  No bookings yet
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recent Contact Forms</h3>
                  <Button variant="ghost" size="sm" data-testid="button-export-contacts">
                    <FileDown className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  No contact forms yet
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recent Payments</h3>
                  <Button variant="ghost" size="sm" data-testid="button-export-payments">
                    <FileDown className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  No payments yet
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recent Lead Downloads</h3>
                  <Button variant="ghost" size="sm" data-testid="button-export-leads">
                    <FileDown className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  <FileDown className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50" />
                  No downloads yet
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">All Bookings</h3>
              <div className="text-center py-12 text-muted-foreground">
                No bookings to display
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="contact-forms">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">All Contact Form Submissions</h3>
              <div className="text-center py-12 text-muted-foreground">
                No contact forms to display
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">All Payments</h3>
              <div className="text-center py-12 text-muted-foreground">
                No payments to display
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="lead-downloads">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Lead Downloads</h3>
              <div className="text-center py-12 text-muted-foreground">
                No lead downloads to display
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
