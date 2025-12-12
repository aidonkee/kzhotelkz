import { Building2, Award, MapPin } from "lucide-react";

const aboutCards = [
  {
    icon: Building2,
    title: "Наследие",
    description: "С 2010 года мы создаём незабываемые впечатления для наших гостей, сочетая традиции гостеприимства с современным комфортом.",
  },
  {
    icon: Award,
    title: "Превосходство",
    description: "Наша команда профессионалов обеспечивает безупречный сервис 24/7, предвосхищая каждое ваше желание.",
  },
  {
    icon: MapPin,
    title: "Расположение",
    description: "В самом центре города, в шаговой доступности от ключевых достопримечательностей и бизнес-центров.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            О нашем отеле
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Искусство гостеприимства
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Кызыл Жар — это больше, чем просто отель. Это место, где каждая деталь продумана для вашего комфорта.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="group bg-background rounded-3xl p-8 md:p-10 luxury-shadow luxury-shadow-hover transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <card.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {[
            { value: "14+", label: "Лет опыта" },
            { value: "50+", label: "Номеров" },
            { value: "10K+", label: "Гостей в год" },
            { value: "4.9", label: "Рейтинг" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
