import { Users, Utensils, Bus, MessageSquare, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const SportsTeamsSection = () => {
  const { t } = useLanguage();

  const teams = [
    {
      icon: "🏒",
      name: t("sports.hockey"),
      desc: t("sports.hockey.desc"),
      discount: "20%",
    },
    {
      icon: "⚽",
      name: t("sports.football"),
      desc: t("sports.football.desc"),
      discount: "15%",
    },
    {
      icon: "🏀",
      name: t("sports.other"),
      desc: t("sports.other.desc"),
      discount: "10%",
    },
  ];

  const features = [
    { icon: Utensils, text: t("sports.features.nutrition") },
    { icon: Users, text: t("sports.features.schedule") },
    { icon: Bus, text: t("sports.features.transport") },
    { icon: MessageSquare, text: t("sports.features.meeting") },
  ];

  return (
    <section id="sports" className="py-24 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {t("sports.title")}
          </h2>
          <p className="text-gold font-medium text-lg">{t("sports.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description & Features */}
          <div>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {t("sports.description")}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <feature.icon className="w-5 h-5 text-gold" />
                  <span className="text-white">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Team Cards */}
          <div className="space-y-4">
            {teams.map((team, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{team.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{team.name}</h3>
                    <p className="text-white/60 text-sm">{team.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full">
                  <Percent className="w-4 h-4 text-gold" />
                  <span className="font-bold text-gold">{team.discount}</span>
                  <span className="text-gold/80 text-sm">{t("sports.discount")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="btn-luxury px-8 py-6 text-lg">
            {t("sports.contact")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SportsTeamsSection;
