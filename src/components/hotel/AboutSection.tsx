import { Building2, Award, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const aboutCards = [
    {
      icon: Building2,
      title: t("about.heritage.title"),
      description: t("about.heritage.desc"),
    },
    {
      icon: Award,
      title: t("about.excellence.title"),
      description: t("about.excellence.desc"),
    },
    {
      icon: MapPin,
      title: t("about.location.title"),
      description: t("about.location.desc"),
    },
  ];

  const stats = [
    { value: "15+", label: t("about.stats.experience") },
    { value: "50+", label: t("about.stats.rooms") },
    { value: "10K+", label: t("about.stats.guests") },
    { value: "4.9", label: t("about.stats.rating") },
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-3">
            {t("nav.about")}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            {t("about.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-4">
            {t("about.subtitle")}
          </p>
        </div>

        {/* CARDS: 
           На мобильном (flex + overflow-x-auto) -> Горизонтальный скролл
           На десктопе (md:grid) -> Сетка 
        */}
        <div className="
          flex flex-nowrap gap-4 overflow-x-auto pb-6 -mx-6 px-6 
          snap-x snap-mandatory 
          md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0
          hide-scrollbar
        ">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="
                min-w-[85vw] md:min-w-0 
                snap-center 
                group bg-background rounded-3xl p-6 md:p-10 
                border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30
                transition-all duration-500
              "
            >
              <div className="flex items-center gap-4 mb-4 md:block md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shrink-0">
                  <card.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground md:mb-4">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats - Сделали компактным блоком с фоном */}
        

      </div>
    </section>
  );
};

export default AboutSection;