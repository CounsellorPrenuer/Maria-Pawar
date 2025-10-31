import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import CareerGuidance from "@/pages/CareerGuidance";
import LearningDevelopment from "@/pages/LearningDevelopment";
import Aviation from "@/pages/Aviation";
import OurImpact from "@/pages/OurImpact";
import Testimonials from "@/pages/Testimonials";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminLogin from "@/pages/AdminLogin";
import AdminBlogs from "@/pages/AdminBlogs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/career-guidance" component={CareerGuidance} />
      <Route path="/learning-development" component={LearningDevelopment} />
      <Route path="/aviation" component={Aviation} />
      <Route path="/our-impact" component={OurImpact} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/bookings" component={AdminDashboard} />
      <Route path="/admin/blogs" component={AdminBlogs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-1 flex flex-col overflow-auto">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
