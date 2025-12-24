import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Wifi, Coffee, Bath, Tv, AirVent, Check } from "lucide-react";

const roomsData = [
  {
    id: "family",
    nameKey: "rooms.family.name",
    descKey: "rooms.family.desc",
    price: "45 000",
    capacity: "4",
    size: "55 м²",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    ],
    features: ["wifi", "coffee", "bath", "tv", "ac"],
    amenities: [
      "room.amenity.king_bed",
      "room.amenity.sofa_bed",
      "room.amenity.minibar",
      "room.amenity.safe",
      "room.amenity.workspace",
      "room.amenity.hairdryer",
    ],
  },
  {
    id: "lux",
    nameKey: "rooms.lux.name",
    descKey: "rooms.lux.desc",
    price: "40 000",
    capacity: "2",
    size: "45 м²",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    ],
    features: ["wifi", "coffee", "bath", "tv", "ac"],
    amenities: [
      "room.amenity.king_bed",
      "room.amenity.minibar",
      "room.amenity.safe",
      "room.amenity.workspace",
      "room.amenity.hairdryer",
      "room.amenity.bathrobe",
    ],
  },
  {
    id: "semilux",
    nameKey: "rooms.semilux.name",
    descKey: "rooms.semilux.desc",
    price: "30 000",
    capacity: "2",
    size: "35 м²",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
    features: ["wifi", "coffee", "tv"],
    amenities: [
      "room.amenity.queen_bed",
      "room.amenity.minibar",
      "room.amenity.workspace",
      "room.amenity.hairdryer",
    ],
  },
  {
    id: "standard",
    nameKey: "rooms.standard.name",
    descKey: "rooms.standard.desc",
    price: "20 000",
    capacity: "2",
    size: "25 м²",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    ],
    features: ["wifi", "tv"],
    amenities: [
      "room.amenity.double_bed",
      "room.amenity.workspace",
      "room.amenity.hairdryer",
    ],
  },
  {
    id: "econom_plus",
    nameKey: "rooms.econom_plus.name",
    descKey: "rooms.econom_plus.desc",
    price: "15 000",
    capacity: "2",
    size: "20 м²",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
    ],
    features: ["wifi"],
    amenities: [
      "room.amenity.double_bed",
      "room.amenity.hairdryer",
    ],
  },
  {
    id: "econom",
    nameKey: "rooms.econom.name",
    descKey: "rooms.econom.desc",
    price: "10 000",
    capacity: "1-2",
    size: "15 м²",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
    ],
    features: ["wifi"],
    amenities: [
      "room.amenity.single_bed",
      "room.amenity.hairdryer",
    ],
  },
];

const featureIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-5 h-5" />,
  coffee: <Coffee className="w-5 h-5" />,
  bath: <Bath className="w-5 h-5" />,
  tv: <Tv className="w-5 h-5" />,
  ac: <AirVent className="w-5 h-5" />,
};

const featureLabels: Record<string, string> = {
  wifi: "Wi-Fi",
  coffee: "Кофемашина",
  bath: "Ванна",
  tv: "ТВ",
  ac: "Кондиционер",
};

const RoomDetailPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const room = roomsData.find((r) => r.id === id);

  if (!room) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center relative z-10">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Номер не найден
          </h1>
          <Link to="/rooms">
            <Button variant="outline">Вернуться к номерам</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 relative z-10">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("rooms.title")}
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={room.image}
                alt={t(room.nameKey)}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gallery */}
            {room.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {room.gallery.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={img}
                      alt={`${t(room.nameKey)} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            {/* Title & Price */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {t(room.nameKey)}
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gold">{room.price} ₸</span>
                <span className="text-muted-foreground">/ {t("rooms.night")}</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 py-4 border-y border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>{room.capacity} {t("hero.guests_plural")}</span>
              </div>
              <div className="text-muted-foreground">
                <span className="font-medium">{room.size}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {t(room.descKey)}
            </p>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Удобства в номере</h3>
              <div className="flex flex-wrap gap-3">
                {room.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg"
                  >
                    <span className="text-primary">{featureIcons[feature]}</span>
                    <span className="text-sm">{featureLabels[feature]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities List */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Включено</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{t(amenity)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Button */}
            <Link to={`/booking?room=${room.id}`}>
              <Button className="w-full btn-luxury h-12 text-base mt-4">
                {t("booking.book_this_room")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
