import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Users, Projector, Volume2, Wifi, Thermometer, Clock, Calendar } from "lucide-react";

const ConferencePage = () => {
  const { t } = useLanguage();

  const equipment = [
    { icon: Projector, key: "conference.equipment.projector" },
    { icon: Volume2, key: "conference.equipment.sound" },
    { icon: Wifi, key: "conference.equipment.wifi" },
    { icon: Thermometer, key: "conference.equipment.climate" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1517502884422-41eae696c289?w=600&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517502884422-41eae696c289?w=1600&q=80"
          alt="Conference Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("conference.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t("conference.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="text-lg text-muted-foreground mb-8">
              {t("conference.description")}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {/* Capacity */}
              <div className="bg-beige/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("conference.capacity")}</h3>
                </div>
                <p className="text-2xl font-serif font-bold text-gold">30-50 {t("conference.people")}</p>
              </div>

              {/* Pricing */}
              <div className="bg-beige/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t("conference.pricing")}</h3>
                </div>
                <p className="text-2xl font-serif font-bold text-gold">10 000 ₸ <span className="text-base font-normal text-muted-foreground">/ {t("conference.pricing.hour")}</span></p>
              </div>
            </div>

            {/* Equipment */}
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{t("conference.equipment")}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {equipment.map(({ icon: Icon, key }) => (
                <div key={key} className="bg-card rounded-xl p-4 text-center shadow-sm">
                  <Icon className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-sm text-foreground">{t(key)}</p>
                </div>
              ))}
            </div>

            {/* Services */}
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{t("conference.services")}</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-gold" />
                {t("conference.service.seminars")}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-gold" />
                {t("conference.service.trainings")}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-gold" />
                {t("conference.service.equipment")}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-gold" />
                {t("conference.service.catering")}
              </li>
            </ul>

            {/* Gallery */}
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{t("conference.gallery")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="aspect-video rounded-xl overflow-hidden">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-card rounded-3xl p-8 shadow-luxury sticky top-28">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{t("conference.book")}</h3>
              <p className="text-muted-foreground text-sm mb-6">{t("conference.book.desc")}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{t("conference.pricing.hour")}</span>
                  <span className="font-bold text-foreground">10 000 ₸</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{t("conference.pricing.day")}</span>
                  <span className="font-bold text-foreground">60 000 ₸</span>
                </div>
              </div>

              <Button className="btn-luxury w-full mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                {t("conference.book")}
              </Button>
              <p className="text-xs text-center text-muted-foreground">{t("conference.book.note")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferencePage;
