import { Building2, Wifi, Shield, Car, Sparkles, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const OfficesSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Building2, text: t("offices.features.furniture") },
    { icon: Wifi, text: t("offices.features.internet") },
    { icon: Shield, text: t("offices.features.security") },
    { icon: Car, text: t("offices.features.parking") },
    { icon: Sparkles, text: t("offices.features.cleaning") },
    { icon: Zap, text: t("offices.features.utilities") },
  ];

  const sizes = [
    { name: t("offices.size.small"), price: "150 000 ₸" },
    { name: t("offices.size.medium"), price: "280 000 ₸" },
    { name: t("offices.size.large"), price: "450 000 ₸" },
  ];

  return (
    <section id="offices" className="py-24 bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {t("offices.title")}
          </h2>
          <p className="text-gold font-medium text-lg mb-4">{t("offices.subtitle")}</p>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            {t("offices.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <div>
            <div className=" rounded-3xl p-8 shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-beige transition-colors"
                  >
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-charcoal font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="mt-8 aspect-video rounded-3xl overflow-hidden shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="Modern office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pricing Cards */}
          <div>
            <h3 className="font-semibold text-charcoal mb-6">{t("offices.sizes")}</h3>
            <div className="space-y-4">
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className=" rounded-2xl p-6 shadow-soft border border-transparent hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal">{size.name}</h4>
                        <div className="flex items-center gap-2 text-charcoal/60 text-sm mt-1">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{t("offices.features.furniture")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-charcoal/60 text-sm">{t("offices.from")}</p>
                      <p className="font-serif text-2xl font-bold text-gold">{size.price}</p>
                      <p className="text-charcoal/60 text-sm">/{t("offices.month")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-luxury w-full mt-8">
              {t("offices.contact")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
