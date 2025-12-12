import { Car, Utensils, Wifi, CarTaxiFront, Dumbbell, Bath, Coffee, Briefcase } from "lucide-react";

const amenities = [
  {
    icon: Car,
    title: "Парковка",
    description: "Бесплатная охраняемая парковка",
  },
  {
    icon: Utensils,
    title: "Ресторан",
    description: "Изысканная кухня и завтраки",
  },
  {
    icon: Wifi,
    title: "Wi-Fi",
    description: "Бесплатный высокоскоростной интернет",
  },
  {
    icon: CarTaxiFront,
    title: "Трансфер",
    description: "Услуги такси и трансфера",
  },
  {
    icon: Dumbbell,
    title: "Фитнес",
    description: "Современный тренажёрный зал",
  },
  {
    icon: Bath,
    title: "СПА",
    description: "Зона релаксации и сауна",
  },
  {
    icon: Coffee,
    title: "Лобби-бар",
    description: "Круглосуточный лобби-бар",
  },
  {
    icon: Briefcase,
    title: "Бизнес-центр",
    description: "Конференц-залы и переговорные",
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Удобства
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Всё для вашего комфорта
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Мы предлагаем полный спектр услуг для вашего комфортного пребывания
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="group bg-background rounded-3xl p-6 md:p-8 text-center luxury-shadow luxury-shadow-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                <amenity.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
