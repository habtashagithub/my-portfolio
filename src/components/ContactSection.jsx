export const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

        <div className="space-y-6">

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <h4 className="font-medium">Email</h4>
              <a href="mailto:habtamuashambel@gmail.com">
                habtamuashambel@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <h4 className="font-medium">Phone</h4>
              <a href="tel:+251927056715">
                +251 927056715
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
      </div>

      {/* Connect With Me */}
      <div>
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
  );
};
