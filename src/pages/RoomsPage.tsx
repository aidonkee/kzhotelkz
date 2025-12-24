import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { AlertTriangle, BedDouble, Users, Wifi, Coffee, Bath } from "lucide-react";

const RoomsPage = () => {
  const { t } = useLanguage();

  const rooms = [
    {
      id: "family",
      nameKey: "rooms.family.name",
      descKey: "rooms.family.desc",
      price: "45 000",
      capacity: "4",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      features: ["wifi", "coffee", "bath"],
    },
    {
      id: "lux",
      nameKey: "rooms.lux.name",
      descKey: "rooms.lux.desc",
      price: "40 000",
      capacity: "2",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      features: ["wifi", "coffee", "bath"],
    },
    {
      id: "semilux",
      nameKey: "rooms.semilux.name",
      descKey: "rooms.semilux.desc",
      price: "30 000",
      capacity: "2",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      features: ["wifi", "coffee"],
    },
    {
      id: "standard",
      nameKey: "rooms.standard.name",
      descKey: "rooms.standard.desc",
      price: "20 000",
      capacity: "2",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      features: ["wifi"],
    },
    {
      id: "econom_plus",
      nameKey: "rooms.econom_plus.name",
      descKey: "rooms.econom_plus.desc",
      price: "15 000",
      capacity: "2",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
      features: ["wifi"],
    },
    {
      id: "econom",
      nameKey: "rooms.econom.name",
      descKey: "rooms.econom.desc",
      price: "10 000",
      capacity: "1-2",
      image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
      features: ["wifi"],
    },
  ];

  const featureIcons: Record<string, React.ReactNode> = {
    wifi: <Wifi className="w-4 h-4" />,
    coffee: <Coffee className="w-4 h-4" />,
    bath: <Bath className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("rooms.title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("rooms.subtitle")}
          </p>
        </div>

        {/* Smoking Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4 max-w-3xl mx-auto">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-800 mb-1">{t("rooms.smoking.title")}</h3>
            <p className="text-amber-700 text-sm">{t("rooms.smoking.desc")}</p>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-card rounded-3xl overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={t(room.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  {room.price} ₸
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {t(room.nameKey)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {t(room.descKey)}
                </p>

                {/* Capacity & Features */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {room.features.map((feature) => (
                      <span key={feature} className="text-gold">
                        {featureIcons[feature]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">{t("rooms.from")}</span>
                    <span className="text-lg font-bold text-gold ml-1">{room.price} ₸</span>
                    <span className="text-sm text-muted-foreground">/{t("rooms.night")}</span>
                  </div>
                  <Button className="btn-luxury text-sm">
                    {t("rooms.details")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
