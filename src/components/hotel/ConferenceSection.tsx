import { Users, Monitor, Volume2, Wifi, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom"; // Добавили импорт Link

const ConferenceSection = () => {
  const { t } = useLanguage();

  const equipment = [
    { icon: Monitor, text: t("conference.equipment.projector") },
    { icon: Volume2, text: t("conference.equipment.sound") },
    { icon: Wifi, text: t("conference.equipment.wifi") },
    { icon: Thermometer, text: t("conference.equipment.climate") },
  ];

  return (
    <section id="conference" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {t("conference.title")}
            </h2>
            <p className="text-gold font-medium mb-6">{t("conference.subtitle")}</p>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
              {t("conference.description")}
            </p>

            {/* Capacity */}
            <div className="flex items-center gap-4 bg-beige rounded-2xl p-6 mb-6">
              <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <div>
                <p className="text-charcoal/60 text-sm">{t("conference.capacity")}</p>
                <p className="font-serif text-2xl font-bold text-charcoal">{t("conference.capacity.value")}</p>
              </div>
            </div>

            {/* Equipment */}
            <div className="mb-8">
              <h3 className="font-semibold text-charcoal mb-4">{t("conference.equipment")}</h3>
              <div className="grid grid-cols-2 gap-3">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-charcoal/70"
                  >
                    <item.icon className="w-5 h-5 text-gold" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-gold rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-white mb-4">{t("conference.pricing")}</h3>
              <div className="flex gap-8">
                <div>
                  <p className="text-white/70 text-sm">{t("conference.pricing.hour")}</p>
                  <p className="font-serif text-2xl font-bold text-white">25 000 ₸</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">{t("conference.pricing.day")}</p>
                  <p className="font-serif text-2xl font-bold text-white">150 000 ₸</p>
                </div>
              </div>
            </div>

            {/* Кнопка с переходом на /booking */}
            <Link to="/booking">
              <Button className="btn-luxury">
                {t("conference.book")}
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800"
                alt="Conference Hall"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=400"
                alt="Meeting room"
                className="w-40 h-28 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;