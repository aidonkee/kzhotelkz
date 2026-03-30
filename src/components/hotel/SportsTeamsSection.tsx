import { motion } from "framer-motion";
import { Clock, ShieldCheck, Bus, Dumbbell, Utensils, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const SPORTS_CONTENT = {
  ru: {
    badge: "Партнерство с чемпионами",
    subtitle: "Специальные условия для спортивных команд",
    cta: "Обсудить размещение",
    teamsInfo: "Индивидуальные условия для команд от 10 человек",
    f1_t: "Гибкий график",
    f1_d: "Организуем питание и размещение с учетом графика тренировок, матчей и ранних выездов.",
    f2_t: "Приватность и покой",
    f2_d: "Отдельные этажи или крыло отеля для комфортного проживания команды и тренерского штаба.",
    f3_t: "Удобная логистика",
    f3_d: "Помощь в организации трансфера, парковка для автобусов, ранний заезд и поздний выезд по согласованию.",
    f4_t: "Пространство для восстановления",
    f4_d: "Зоны отдыха, возможность организации командных собраний или теоретических разборов.",
    f5_t: "3-разовое спортивное питание",
    f5_d: "Сбалансированное меню с учетом режима тренировок. Возможность корректировки рациона по запросу.",
    f6_t: "Специальные тарифы",
    f6_d: "Индивидуальные условия при размещении от 10 человек. Выгодные пакеты «проживание + питание».",
    t1_t: "Хоккейные клубы", t1_s: "Размещение состава и тренерского штаба с учетом графика игр",
    t2_t: "Футбольные команды", t2_s: "Комфортные условия для восстановления между матчами",
    t3_t: "Баскетбол и волейбол", t3_s: "Возможность предоставления номеров с удлиненными кроватями",
    t4_t: "Индивидуальные виды", t4_s: "Тихие номера для концентрации перед соревнованиями"
  },
  kz: {
    badge: "Чемпиондармен серіктестік",
    subtitle: "Спорттық командалар үшін арнайы жағдайлар",
    cta: "Орналастыруды талқылау",
    teamsInfo: "10 адамнан тұратын командалар үшін жеке шарттар",
    f1_t: "Икемді график",
    f1_d: "Жаттығулар, матчтар және ерте шығу кестесін ескере отырып, тамақтану мен орналастыруды ұйымдастырамыз.",
    f2_t: "Құпиялылық пен тыныштық",
    f2_d: "Команда мен жаттықтырушылар штабының жайлы тұруы үшін бөлек қабаттар немесе қонақ үй қанаты.",
    f3_t: "Ыңғайлы логистика",
    f3_d: "Трансферді ұйымдастыруға көмек, автобустарға арналған тұрақ, келісім бойынша ерте кіру және кеш шығу.",
    f4_t: "Қалпына келтіру кеңістігі",
    f4_d: "Демалыс аймақтары, командалық жиналыстарды немесе теориялық талдауларды ұйымдастыру мүмкіндігі.",
    f5_t: "3 мезгіл спорттық тамақтану",
    f5_d: "Жаттығу режимін ескере отырып теңдестірілген мәзір. Сұраныс бойынша рационды түзету мүмкіндігі.",
    f6_t: "Арнайы тарифтер",
    f6_d: "10 адамнан бастап орналастыру кезінде жеке жағдайлар. «Тұру + тамақтану» тиімді пакеттері.",
    t1_t: "Хоккей клубтары", t1_s: "Ойындар кестесін ескере отырып, құрамды және жаттықтырушылар штабын орналастыру",
    t2_t: "Футбол командалары", t2_s: "Матчтар арасында қалпына келу үшін жайлы жағдайлар",
    t3_t: "Баскетбол және волейбол", t3_s: "Ұзартылған кереуеттері бар нөмірлерді ұсыну мүмкіндігі",
    t4_t: "Жеке түрлер", t4_s: "Жарыс алдында шоғырлануға арналған тыныш нөмірлер"
  },
  en: {
    badge: "Partnership with Champions",
    subtitle: "Special conditions for sports teams",
    cta: "Discuss placement",
    teamsInfo: "Individual conditions for teams of 10 or more people",
    f1_t: "Flexible schedule",
    f1_d: "We organize meals and accommodation taking into account the schedule of trainings, matches and early departures.",
    f2_t: "Privacy and peace",
    f2_d: "Separate floors or a hotel wing for comfortable stay of the team and coaching staff.",
    f3_t: "Convenient logistics",
    f3_d: "Assistance in organizing transfers, parking for buses, early check-in and late check-out by agreement.",
    f4_t: "Space for recovery",
    f4_d: "Rest areas, the possibility of organizing team meetings or theoretical analysis.",
    f5_t: "3-meal sports nutrition",
    f5_d: "Balanced menu taking into account the training regime. Possibility of adjusting the diet upon request.",
    f6_t: "Special rates",
    f6_d: "Individual conditions for groups of 10+ people. Profitable \"accommodation + meals\" packages.",
    t1_t: "Hockey Clubs", t1_s: "Placement of the squad and coaching staff taking into account the game schedule",
    t2_t: "Football Teams", t2_s: "Comfortable conditions for recovery between matches",
    t3_t: "Basketball & Volleyball", t3_s: "Possibility of providing rooms with extended beds",
    t4_t: "Individual Sports", t4_s: "Quiet rooms for concentration before competitions"
  },
  zh: {
    badge: "与冠军合作",
    subtitle: "运动队的特别条件",
    cta: "讨论住宿",
    teamsInfo: "10人以上团队的个别条件",
    f1_t: "灵活的时间表",
    f1_d: "我们根据训练、比赛和早出发的时间表组织餐饮和住宿。",
    f2_t: "隐私与安宁",
    f2_d: "为团队和教练组提供舒适住宿的单独楼层或酒店侧翼。",
    f3_t: "便捷的后勤",
    f3_d: "协助组织接送，巴士停车，早入住和晚退房（经协商）。",
    f4_t: "恢复空间",
    f4_d: "休息区，组织团队会议或理论分析的可能性。",
    f5_t: "3餐运动营养",
    f5_d: "考虑到训练制度的均衡菜单。可根据要求调整饮食。",
    f6_t: "特价",
    f6_d: "10人以上住宿的个别条件。优惠的“住宿+餐饮”套餐。",
    t1_t: "冰球俱乐部", t1_s: "考虑到比赛日程的阵容和教练组安置",
    t2_t: "足球队", t2_s: "比赛间歇期恢复的舒适条件",
    t3_t: "篮球与排球", t3_s: "提供加长床铺房间的可能性",
    t4_t: "个人运动", t4_s: "比赛前集中精神的安静房间"
  },
  az: {
    badge: "Çempionlarla tərəfdaşlıq",
    subtitle: "İdman komandaları üçün xüsusi şərtlər",
    cta: "Yerləşdirməni müzakirə et",
    teamsInfo: "10 nəfərdən ibarət komandalar üçün fərdi şərtlər",
    f1_t: "Çevik cədvəl",
    f1_d: "Məşq, oyun və erkən gediş cədvəlinə uyğun olaraq qidalanma və yerləşdirmə təşkil edirik.",
    f2_t: "Məxfilik və sükunət",
    f2_d: "Komanda və məşqçi heyətinin rahat qalması üçün ayrı mərtəbələr və ya otel qanadı.",
    f3_t: "Rahat logistika",
    f3_d: "Transferin təşkili, avtobuslar üçün parkinq, razılaşma əsasında erkən giriş və gec çıxış.",
    f4_t: "Bərpa üçün məkan",
    f4_d: "İstirahət zonaları, komanda iclasları və ya nəzəri təhlillərin təşkili imkanı.",
    f5_t: "3 dəfəlik idman qidası",
    f5_d: "Məşq rejiminə uyğun balanslaşdırılmış menyu. İstək əsasında rasionun düzəldilməsi imkanı.",
    f6_t: "Xüsusi tariflər",
    f6_d: "10 nəfərdən yuxarı qruplar üçün fərdi şərtlər. Sərfəli 'yerləşdirmə + qidalanma' paketləri.",
    t1_t: "Xokkey Klubları", t1_s: "Oyun cədvəlinə uyğun heyət və məşqçi heyətinin yerləşdirilməsi",
    t2_t: "Futbol Komandaları", t2_s: "Matçlar arası bərpa üçün rahat şərait",
    t3_t: "Basketbol və Voleybol", t3_s: "Uzadılmış çarpayılı otaqların təqdim olunması imkanı",
    t4_t: "Fərdi İdman növləri", t4_s: "Yarış öncəsi konsentrasiya üçün sakit otaqlar"
  }
};

const SportsTeamsSection = () => {
  const { language } = useLanguage();
  const lang = (language === 'ru' || language === 'kz' || language === 'en' || language === 'zh' || language === 'az') ? language : 'ru';
  const content = (SPORTS_CONTENT as any)[lang];

  return (
    <section className="relative bg-[#0f0f0f] overflow-hidden text-white py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 rounded-full border border-gold/30 bg-gold/10 text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4"
          >
            {content.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            {content.subtitle}
          </motion.h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Clock, title: content.f1_t, desc: content.f1_d },
            { icon: ShieldCheck, title: content.f2_t, desc: content.f2_d },
            { icon: Bus, title: content.f3_t, desc: content.f3_d },
            { icon: Dumbbell, title: content.f4_t, desc: content.f4_d },
            { icon: Utensils, title: content.f5_t, desc: content.f5_d },
            { icon: Percent, title: content.f6_t, desc: content.f6_d }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col items-start text-left h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-bold mb-3 text-lg md:text-xl text-white group-hover:text-gold transition-colors">{f.title}</h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: "🏒", title: content.t1_t },
            { icon: "⚽", title: content.t2_t },
            { icon: "🏀", title: content.t3_t },
            { icon: "🥋", title: content.t4_t }
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-[#252525] transition-colors text-center"
            >
              <span className="text-3xl mb-1">{t.icon}</span>
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">{t.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href={`https://wa.me/77754530090?text=${encodeURIComponent("Здравствуйте, пишу вам по поводу размещения для спортивной команды")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="bg-gold hover:bg-gold/90 text-black font-black h-14 px-12 text-base rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              {content.cta}
            </Button>
          </a>
          <p className="text-sm text-white/40 italic font-light">{content.teamsInfo}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsTeamsSection;