import { useState } from "react";
import PricingTabs, { PricingCategory } from "@/components/PricingTabs";
import BookingModal from "@/components/BookingModal";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    category: string;
    package: string;
    price: string;
  }>();

  const pricingCategories: PricingCategory[] = [
    {
      id: "8-9-students",
      label: "8-9 STUDENTS",
      standard: {
        planName: "Discover",
        price: "₹ 5,500",
        features: [
          { text: "Psychometric assessment to measure your interests", included: true },
          { text: "1 career counselling session with Mentoria's expert career coaches", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Invites to live webinars by industry experts", included: true },
          { text: "Customized reports after each session with education pathways", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV building during internship/graduation", included: false },
        ],
      },
      premium: {
        planName: "Discover plus+",
        price: "₹ 15,000",
        features: [
          { text: "Psychometric assessments to measure your interests, personality and abilities", included: true },
          { text: "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Invites to live webinars by industry experts", included: true },
          { text: "Customized reports after each session with education pathways", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV building during internship/graduation", included: true },
        ],
      },
    },
    {
      id: "10-12-students",
      label: "10-12 STUDENTS",
      standard: {
        planName: "Achieve Online",
        price: "₹ 5,999",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customized reports after each session with education pathways", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews during internship/graduation", included: false },
        ],
      },
      premium: {
        planName: "Achieve Plus+",
        price: "₹ 10,599",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "4 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customized reports after each session with education pathways", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews during internship/graduation", included: true },
        ],
      },
    },
    {
      id: "college-graduates",
      label: "COLLEGE GRADUATES",
      standard: {
        planName: "Ascend Online",
        price: "₹ 6,499",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customized reports after each session with information on certificate/online courses", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews for job application", included: false },
        ],
      },
      premium: {
        planName: "Ascend Plus+",
        price: "₹ 10,599",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "3 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customized reports after each session with information on certificate/online courses", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews for job application", included: true },
        ],
      },
    },
    {
      id: "working-professionals",
      label: "WORKING PROFESSIONALS",
      standard: {
        planName: "Ascend Online",
        price: "₹ 6,499",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customized reports after each session with information on certificate/online courses", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews for job application", included: false },
        ],
      },
      premium: {
        planName: "Ascend Plus+",
        price: "₹ 10,599",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "2 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customized reports after each session with information on certificate/online courses", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews for job application", included: true },
        ],
      },
    },
  ];

  const handleBuyClick = (packageInfo: { category: string; package: string; price: string }) => {
    setSelectedPackage(packageInfo);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (details: any) => {
    console.log("Booking submitted:", details);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan tailored to your stage in life and career aspirations.
            </p>
          </div>

          <PricingTabs categories={pricingCategories} onBuyClick={handleBuyClick} />
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageInfo={selectedPackage}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
}
