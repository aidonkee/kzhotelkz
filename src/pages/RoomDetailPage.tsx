import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Wifi, Coffee, Bath, Tv, AirVent, Check } from "lucide-react";

const featureIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-5 h-5" />,
  coffee: <Coffee className="w-5 h-5" />,
  bath: <Bath className="w-5 h-5" />,
  tv: <Tv className="w-5 h-5" />,
  ac: <AirVent className="w-5 h-5" />,
};

const RoomDetailPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const featureLabels: Record<string, string> = {
    wifi: t("amenities.wifi"),
    coffee: t("amenities.coffee"),
    bath: t("amenities.spa"),
    tv: "TV",
    ac: t("conference.equipment.climate"),
  };

  // ДАННЫЕ СИНХРОНИЗИРОВАНЫ С ROOMSPAGE
  const roomsData = [
    // --- Одноместные ---
    {
      id: "single-econom",
      name: t("rooms.single_econom.name"),
      description: t("rooms.single_econom.desc"),
      price: "8 000",
      capacity: "1",
      images: ["/1-place-econom/picture-1.jpg", "/1-place-econom/picture-2.jpg", "/1-place-econom/picture-3.jpg"],
      features: ["wifi", "tv"],
      amenities: ["room.amenity.single_bed", "room.amenity.hairdryer"],
    },
    {
      id: "single-econom-wide",
      name: t("rooms.single_econom_wide.name"),
      description: t("rooms.single_econom_wide.desc"),
      price: "9 000",
      capacity: "1",
      images: ["/1-place-econom/picture-1.jpg", "/1-place-econom/picture-2.jpg"],
      features: ["wifi", "tv"],
      amenities: ["room.amenity.double_bed", "room.amenity.hairdryer"],
    },
    {
      id: "single-two-room",
      name: t("rooms.single_two_room.name"),
      description: t("rooms.single_two_room.desc"),
      price: "10 000",
      capacity: "1",
      images: ["/1-pace-2room-econom+/picture-1.jpg", "/1-pace-2room-econom+/picture-2.jpg", "/1-pace-2room-econom+/picture-3.jpg"],
      features: ["wifi", "tv", "bath"],
      amenities: ["room.amenity.sofa_bed", "room.amenity.single_bed"],
    },
    {
      id: "econom-plus",
      name: t("rooms.econom_plus.name"),
      description: t("rooms.econom_plus.desc"),
      price: "11 000",
      capacity: "1-2",
      images: ["/1-place-econom+/picture-1.jpg", "/1-place-econom+/picture-2.jpg"],
      features: ["wifi", "tv"],
      amenities: ["room.amenity.double_bed", "room.amenity.workspace"],
    },
    {
      id: "single-standard",
      name: t("rooms.single_standard.name"),
      description: t("rooms.single_standard.desc"),
      price: "12 000",
      capacity: "1",
      images: ["/one-place-standart/picture-1.jpg", "/one-place-standart/picture-2.jpg", "/one-place-standart/picture-3.jpg"],
      features: ["wifi", "tv", "bath", "coffee"],
      amenities: ["room.amenity.single_bed", "room.amenity.minibar"],
    },
    {
      id: "single-semilux",
      name: t("rooms.single_semilux.name"),
      description: t("rooms.single_semilux.desc"),
      price: "15 000",
      capacity: "1",
      images: ["/1-place-semilux/picture-1.jpg", "/1-place-semilux/picture-2.jpg"],
      features: ["wifi", "tv", "bath", "coffee"],
      amenities: ["room.amenity.queen_bed", "room.amenity.hairdryer", "room.amenity.bathrobe"],
    },

    // --- Двухместные ---
    {
      id: "double-econom",
      name: t("rooms.double_econom.name"),
      description: t("rooms.double_econom.desc"),
      price: "12 000",
      capacity: "2",
      images: ["/2-lace-econom/picture-1.jpg", "/2-lace-econom/picture-2.jpg"],
      features: ["wifi", "tv"],
      amenities: ["room.amenity.double_bed", "room.amenity.hairdryer"],
    },
    {
      id: "double-econom-plus",
      name: t("rooms.double_econom_plus.name"),
      description: t("rooms.double_econom_plus.desc"),
      price: "16 000",
      capacity: "2",
      images: ["/2-place-econom+/picture-1.jpg", "/2-place-econom+/picture-2.jpg"],
      features: ["wifi", "tv", "bath", "coffee"],
      amenities: ["room.amenity.double_bed", "room.amenity.workspace"],
    },
    {
      id: "double-standard",
      name: t("rooms.double_standard.name"),
      description: t("rooms.double_standard.desc"),
      price: "18 000",
      capacity: "2",
      images: ["/2-place-standard/45-photo_5361824987964182338_y (1).jpg", "/2-place-standard/46-photo_5361824987964182336_y (1).jpg"],
      features: ["wifi", "tv", "bath", "coffee"],
      amenities: ["room.amenity.queen_bed", "room.amenity.minibar"],
    },

    // --- Трёх/Четырёхместные ---
    {
      id: "triple-econom",
      name: t("rooms.triple_econom.name"),
      description: t("rooms.triple_econom.desc"),
      price: "15 000",
      capacity: "3",
      images: ["/3-place-econom/15-photo_5361824987964182330_y (1).jpg", "/3-place-econom/47-photo_5361824987964182334_y (1).jpg", "/3-place-econom/48-photo_5361824987964182335_y (1).jpg"],
      features: ["wifi", "tv"],
      amenities: ["room.amenity.single_bed", "room.amenity.hairdryer"],
    },
    {
      id: "triple",
      name: t("rooms.triple.name"),
      description: t("rooms.triple.desc"),
      price: "18 000",
      capacity: "3",
      images: ["/3-place-econom+/picture-1.jpg", "/3-place-econom+/picture-2.jpg", "/3-place-econom+/picture-3.jpg"],
      features: ["wifi", "tv", "bath"],
      amenities: ["room.amenity.single_bed", "room.amenity.workspace"],
    },
    {
      id: "quadruple-econom",
      name: t("rooms.quadruple_econom.name"),
      description: t("rooms.quadruple_econom.desc"),
      price: "20 000",
      capacity: "4",
      images: ["/4-place-econom/14-photo_5361824987964182328_y (1).jpg", "/4-place-econom/22-photo_5361824987964182329_y (1).jpg"],
      features: ["wifi", "tv"],
      amenities: ["room.amenity.single_bed", "room.amenity.hairdryer"],
    },

    // --- Полулюксы и Люксы ---
    {
      id: "double-semilux",
      name: t("rooms.double_semilux.name"),
      description: t("rooms.double_semilux.desc"),
      price: "22 000",
      capacity: "2",
      images: ["/semi-lux-2-place/10-photo_5361824987964182344_y (1).jpg", "/semi-lux-2-place/11-photo_5361824987964182345_y (1).jpg", "/semi-lux-2-place/12-photo_5361824987964182343_y (1).jpg"],
      features: ["wifi", "tv", "bath", "ac", "coffee"],
      amenities: ["room.amenity.queen_bed", "room.amenity.sofa_bed", "room.amenity.minibar"],
    },
    {
      id: "family-2",
      name: t("rooms.family_2place.name"),
      description: t("rooms.family_2place.desc"),
      price: "25 000",
      capacity: "2-3",
      images: ["/family-2place/1-IMAGE 2025-12-25 20:21:50.jpg", "/family-2place/2-IMAGE 2025-12-25 20:21:44.jpg", "/family-2place/28-photo_5361824987964182368_y (1).jpg"],
      features: ["wifi", "tv", "bath", "ac", "coffee"],
      amenities: ["room.amenity.queen_bed", "room.amenity.minibar"],
    },
    {
      id: "family",
      name: t("rooms.family_3room.name"),
      description: t("rooms.family_3room.desc"),
      price: "30 000",
      capacity: "4-6",
      images: ["/family-3-room/1-IMAGE 2025-12-25 20:21:35.jpg", "/family-3-room/2-IMAGE 2025-12-25 20:21:34.jpg", "/family-3-room/32-photo_5361824987964182364_y (1).jpg"],
      features: ["wifi", "tv", "bath", "ac", "coffee"],
      amenities: ["room.amenity.king_bed", "room.amenity.sofa_bed", "room.amenity.bathrobe"],
    },
    {
      id: "lux-2room",
      name: t("rooms.lux_2room.name"),
      description: t("rooms.lux_2room.desc"),
      price: "35 000",
      capacity: "2-4",
      images: ["/2-room-lux/picture-1.jpg", "/2-room-lux/picture-2.jpg", "/2-room-lux/picture-3.jpg", "/2-room-lux/picture-4.jpg"],
      features: ["wifi", "tv", "bath", "ac", "coffee"],
      amenities: ["room.amenity.king_bed", "room.amenity.minibar", "room.amenity.bathrobe", "room.amenity.safe"],
    },
    {
      id: "lux-3room",
      name: t("rooms.lux_3room.name"),
      description: t("rooms.lux_3room.desc"),
      price: "45 000",
      capacity: "4-6",
      images: ["/3-room-lux/17-photo_5361824987964182350_y (1).jpg", "/3-room-lux/18-photo_5361824987964182349_y (1).jpg", "/3-room-lux/23-photo_5361824987964182347_y (1).jpg"],
      features: ["wifi", "tv", "bath", "ac", "coffee"],
      amenities: ["room.amenity.king_bed", "room.amenity.sofa_bed", "room.amenity.minibar", "room.amenity.safe", "room.amenity.bathrobe"],
    },
  ];

  const room = roomsData.find((r) => r.id === id);

  if (!room) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center relative z-10">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            {t("rooms.details")}
          </h1>
          <Link to="/rooms">
            <Button variant="outline">{t("rooms.title")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 relative z-10">
      <div className="container mx-auto px-6">
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("rooms.title")}
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* СЕТКА ФОТОГРАФИЙ (БОЛЬШАЯ + МАЛЕНЬКИЕ) */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <img
                src={room.images && room.images.length > 0 ? room.images[0] : "/placeholder.svg"}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>

            {room.images && room.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {room.images.slice(1).map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden cursor-pointer group">
                    <img
                      src={img}
                      alt={`${room.name} ${idx + 2}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {room.name}
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gold">{room.price} ₸</span>
                <span className="text-muted-foreground">/ {t("rooms.night")}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 py-4 border-y border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>{room.capacity} {t("hero.guests_plural")}</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {room.description}
            </p>

            <div>
              <h3 className="font-semibold text-foreground mb-3">{t("amenities.title")}</h3>
              <div className="flex flex-wrap gap-3">
                {room.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-white/40 px-4 py-2 rounded-lg"
                  >
                    <span className="text-primary">{featureIcons[feature]}</span>
                    <span className="text-sm">{featureLabels[feature]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">{t("amenities.title")}</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{t(amenity)}</span>
                  </div>
                ))}
              </div>
            </div>

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