import { motion } from "framer-motion";
import { 
  Clock, ShieldCheck, Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SportsTeamsSection = () => {
  
  // Данные карточек видов спорта (Правая колонка)
  const teams = [
    {
      id: "hockey",
      icon: "🏒",
      title: "Хоккейные клубы",
      subtitle: "Размещение состава и тренерского штаба с учетом графика игр.",
    },
    {
      id: "football",
      icon: "⚽",
      title: "Футбольные команды",
      subtitle: "Комфортные условия для восстановления между матчами.",
    },
    {
      id: "basketball",
      icon: "🏀",
      title: "Баскетбол и волейбол",
      subtitle: "Возможность предоставления номеров с удлиненными кроватями.",
    },
    {
      id: "other",
      icon: "🏆",
      title: "Индивидуальные виды",
      subtitle: "Тихие номера для концентрации перед соревнованиями.",
    }
  ];

  // Преимущества (Левая колонка - Оставили только ТОП-2 и сделали их крупнее)
  const features = [
    {
      icon: Clock,
      title: "Гибкий тайминг",
      desc: "Мы понимаем, что график спортсменов отличается от обычного. Организуем ранние завтраки или поздние ужины под ваше расписание."
    },
    {
      icon: ShieldCheck,
      title: "Приватность и покой",
      desc: "Предоставим тихие этажи или изолированные крылья отеля, чтобы команда могла полноценно отдохнуть и провести тактические собрания без посторонних."
    }
  ];

  return (
    <section className="relative py-24 bg-[#121212] overflow-hidden text-white">
      
      {/* --- Фоновые декоративные элементы --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        {/* Заголовок */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-4"
          >
            Партнерство с чемпионами
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold mb-6"
          >
            Условия для <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-200">профессионалов</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto font-light leading-relaxed"
          >
            Гостиница «Кызыл Жар» предлагает не просто размещение, а среду для восстановления и подготовки к победам, учитывающую специфику выездных соревнований.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* ЛЕВАЯ КОЛОНКА: Преимущества (Теперь два больших блока) */}
          <div className="flex flex-col gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                // Сделали карточки крупнее и солиднее
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-gold/5">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white/90 group-hover:text-gold transition-colors">{feature.title}</h3>
                  <p className="text-base text-white/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ПРАВАЯ КОЛОНКА: Список команд (Карточки без стрелок) */}
          <div className="space-y-4">
            {teams.map((team, idx) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                // Убрал cursor-pointer, так как это теперь просто инфо-блок
                className="group relative overflow-hidden bg-[#1A1A1A] border border-white/5 rounded-2xl p-5 md:p-6 flex items-center hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5"
              >
                {/* Эффект свечения при наведении оставил для красоты */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-5 relative z-10">
                  <div className="text-4xl filter drop-shadow-lg grayscale group-hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                    {team.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-gold transition-colors mb-1">
                      {team.title}
                    </h3>
                    <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors leading-snug">
                      {team.subtitle}
                    </p>
                  </div>
                </div>

                {/* СТРЕЛКА БЫЛА ТУТ - УДАЛЕНА */}
              </motion.div>
            ))}

            {/* Блок CTA (Кнопка) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 mt-4 border-t border-white/5 text-center lg:text-left"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                 <Link to="/contacts" className="w-full sm:w-auto">
                    <Button className="btn-luxury h-14 px-8 text-base w-full shadow-[0_0_25px_-10px_rgba(212,175,55,0.5)] relative overflow-hidden group">
                      <span className="relative z-10">Обсудить условия размещения</span>
                      {/* Блик на кнопке */}
                      <div className="absolute inset-0 h-full w-full scale-0 rounded-full group-hover:scale-150 transition-all duration-700 bg-white/10 pointer-events-none"></div>
                    </Button>
                 </Link>
                 <p className="text-sm text-white/40 max-w-xs text-center sm:text-left">
                   Свяжитесь с нами для получения индивидуального предложения для вашей группы.
                 </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsTeamsSection;