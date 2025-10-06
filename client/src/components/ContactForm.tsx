import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "./GlassCard";

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; phone: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <GlassCard>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="contact-name">Full Name</Label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            data-testid="input-contact-name"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="contact-email">Email Address</Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-testid="input-contact-email"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="contact-phone">Phone Number</Label>
          <Input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            data-testid="input-contact-phone"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            data-testid="input-contact-message"
            className="mt-1"
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          data-testid="button-contact-submit"
        >
          Send Message
        </Button>
      </form>
    </GlassCard>
  );
}
