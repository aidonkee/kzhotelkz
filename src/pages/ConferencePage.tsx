import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Users, Projector, Mic2, Coffee, Layout,
  CalendarCheck, CheckCircle2, ArrowRight,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ConferencePage = () => {
  const { language } = useLanguage();

  const translations: any = {
    ru: {
      badge: "Бизнес-пространство",
      title: "КОНФЕРЕНЦ-ЗАЛ",
      hotelName: "«КЫЗЫЛ ЖАР»",
      heroDesc: "Идеальное место для проведения деловых мероприятий любого уровня в центре города.",
      btnBook: "Забронировать зал",
      btnMore: "Подробнее",
      statCapacity: "Вместимость (чел)",
      statPrice: "Стоимость аренды (час)",
      statEquip: "Оборудование включено",
      infoTitle: "Пространство для ваших идей",
      infoDesc: "Гостиница «Кызыл Жар» располагает удобным конференц-залом, который можно использовать для проведения деловых мероприятий любого уровня. В нашем зале можно организовать 30-50 мест, он может быть оборудован любым необходимым для проведения мероприятий оборудованием.",
      perfectFor: "Идеально подходит для:",
      eventTypes: ["Бизнес-семинары", "Круглые столы", "Обучающие семинары", "Деловые встречи", "Тренинги и мастер-классы"],
      quote: "Если ваша компания подыскивает зал для проведения в Петропавловске тренинга, конференции или семинара — наш зал будет идеальным выбором.",
      feat1Title: "Гибкая рассадка",
      feat1Desc: "Вы можете самостоятельно выбирать удобные схемы расстановки столов и стульев под формат вашего мероприятия.",
      feat2Title: "Полное оснащение",
      feat2Desc: "Включено в аренду: маркерная доска, цифровой проектор, экран и все необходимое для презентаций.",
      feat3Title: "Кейтеринг",
      feat3Desc: "Организация кофе-брейков, бизнес-ланчей и фуршетов для участников вашего мероприятия.",
      galleryTitle: "Галерея зала",
      galleryDesc: "Взгляните на пространство для ваших будущих мероприятий",
      ctaTitle: "Готовы забронировать зал?",
      ctaDesc: "Свяжитесь с нами, чтобы обсудить детали, выбрать дату и меню для кофе-брейка.",
      ctaBtnOnline: "Забронировать онлайн",
      ctaBtnManager: "Связаться с менеджером"
    },
    kz: {
      badge: "Бизнес-кеңістігі",
      title: "КОНФЕРЕНЦ-ЗАЛ",
      hotelName: "«ҚЫЗЫЛ ЖАР»",
      heroDesc: "Қала орталығында кез келген деңгейдегі іскерлік іс-шараларды өткізуге арналған тамаша орын.",
      btnBook: "Залды брондау",
      btnMore: "Толығырақ",
      statCapacity: "Сыйымдылығы (адам)",
      statPrice: "Жалдау құны (сағат)",
      statEquip: "Жабдық жиынтықта",
      infoTitle: "Идеяларыңызға арналған кеңістік",
      infoDesc: "«Қызыл Жар» қонақ үйінде кез келген деңгейдегі іскерлік іс-шараларды өткізуге болатын ыңғайлы конференц-зал бар. Біздің залда 30-50 орын ұйымдастыруға болады, ол барлық қажетті жабдықтармен қамтамасыз етіледі.",
      perfectFor: "Келесі іс-шараларға қолайлы:",
      eventTypes: ["Бизнес-семинарлар", "Дөңгелек үстелдер", "Оқыту семинарлары", "Іскерлік кездесулер", "Тренингтер мен мастер-кластар"],
      quote: "Егер сіздің компанияңыз Петропавлда тренинг, конференция немесе семинар өткізу үшін зал іздесе — біздің зал тамаша таңдау болады.",
      feat1Title: "Ыңғайлы отырғызу",
      feat1Desc: "Іс-шара форматына сәйкес үстелдер мен орындықтардың орналасу схемасын өзіңіз таңдай аласыз.",
      feat2Title: "Толық жабдықтау",
      feat2Desc: "Жалдау құнына кіреді: маркер тақтасы, сандық проектор, экран және презентацияға қажеттінің бәрі.",
      feat3Title: "Кейтеринг",
      feat3Desc: "Қатысушылар үшін кофе-брейктер, бизнес-ланчтар және фуршеттер ұйымдастыру.",
      galleryTitle: "Зал галереясы",
      galleryDesc: "Болашақ іс-шараларыңызға арналған кеңістікті қараңыз",
      ctaTitle: "Залды брондауға дайынсыз ба?",
      ctaDesc: "Мәліметтерді талқылау, күнді таңдау және кофе-брейк мәзірін таңдау үшін бізге хабарласыңыз.",
      ctaBtnOnline: "Онлайн брондау",
      ctaBtnManager: "Менеджермен байланысу"
    },
    en: {
      badge: "Business Space",
      title: "CONFERENCE HALL",
      hotelName: "«KYZYL ZHAR»",
      heroDesc: "The perfect venue for business events of any level in the heart of the city.",
      btnBook: "Book the Hall",
      btnMore: "Details",
      statCapacity: "Capacity (pax)",
      statPrice: "Rental rate (hour)",
      statEquip: "Equipment included",
      infoTitle: "Space for your ideas",
      infoDesc: "Kyzyl Zhar Hotel features a comfortable conference hall suitable for business events of all kinds. The hall accommodates 30-50 guests and can be equipped with all necessary presentation tools.",
      perfectFor: "Perfectly suited for:",
      eventTypes: ["Business seminars", "Round tables", "Educational workshops", "Business meetings", "Trainings & Masterclasses"],
      quote: "If your company is looking for a venue in Petropavlovsk for a training, conference, or seminar, our hall is the ideal choice.",
      feat1Title: "Flexible Seating",
      feat1Desc: "You can choose the seating arrangement that best fits your event's format.",
      feat2Title: "Full Equipment",
      feat2Desc: "Included in rent: whiteboard, digital projector, screen, and all presentation essentials.",
      feat3Title: "Catering",
      feat3Desc: "Organization of coffee breaks, business lunches, and buffets for your participants.",
      galleryTitle: "Hall Gallery",
      galleryDesc: "Take a look at the space for your future events",
      ctaTitle: "Ready to book the hall?",
      ctaDesc: "Contact us to discuss details, dates, and coffee break menus.",
      ctaBtnOnline: "Book Online",
      ctaBtnManager: "Contact Manager"
    },
    zh: {
      badge: "商务空间",
      title: "会议厅",
      hotelName: "“克孜勒扎尔”",
      heroDesc: "在市中心举办各级商务活动的理想场所。",
      btnBook: "预订大厅",
      btnMore: "详情",
      statCapacity: "容纳人数",
      statPrice: "租金（小时）",
      statEquip: "包含设备",
      infoTitle: "实现您创意的空间",
      infoDesc: "“克孜勒扎尔”酒店拥有舒适的会议厅，可用于举办各级商务活动。我们的大厅可安排 30-50 个座位，并可配备活动所需的任何设备。",
      perfectFor: "非常适合：",
      eventTypes: ["商务研讨会", "圆桌会议", "教育研讨会", "商务会议", "培训和大师班"],
      quote: "如果您的公司正在寻找彼得罗巴甫洛夫斯克的培训、会议或研讨会场地，我们的大厅将是理想的选择。",
      feat1Title: "灵活布局",
      feat1Desc: "您可以根据活动形式自由选择桌椅布局方案。",
      feat2Title: "全套设备",
      feat2Desc: "租金包含：白板、数字投影仪、屏幕及所有演示必需品。",
      feat3Title: "餐饮服务",
      feat3Desc: "为您的参与者组织茶歇、商务午餐和自助餐。",
      galleryTitle: "大厅画廊",
      galleryDesc: "看看您未来活动的空间",
      ctaTitle: "准备预订大厅了吗？",
      ctaDesc: "请联系我们讨论细节、选择日期和茶歇菜单。",
      ctaBtnOnline: "在线预订",
      ctaBtnManager: "联系经理"
    },
    az: {
      badge: "Biznes Məkanı",
      title: "KONFRANS ZALI",
      hotelName: "«QIZIL JHAR»",
      heroDesc: "Şəhərin mərkəzində hər hansı səviyyədə biznes tədbirləri keçirmək üçün ideal məkan.",
      btnBook: "Zalı bron et",
      btnMore: "Ətraflı",
      statCapacity: "Tutum (nəfər)",
      statPrice: "İcarə haqqı (saat)",
      statEquip: "Avadanlıq daxildir",
      infoTitle: "İdeyalarınız üçün məkan",
      infoDesc: "«Qızıl Jhar» mehmanxanası hər hansı səviyyədə biznes tədbirlərinin keçirilməsi üçün rahat konfrans zalına malikdir. Zalımızda 30-50 yer təşkil oluna bilər və lazımi avadanlıqlarla təchiz edilə bilər.",
      perfectFor: "Aşağıdakılar üçün idealdır:",
      eventTypes: ["Biznes seminarları", "Dəyirmi masalar", "Tədris seminarları", "İşgüzar görüşlər", "Treninqlər və master-klaslar"],
      quote: "Əgər şirkətiniz Petropavlovskda treninq, konfrans və ya seminar keçirmək üçün zal axtarırsa — bizim zal ideal seçim olacaq.",
      feat1Title: "Çevik oturma planı",
      feat1Desc: "Tədbirinizin formatına uyğun olaraq masa və stulların düzülüş sxemini sərbəst seçə bilərsiniz.",
      feat2Title: "Tam təchizat",
      feat2Desc: "İcarəyə daxildir: marker lövhəsi, rəqəmsal proyektor, ekran və təqdimatlar üçün lazım olan hər şey.",
      feat3Title: "Keyterinq",
      feat3Desc: "İştirakçılarınız üçün kofe-breyklərin, biznes naharlarının və furşetlərin təşkili.",
      galleryTitle: "Zalın qalereyası",
      galleryDesc: "Gələcək tədbirləriniz üçün məkana nəzər salın",
      ctaTitle: "Zalı bron etməyə hazırsınız?",
      ctaDesc: "Təfərrüatları müzakirə etmək, tarix və kofe-breyk menyusunu seçmək üçün bizimlə əlaqə saxlayın.",
      ctaBtnOnline: "Onlayn bron et",
      ctaBtnManager: "Menecerlə əlaqə"
    }
  };

  const t_cur = translations[language] || translations.ru;

  const galleryImages = [
    "/conferenceHall/picture-5.jpg",
    "/conferenceHall/picture-3.jpg",
    "/conferenceHall/picture-4.jpg",
    "/conferenceHall/picture-2.jpg",
    "/conferenceHall/picture-1.jpg",
  ];

  const features = [
    {
      icon: Layout,
      title: t_cur.feat1Title,
      description: t_cur.feat1Desc
    },
    {
      icon: Projector,
      title: t_cur.feat2Title,
      description: t_cur.feat2Desc
    },
    {
      icon: Coffee,
      title: t_cur.feat3Title,
      description: t_cur.feat3Desc
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-0 md:p-10 touch-none"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors z-[100]"
            onClick={() => setIsFullscreen(false)}
          >
            ×
          </button>

          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIdx}
                src={galleryImages[currentIdx]}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
                  } else if (info.offset.x > swipeThreshold) {
                    setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                  }
                }}
                className="max-w-full max-h-full object-contain shadow-2xl cursor-grab active:cursor-grabbing select-none"
                alt="Fullscreen"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 z-[100]">
            <Button
              variant="outline"
              className="w-14 h-14 rounded-full bg-white/10 text-white border-white/20 hover:bg-gold hover:text-white backdrop-blur-md hidden md:flex"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              variant="outline"
              className="w-14 h-14 rounded-full bg-white/10 text-white border-white/20 hover:bg-gold hover:text-white backdrop-blur-md hidden md:flex"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>

          {/* Swipe Indicator for Mobile */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-widest md:hidden">
            swipe to slide
          </div>
        </div>
      )}

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
              {t_cur.badge}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t_cur.title} <br />
              <span className="text-gold">{t_cur.hotelName}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8">
              {t_cur.heroDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/77754530090?text=${encodeURIComponent("Здравствуйте, пишу вам по поводу конференц зала")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-luxury h-12 px-8 text-base rounded-full">
                  {t_cur.btnBook}
                </Button>
              </a>
              <a href="#details" className="group">
                <Button variant="outline" className="h-12 px-8 text-base rounded-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                  {t_cur.btnMore}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- KEY STATS --- */}
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
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{t_cur.statCapacity}</p>
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <div className="text-gold mb-2 flex justify-center"><CheckCircle2 className="w-8 h-8" /></div>
            <p className="text-3xl font-bold text-primary mb-1">10 000 ₸</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{t_cur.statPrice}</p>
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <div className="text-gold mb-2 flex justify-center"><Mic2 className="w-8 h-8" /></div>
            <p className="text-3xl font-bold text-primary mb-1">ALL IN</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{t_cur.statEquip}</p>
          </div>
        </motion.div>
      </div>

      {/* --- INFO & FEATURES --- */}
      <div id="details" className="container mx-auto px-4 md:px-6 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                {t_cur.infoTitle}
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
                {t_cur.infoDesc}
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-primary/5">
              <h3 className="font-bold text-xl text-primary mb-6 flex items-center gap-3">
                <CalendarCheck className="w-6 h-6 text-gold" />
                {t_cur.perfectFor}
              </h3>
              <div className="flex flex-wrap gap-3">
                {t_cur.eventTypes.map((type: string, idx: number) => (
                  <span key={idx} className="bg-primary/5 text-primary border border-primary/10 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gold hover:text-white hover:border-gold transition-all cursor-default">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all group flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all transform group-hover:rotate-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-gold transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stretched Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-gold/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center mb-20 border border-gold/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold italic text-primary leading-relaxed max-w-5xl mx-auto">
              "{t_cur.quote}"
            </h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mt-8 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* --- GALLERY --- */}
      <div className="bg-[#111] py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block">{t_cur.badge}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t_cur.galleryTitle}</h2>
            <p className="text-white/50 text-lg font-light">{t_cur.galleryDesc}</p>
          </div>

          <div
            className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[16/9] cursor-zoom-in border border-white/10"
            onClick={() => setIsFullscreen(true)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIdx}
                src={galleryImages[currentIdx]}
                alt="Conference Hall"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-end">
              <p className="text-white/80 text-sm font-medium tracking-widest uppercase">Нажмите, чтобы увеличить / Swipe to slide</p>
              <span className="text-gold font-black text-xl">{currentIdx + 1} / {galleryImages.length}</span>
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                className="w-14 h-14 rounded-full bg-black/40 text-white hover:bg-gold hover:text-white backdrop-blur-md border border-white/20 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                className="w-14 h-14 rounded-full bg-black/40 text-white hover:bg-gold hover:text-white backdrop-blur-md border border-white/20 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className={`w-20 md:w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer transform hover:scale-105 ${idx === currentIdx ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] opacity-100' : 'border-transparent opacity-40 hover:opacity-80'}`}
                onClick={() => setCurrentIdx(idx)}
              >
                <img src={src} alt={`Hall ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
        <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              {t_cur.ctaTitle}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              {t_cur.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/77754530090?text=${encodeURIComponent("Здравствуйте, пишу вам по поводу конференц зала")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="bg-gold hover:bg-gold/90 text-white h-14 px-6 md:px-10 rounded-full text-lg shadow-lg shadow-gold/20 w-full sm:w-auto">
                  {t_cur.btnBook}
                </Button>
              </a>
              <Link to="/contacts" className="w-full sm:w-auto">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary h-14 px-6 md:px-10 rounded-full text-lg bg-transparent w-full sm:w-auto">
                  {t_cur.ctaBtnManager}
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