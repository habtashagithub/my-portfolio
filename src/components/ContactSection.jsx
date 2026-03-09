import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
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

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+251927056715"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +251 927056715
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Arbaminch, Ethiopia
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* Connect With Me */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">
              Connect With Me
            </h3>

            <div className="flex gap-6 justify-center md:justify-start">

              <a
                href="https://www.linkedin.com/in/habtamua-sarato-840003219"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:scale-110 transition"
              >
                <Linkedin size={28} />
              </a>

              <a
                href="https://www.instagram.com/hashas2881/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:scale-110 transition"
              >
                <Instagram size={28} />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
