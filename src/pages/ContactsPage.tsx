import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// 1. Выносим объект с переводами за пределы компонента
const TRANSLATIONS = {
  ru: {
    address: "ул. Конституции 54, г. Петропавловск",
    mapLink: "Открыть в 2ГИС",
    mapHint: "Мы находимся в самом центре города, напротив центральной площади.",
    infoTitle: "Контактная информация",
    formTitle: "Напишите нам",
    mapTitle: "Мы на карте",
    formName: "Ваше имя",
    formEmail: "Email",
    formSubject: "Тема",
    formMessage: "Сообщение",
    formSend: "Отправить"
  },
  kz: {
    address: "Конституция к-сі 54, Петропавл қ.",
    mapLink: "2ГИС-те ашу",
    mapHint: "Біз қаланың қақ ортасында, орталық алаңға қарама-қарсы орналасқанбыз.",
    infoTitle: "Байланыс ақпараты",
    formTitle: "Бізге жазыңыз",
    mapTitle: "Біз картадамыз",
    formName: "Сіздің есіміңіз",
    formEmail: "Email",
    formSubject: "Тақырып",
    formMessage: "Хабарлама",
    formSend: "Жіберу"
  },
  en: {
    address: "54 Konstitutsii St, Petropavl",
    mapLink: "Open in 2GIS",
    mapHint: "We are located in the very heart of the city, opposite the central square.",
    infoTitle: "Contact Information",
    formTitle: "Write to us",
    mapTitle: "Find us on map",
    formName: "Your Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSend: "Send"
  },
  zh: {
    address: "彼得罗巴甫洛夫斯克，宪法街 54 号",
    mapLink: "在 2GIS 中打开",
    mapHint: "我们位于市中心，正对着中央广场。",
    infoTitle: "联系方式",
    formTitle: "给我们留言",
    mapTitle: "地图位置",
    formName: "您的姓名",
    formEmail: "电子邮件",
    formSubject: "主题",
    formMessage: "信息内容",
    formSend: "发送"
  },
  az: {
    address: "Konstitusiya küç. 54, Petropavl ş.",
    mapLink: "2GİS-də açın",
    mapHint: "Şəhərin mərkəzində, mərkəzi meydanla üzbəüz yerləşirik.",
    infoTitle: "Əlaqə məlumatı",
    formTitle: "Bizə yazın",
    mapTitle: "Xəritədə yerimiz",
    formName: "Adınız",
    formEmail: "Email",
    formSubject: "Mövzu",
    formMessage: "Mesajınız",
    formSend: "Göndər"
  }
};

const ContactsPage = () => {
  const { t, language } = useLanguage();

  // 2. Безопасно получаем нужный перевод
  const localT = TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.ru;

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'kz' ? "Мекен-жай" : language === 'en' ? "Address" : language === 'zh' ? "地址" : language === 'az' ? "Ünvan" : "Адрес",
      value: localT.address,
    },
    {
      icon: Phone,
      title: language === 'kz' ? "Телефон" : language === 'en' ? "Phone" : language === 'zh' ? "电话" : language === 'az' ? "Telefon" : "Телефон",
      value: ["+7 (7152) 46-11-84", "+7-705-566-09-09", "+7 (7152) 46-46-29", "+7 708-432-16-31"],
      links: ["tel:+77152461184", "tel:+77055660909", "tel:+77152464629", "tel:+77084321631"],
    },
    {
      icon: Mail,
      title: "Email",
      value: "kz-hotel@mail.ru",
      link: "mailto:kz-hotel@mail.ru",
    },
    {
      icon: Clock,
      title: language === 'kz' ? "Жұмыс уақыты" : language === 'en' ? "Working Hours" : language === 'zh' ? "营业时间" : language === 'az' ? "İş saatları" : "Режим работы",
      value: "24/7",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="container mx-auto px-6">

        {/* Заголовок */}
        <div className="text-center mb-12">
          <div className="inline-block p-6 rounded-3xl backdrop-blur-sm">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              {t("contacts.title")}
            </h1>
            <p className="text-muted-foreground font-serif text-lg max-w-2xl mx-auto">
              {t("contacts.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          <div className="flex flex-col gap-8 h-full">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/60 flex-grow flex flex-col">
              <h2 className="font-serif text-2xl font-bold text-primary mb-8">
                {localT.infoTitle}
              </h2>

              <div className="space-y-6 mb-10 flex-grow">
                {contactInfo.map(({ icon: Icon, title, value, links, link }: any, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-serif text-muted-foreground mb-1">{title}</p>
                      {Array.isArray(value) ? (
                        <div className="flex flex-col gap-2">
                          {value.map((v: string, i: number) => {
                            const isMobile = v.startsWith("+7-705") || v.startsWith("+7 708");
                            const waNumber = v.replace(/\D/g, "");
                            return (
                              <div key={i} className="flex items-center gap-3">
                                <a href={links[i]} className="text-foreground font-serif font-medium hover:text-primary transition-colors block text-lg">
                                  {v}
                                </a>
                                {isMobile && (
                                  <a
                                    href={`https://wa.me/${waNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#25D366] p-1.5 rounded-lg hover:scale-110 transition-transform shadow-sm ml-2"
                                    title="WhatsApp"
                                  >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                  </a>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ) : link ? (
                        <a href={link} className="text-foreground font-serif font-medium hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-foreground font-serif font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Форма */}
              <div className="bg-white/50 rounded-2xl p-6 border border-white/40">
                <h3 className="font-serif text-xl font-bold text-primary mb-6">
                  {localT.formTitle}
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder={localT.formName}
                      className="rounded-xl border-gray-200 bg-white/70 focus:bg-white transition-colors font-serif h-12"
                    />
                    <Input
                      type="email"
                      placeholder={localT.formEmail}
                      className="rounded-xl border-gray-200 bg-white/70 focus:bg-white transition-colors font-serif h-12"
                    />
                  </div>
                  <Input
                    placeholder={localT.formSubject}
                    className="rounded-xl border-gray-200 bg-white/70 focus:bg-white transition-colors font-serif h-12"
                  />
                  <Textarea
                    placeholder={localT.formMessage}
                    rows={4}
                    className="rounded-xl border-gray-200 bg-white/70 focus:bg-white resize-none transition-colors font-serif"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-serif font-bold uppercase tracking-widest shadow-lg">
                    <Send className="w-4 h-4 mr-2" />
                    {localT.formSend}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-4 shadow-xl border border-white/60 h-full flex flex-col">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 px-4 pt-2">
                {localT.mapTitle}
              </h2>

              <div className="relative rounded-2xl overflow-hidden flex-grow shadow-inner border border-gray-200 group min-h-[400px]">
                <a
                  href="https://2gis.kz/petropavlovsk/geo/9570828863640244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                >
                  <img
                    src="/2gis.jpg"
                    alt="Map Location"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex flex-col items-center justify-center gap-3">
                    <div className="bg-white p-4 rounded-full shadow-lg">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <span className="bg-white px-6 py-2 rounded-full font-bold shadow-md text-primary uppercase text-sm tracking-widest">
                      {localT.mapLink}
                    </span>
                  </div>
                </a>
              </div>

              <p className="text-sm font-serif text-muted-foreground mt-4 text-center px-4 pb-2">
                {localT.mapHint}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactsPage;