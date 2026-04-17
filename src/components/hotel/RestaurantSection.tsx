import { Clock, Utensils, Wine, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const RestaurantSection = () => {
  const { t } = useLanguage();

  return (
    <section id="restaurant" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Restaurant Berlin"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 glass-gold p-6 rounded-2xl shadow-luxury max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <Wine className="w-8 h-8 text-gold" />
                <span className="font-serif text-xl font-semibold text-charcoal">{t("restaurant.banquet")}</span>
              </div>
              <p className="text-charcoal/70 text-sm">{t("restaurant.banquet.desc")}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {t("restaurant.title")}
            </h2>
            <p className="text-gold font-medium mb-6">{t("restaurant.subtitle")}</p>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
              {t("restaurant.description")}
            </p>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-soft mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-gold" />
                <span className="font-semibold text-charcoal">{t("restaurant.hours")}</span>
              </div>
              <div className="space-y-2 text-charcoal/70">
                <p>{t("restaurant.hours.breakfast")}</p>
                <p>{t("restaurant.hours.lunch")}</p>
                <p>{t("restaurant.hours.dinner")}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Button className="btn-luxury">
                <Utensils className="w-4 h-4 mr-2" />
                {t("restaurant.reserve")}
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                {t("restaurant.menu")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
