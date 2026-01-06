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
    // ИСПРАВЛЕНИЕ 1: Убрал bg-background, добавил relative z-10 как в RoomsPage
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {/* ИСПРАВЛЕНИЕ 2: Добавил подложку для заголовка, чтобы читался */}
          <div className="inline-block p-4 rounded-2xl  backdrop-blur-sm shadow-sm">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("contacts.title")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("contacts.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            {/* ИСПРАВЛЕНИЕ 3: Обернул контент в карточку с полупрозрачным фоном */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-luxury border border-white/50 h-full">
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
              <div className="bg-white/50 rounded-2xl p-6 border border-white/40">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  {t("contacts.form.title")}
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder={t("contacts.form.name")}
                      className="rounded-xl border-gray-200 bg-white/70 focus:bg-white transition-colors"
                    />
                    <Input
                      type="email"
                      placeholder={t("contacts.form.email")}
                      className="rounded-xl border-gray-200 bg-white/70 focus:bg-white transition-colors"
                    />
                  </div>
                  <Input
                    placeholder={t("contacts.form.subject")}
                    className="rounded-xl border-gray-200 bg-white/70 focus:bg-white transition-colors"
                  />
                  <Textarea
                    placeholder={t("contacts.form.message")}
                    rows={4}
                    className="rounded-xl border-gray-200 bg-white/70 focus:bg-white resize-none transition-colors"
                  />
                  <Button className="btn-luxury w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {t("contacts.form.send")}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            {/* ИСПРАВЛЕНИЕ 4: Тоже обернул карту в красивый контейнер */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-4 shadow-luxury border border-white/50 h-full flex flex-col">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 px-4">
                {t("contacts.map.title")}
              </h2>
              <div className="bg-beige rounded-2xl overflow-hidden flex-grow min-h-[500px] shadow-inner relative">
                {/* Замените src на реальную ссылку Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.921376885341!2d69.13689331585646!3d54.87228398032734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43b23b4970676a6d%3A0x6b4f76236b28038b!2z0KjQs9C-0YHRgi4g0JrRi9C30YvQuyDQltCw0YA!5e0!3m2!1sru!2skz!4v1625634582918!5m2!1sru!2skz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Location"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center px-4 pb-2">
                {t("contacts.map.note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;