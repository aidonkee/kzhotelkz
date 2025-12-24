import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactsPage = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      titleKey: "contacts.address.label",
      value: "ул. Конституции 54, г. Петропавловск",
    },
    {
      icon: Phone,
      titleKey: "contacts.phone.label",
      value: "+7 (7152) 46-73-91",
      link: "tel:+77152467391",
    },
    {
      icon: Mail,
      titleKey: "contacts.email.label",
      value: "info@kyzylzhar.kz",
      link: "mailto:info@kyzylzhar.kz",
    },
    {
      icon: Clock,
      titleKey: "contacts.hours.label",
      value: "24/7",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("contacts.title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contacts.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              {t("contacts.info.title")}
            </h2>

            <div className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, titleKey, value, link }) => (
                <div key={titleKey} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t(titleKey)}</p>
                    {link ? (
                      <a href={link} className="text-foreground font-medium hover:text-gold transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 shadow-luxury">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                {t("contacts.form.title")}
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={t("contacts.form.name")}
                    className="rounded-xl border-border/50 bg-background"
                  />
                  <Input
                    type="email"
                    placeholder={t("contacts.form.email")}
                    className="rounded-xl border-border/50 bg-background"
                  />
                </div>
                <Input
                  placeholder={t("contacts.form.subject")}
                  className="rounded-xl border-border/50 bg-background"
                />
                <Textarea
                  placeholder={t("contacts.form.message")}
                  rows={4}
                  className="rounded-xl border-border/50 bg-background resize-none"
                />
                <Button className="btn-luxury w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {t("contacts.form.send")}
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              {t("contacts.map.title")}
            </h2>
            <div className="bg-beige rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-luxury">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.5!2d69.14!3d54.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDUyJzEyLjAiTiA2OcKwMDgnMjQuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              {t("contacts.map.note")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
