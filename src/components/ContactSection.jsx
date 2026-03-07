import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Interested in <span className="text-primary">working together?</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don’t hesitate to get in touch—I’m always excited to explore new projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:habtamuashambel@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    habtamuashambel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+251927056715">
                    +251 927 056715
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p>Arbaminch, Ethiopia</p>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/habtamua-sarato-840003219" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/hashas2881/" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
