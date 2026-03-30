import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Trophy, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

// ... CONTENT_DATA оставляем тем же ...
const CONTENT_DATA = {
  ru: {
    badge: "Гостиничный комплекс",
    title: "Комфорт. Традиции. Доверие.",
    since: "с 1984 года",
    desc: "«Кызыл Жар» — это не просто отель, это визитная карточка Петропавловска. Расположенный в самом сердце города, наш комплекс сочетает в себе многолетние традиции гостеприимства и современные стандарты комфорта.",
    rooms: "Номеров",
    years: "Лет опыта",
    awardDate: "18 апреля 2025",
    awardTitle: "Премия 2GIS Awards",
    awardDesc: "Гостиничный комплекс «Кызыл Жар» получил премию 2GIS Awards. Мы признаны лучшими по отзывам пользователей.",
    awardMore: "Смотреть подробнее",
    infraTitle: "Инфраструктура комплекса",
    infraSub: "Всё для вашего комфорта",
    hotelServ: "Сервисы отеля",
    partnerServ: "Сервисы внутри комплекса",
  },
  // ... остальные языки ...
  kz: {
    badge: "Қонақ үй кешені",
    title: "Жайлылық. Дәстүр. Сенім.",
    since: "1984 жылдан бастап",
    desc: "«Қызыл Жар» — бұл жай ғана қонақ үй емес, бұл Петропавлдың визиттік картасы. Қала орталығында орналасқан кешеніміз көпжылдық қонақжайлылық дәстүрлерін пен заманауи жайлылық стандарттарын біріктіреді.",
    rooms: "Нөмірлер",
    years: "Жыл тәжірибе",
    awardDate: "18 сәуір 2025",
    awardTitle: "2GIS Awards сыйлығы",
    awardDesc: "«Қызыл Жар» қонақ үй кешені 2GIS Awards сыйлығын алды. Біз пайдаланушылардың пікірлері бойынша үздік деп танылдық.",
    awardMore: "Толығырақ көру",
    infraTitle: "Кешен инфракұрылымы",
    infraSub: "Сіздің жайлылығыңыз үшін бәрі бар",
    hotelServ: "Қонақ үй сервистері",
    partnerServ: "Кешен ішіндегі сервистер",
  },
  en: {
    badge: "Hotel Complex",
    title: "Comfort. Traditions. Trust.",
    since: "since 1984",
    desc: "Kyzyl Zhar is more than just a hotel; it's a landmark of Petropavl. Located in the heart of the city, our complex combines many years of hospitality traditions with modern comfort standards.",
    rooms: "Rooms",
    years: "Years of Experience",
    awardDate: "April 18, 2025",
    awardTitle: "2GIS Awards",
    awardDesc: "Kyzyl Zhar Hotel Complex received the 2GIS Awards. We are recognized as the best based on user reviews.",
    awardMore: "Learn More",
    infraTitle: "Complex Infrastructure",
    infraSub: "Everything for your comfort",
    hotelServ: "Hotel Services",
    partnerServ: "Services inside the complex",
  },
  zh: {
    badge: "酒店综合体",
    title: "舒适. 传统. 信任.",
    since: "始于 1984 年",
    desc: "'Kyzyl Zhar'不仅是一家酒店，更是彼得罗巴甫洛夫斯克的名片。我们的综合体位于市中心，将悠久的待客传统与现代舒适标准相结合。",
    rooms: "客房",
    years: "年经验",
    awardDate: "2025 年 4 月 18 日",
    awardTitle: "2GIS 大奖",
    awardDesc: "Kyzyl Zhar 酒店综合体荣获 2GIS 大奖。根据用户评论，我们被公认为最佳酒店。",
    awardMore: "查看详情",
    infraTitle: "综合体基础设施",
    infraSub: "为您提供一切舒适",
    hotelServ: "酒店服务",
    partnerServ: "综合体内部服务",
  },
  az: {
    badge: "Mehmanxana Kompleksi",
    title: "Rahatlıq. Ənənələr. Güvən.",
    since: "1984-cı ildən",
    desc: "'Qızıl Jar' sadəcə bir otel deyil, bu, Petropavl şəhərinin vizit kartıdır. Şəhəрин mərkəzində yerləşən kompleksimiz çoxillik qonaqpərvərlik ənənələrini və müasir rahatlıq standartlarını özündə birləşdirir.",
    rooms: "Otaqlar",
    years: "İl təcrübə",
    awardDate: "18 aprel 2025",
    awardTitle: "2GIS Awards Mükafatı",
    awardDesc: "'Qızıl Jar' mehmanxana kompleksi 2GIS Awards mükafatına layiq görülüb. İstifadəçi rəylərinə əsasən ən yaxşı seçilmişik.",
    awardMore: "Daha ətraflı",
    infraTitle: "Kompleksin İnfrastrukturu",
    infraSub: "Rahatlığınız üçün hər şey",
    hotelServ: "Otel Xidmətləri",
    partnerServ: "Kompleks daxilindəki xidmətlər",
  }
};

