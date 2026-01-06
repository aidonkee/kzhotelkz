import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { 
  Users, Projector, Mic2, Coffee, Layout, 
  CalendarCheck, CheckCircle2, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ConferencePage = () => {
  const { t } = useLanguage();

  // Галерея (ваши фото)
  const galleryImages = [
    "/conferenceHall/picture-5.jpg",
    "/conferenceHall/picture-3.jpg",
    "/conferenceHall/picture-4.jpg",
    "/conferenceHall/picture-2.jpg",
    "/conferenceHall/picture-1.jpg",
  ];

  // Список мероприятий (из текста)
  const eventTypes = [
    "Бизнес-семинары",
    "Круглые столы",
    "Обучающие семинары",
    "Деловые встречи",
    "Тренинги и мастер-классы"
  ];

  // Преимущества (из текста)
  const features = [
    {
      icon: Layout,
      title: "Гибкая рассадка",
      description: "Вы можете самостоятельно выбирать удобные схемы расстановки столов и стульев под формат вашего мероприятия."
    },
    {
      icon: Projector,
      title: "Полное оснащение",
      description: "Включено в аренду: маркерная доска, цифровой проектор, экран и все необходимое для презентаций."
    },
    {
      icon: Coffee,
      title: "Кейтеринг",
      description: "Организация кофе-брейков, бизнес-ланчей и фуршетов для участников вашего мероприятия."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/conferenceHall/picture-5.jpg"
            alt="Conference Hall"
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              Бизнес-пространство
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              КОНФЕРЕНЦ-ЗАЛ <br />
              <span className="text-gold">«КЫЗЫЛ ЖАР»</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8">
              Идеальное место для проведения деловых мероприятий любого уровня в центре города.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button className="btn-luxury h-12 px-8 text-base rounded-full">
                  Забронировать зал
                </Button>
              </Link>
              <a href="#details" className="group">
                <Button variant="outline" className="h-12 px-8 text-base rounded-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                  Подробнее
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- KEY STATS (Плавающая панель) --- */}
      <div className="container mx-auto px-4 max-w-5xl relative -mt-16 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100"
        >
          <div className="text-center px-4">
            <div className="text-gold mb-2 flex justify-center"><Users className="w-8 h-8" /></div>
            <p className="text-3xl font-bold text-primary mb-1">30-50</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Вместимость (чел)</p>
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <div className="text-gold mb-2 flex justify-center"><CheckCircle2 className="w-8 h-8" /></div>
            <p className="text-3xl font-bold text-primary mb-1">10 000 ₸</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Стоимость аренды (час)</p>
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <div className="text-gold mb-2 flex justify-center"><Mic2 className="w-8 h-8" /></div>
            <p className="text-3xl font-bold text-primary mb-1">ALL IN</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Оборудование включено</p>
          </div>
        </motion.div>
      </div>

      {/* --- INFO & FEATURES --- */}
      <div id="details" className="container mx-auto px-4 md:px-6 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Пространство для ваших идей
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Гостиница «Кызыл Жар» располагает удобным конференц-залом, который можно использовать для проведения деловых мероприятий любого уровня. 
                В нашем зале можно организовать 30-50 мест, он может быть оборудован любым необходимым для проведения мероприятий оборудованием.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-gold" />
                Идеально подходит для:
              </h3>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gold hover:text-white transition-colors cursor-default">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote / Highlight */}
            <div className="pl-6 border-l-4 border-gold italic text-gray-600">
              "Если ваша компания подыскивает зал для проведения в Петропавловске тренинга, конференции или семинара — наш зал будет идеальным выбором."
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/30 transition-all group"
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-gold transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-gold transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* --- GALLERY (Masonry Grid) --- */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Галерея зала</h2>
            <p className="text-muted-foreground">Взгляните на пространство для ваших будущих мероприятий</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
            {/* Большая фотка слева */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden relative group">
              <img src={galleryImages[0]} alt="Main Hall" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Остальные фотки */}
            {galleryImages.slice(1).map((src, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden relative group">
                <img src={src} alt="Hall Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
        <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Готовы забронировать зал?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Свяжитесь с нами, чтобы обсудить детали, выбрать дату и меню для кофе-брейка.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/booking">
                   <Button className="bg-gold hover:bg-gold/90 text-white h-14 px-10 rounded-full text-lg shadow-lg shadow-gold/20">
                     Забронировать онлайн
                   </Button>
                </Link>
                <Link to="/contacts">
                   <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary h-14 px-10 rounded-full text-lg bg-transparent">
                     Связаться с менеджером
                   </Button>
                </Link>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ConferencePage;