const HOTEL_SERVICES_CONFIG = [

  { img: "/Picsart_26-01-14_17-55-44-165.jpg", key: "parking" },
  { img: "/Picsart_26-01-13_22-38-11-024.jpg", key: "wifi" },
  { img: "/Picsart_26-01-14_17-52-03-208.jpg", key: "tv" },
  { img: "/Picsart_26-01-14_17-58-17-441.jpg", key: "laundry" },
  { img: "/Picsart_26-01-14_18-09-53-841.jpg", key: "buffet" },
];

const PARTNER_SERVICES_CONFIG = [
  { img: "/Picsart_26-01-14_17-53-21-886.jpg", key: "barber" },
  { img: "/Picsart_26-01-14_17-51-37-949.jpg", key: "taxi" },
  { img: "/Picsart_26-01-14_18-03-39-275.jpg", key: "berlin", link: "https://berlinrest.kz" },
  { img: "/Picsart_26-01-14_18-19-19-949.jpg", key: "parikh" },

];

const AboutAndAmenitiesSection = () => {
  const { language } = useLanguage();
  const lang = (language as keyof typeof CONTENT_DATA) || 'ru';
  const content = CONTENT_DATA[lang];

  return (
    <section className="relative bg-secondary/10 pt-24 pb-24 overflow-hidden">
      {/* Верхний блок с информацией (без изменений) */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Building2 className="w-4 h-4" />
              {content.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              {content.title} <br />
              <span className="text-gold">{content.since}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {content.desc}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <a href="https://vk.ru/kyzylzhar1984" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 flex items-center gap-4 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#0077FF]/10 flex items-center justify-center group-hover:bg-[#0077FF] group-hover:text-white transition-colors">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.072 2H8.928C3.125 2 2 3.125 2 8.928v6.144C2 20.875 3.125 22 8.928 22h6.144C20.875 22 22 20.875 22 15.072V8.928C22 3.125 20.875 2 15.072 2zm3.328 11.832c.112.312.232.544.352.696.48.592 1.344 1.392 1.632 1.8.2.28.168.392-.048.512-.392.208-1.568.168-2.112.168-.504 0-.848-.128-1.12-.312s-.488-.504-.76-.84c-.456-.56-.848-1.032-1.144-1.032s-.416.304-.416 1.032v.568c0 .264-.088.384-.36.384-2.16 0-4.048-1.112-5.328-3.048-1.392-2.104-1.952-4.448-1.952-4.664 0-.2.088-.304.304-.304h1.72c.184 0 .28.088.336.264.448 1.488 1.136 2.824 2.056 3.968.216.272.416.36.568.36.192 0 .296-.136.296-.64v-1.928c0-.664-.104-.96-.408-1.032.192-.4 1.144-.4 1.48-.4h.544c.4 0 .528.104.528.4v2.544c0 .248.112.384.28.384.192 0 .424-.136.784-.568.744-.928 1.312-2.032 1.768-3.328.064-.176.168-.264.336-.264h1.84c.24 0 .28.112.224.28-.2.616-1.536 4.392-2.312 5.344q-.16.208-.104.36z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">VK</p>
                    <p className="text-sm font-bold text-primary">ВКонтакте</p>
                  </div>
                </div>
              </a>
              <a href="https://www.instagram.com/hotel.kz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 flex items-center gap-4 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#E1306C]/10 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:to-purple-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">IG</p>
                    <p className="text-sm font-bold text-primary">Instagram</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <Link to="/news" className="block group">
              <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-gold/20 overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">

                {/* --- ФОНОВЫЙ ЦВЕТНОЙ ЛОГОТИП (2GIS) --- */}
                <div className="absolute -bottom-6 -right-6 w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-10 z-0 pointer-events-none select-none">
                  <img
                    src="/2-gis-logo.png"
                    alt="2GIS Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* --- КОНТЕНТ --- */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center shadow-lg text-white">
                      <Trophy className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">{content.awardDate}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                    {content.awardTitle.includes("2GIS") ? (
                      <>
                        {content.awardTitle.split("2GIS")[0]}
                        <span className="inline-flex items-baseline">
                          <span className="font-sans font-black">2</span>
                          <span className="font-sans font-black tracking-tight">GIS</span>
                        </span>
                        {content.awardTitle.split("2GIS")[1]}
                      </>
                    ) : content.awardTitle}
                  </h3>

                  <p className="text-gray-600 mb-6 text-base md:text-lg">
                    {content.awardDesc}
                  </p>

                  <div className="flex items-center text-gold font-bold text-sm uppercase tracking-wider gap-2">
                    {content.awardMore} <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* БЛОК КАРУСЕЛЕЙ - ЧИСТЫЙ */}
      <div className="w-full space-y-16">
        <div className="text-center mb-10">
          <p className="text-primary font-medium uppercase text-xs tracking-[0.2em] mb-2">{content.infraSub}</p>
          <h2 className="text-3xl font-serif font-bold text-foreground">{content.infraTitle}</h2>
        </div>

        {/* 1. СЕРВИСЫ ОТЕЛЯ */}
        <div>
          <div className="container mx-auto px-6 mb-4">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2 uppercase tracking-[0.1em]">
              <Star className="w-4 h-4 text-gold fill-gold" /> {content.hotelServ}
            </h3>
          </div>

          {/* Убраны все маски и лишние паддинги */}
          <Marquee speed={30} direction="left">
            {HOTEL_SERVICES_CONFIG.map((item, idx) => (
              <img
                key={idx}
                src={item.img}
                alt={item.key}

                // flex-shrink-0 ОБЯЗАТЕЛЕН, чтобы картинки не сплющивались
                // Убраны тени и лишние отступы
                className="w-[280px] h-[190px] md:w-[400px] md:h-[280px] object-cover flex-shrink-0 rounded-xl mx-2"
                loading="lazy"
              />
            ))}
          </Marquee>
        </div>

        {/* 2. ПАРТНЕРСКИЕ СЕРВИСЫ */}
        <div>
          <div className="container mx-auto px-6 mb-4">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2 uppercase tracking-[0.1em]">
              <Users className="w-4 h-4 text-gold" /> {content.partnerServ}
            </h3>
          </div>

          <Marquee speed={35} direction="right">
            {PARTNER_SERVICES_CONFIG.map((item) => {
              const imgElement = (
                <img
                  src={item.img}
                  alt={item.key}
                  className="w-[280px] h-[190px] md:w-[400px] md:h-[280px] object-cover flex-shrink-0 rounded-xl mx-2 hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              );

              return item.link ? (
                <a
                  key={item.key}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block cursor-pointer"
                >
                  {imgElement}
                </a>
              ) : (
                <div key={item.key} className="inline-block">
                  {imgElement}
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

// МАКСИМАЛЬНО ПРОСТОЙ MARQUEE БЕЗ "ПРОЗРАЧНОЙ ХУЙНИ" (МАСОК)
const Marquee = ({ children, direction = "left", speed = 30 }: { children: React.ReactNode, direction?: "left" | "right", speed?: number }) => {
  return (
    // Убран класс mask-linear-fade и py-4. Оставлен только overflow-hidden
    <div className="flex overflow-hidden w-full select-none">
      <motion.div
        className="flex flex-nowrap shrink-0"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Дублируем контент для бесконечности */}
        <div className="flex flex-nowrap">{children}</div>
        <div className="flex flex-nowrap">{children}</div>
      </motion.div>
    </div>
  );
};

export default AboutAndAmenitiesSection;