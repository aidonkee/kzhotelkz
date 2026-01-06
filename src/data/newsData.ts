export interface NewsItem {
    id: number;
    titleKey: string;      // Ключ для перевода заголовка
    descKey: string;       // Ключ для перевода описания
    title: string;         // Дефолтный текст (если перевода нет)
    description: string;   // Дефолтный текст
    date: string;
    category: "hotel" | "restaurant" | "events" | "conference" | "video";
    image: string;         // Картинка для превью в списке
    content: string;       // Полный HTML контент для детальной страницы
  }
  
  export const newsData: NewsItem[] = [
    {
      id: 1,
      titleKey: "news.2gis.title",
      descKey: "news.2gis.desc",
      title: "Гостиничный комплекс Кызыл Жар получил премию 2GIS Awards",
      description: "Мы рады сообщить, что благодаря вашим отзывам мы стали одними из лучших.",
      date: "2024-04-18",
      category: "video",
      image: "/image copy 30.png",
      content: `
        <p class="text-lg mb-6">Гостиничный комплекс <strong>"Кызыл Жар"</strong> был удостоен престижной премии <strong>2GIS Awards</strong>. Эта награда вручается компаниям, набравшим самый высокий рейтинг по отзывам пользователей.</p>
        
        <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
          <iframe 
            width="100%" 
            height="100%" 
            src="/2gis.mp4" 
            title="2GIS Awards" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <p>Спасибо, что выбираете нас! Ваш комфорт — наш приоритет.</p>
      `
    },
    {
      id: 2,
      titleKey: "news.promo.title",
      descKey: "news.promo.desc",
      title: "ГК Кызыл-Жар: Добро пожаловать!",
      description: "Добро пожаловать в атмосферу тепла, уюта и гостеприимства гостиничного комплекса.",
      date: "2022-05-31",
      category: "video",
      image: "/logo.png",
      content: `
        <p class="text-lg mb-6">Добро пожаловать в атмосферу тепла, уюта и гостеприимства гостиничного комплекса «Кызыл-Жар»!</p>
        <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/q66IgH4ynzw?si=AHbGQiI2OB0NW1BD"
            title="Promo Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <p>Мы находимся в самом сердце города и предлагаем лучший сервис для наших гостей.</p>
      `
    },
    {
      id: 3,
      titleKey: "news.buffet.title",
      descKey: "news.buffet.desc",
      title: "Открылось кафе «Буфет»",
      description: "Приглашаем вас посетить наше новое кафе с обновленным меню и уютным интерьером.",
      date: "2020-12-23",
      category: "restaurant",
      image: "/image copy 35.png",
      content: `
        <p class="mb-8 text-lg">Рады сообщить об открытии нашего обновленного кафе-буфета! Теперь завтраки и обеды стали еще вкуснее, а атмосфера — уютнее.</p>
        
        <h3 class="text-2xl font-serif font-bold mb-6 text-center">Обновленный интерьер и оборудование</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          <div class="h-80 rounded-xl overflow-hidden shadow-lg group">
            <img src="/image copy 32.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Столик у окна">
          </div>
  
          <div class="h-80 rounded-xl overflow-hidden shadow-lg group">
            <img src="/image copy 33.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Меню и касса">
          </div>
  
          <div class="h-80 rounded-xl overflow-hidden shadow-lg group">
            <img src="/image copy 34.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Кофемашина">
          </div>
  
          <div class="md:col-span-3 h-96 rounded-xl overflow-hidden shadow-lg group">
            <img src="/image copy 35.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Общий вид буфета">
          </div>
          
        </div>
        
        <p class="text-center font-medium text-lg">Ждем вас ежедневно с 8:00 до 20:00!</p>
      `
    },
    {
      id: 4,
      titleKey: "news.welcome.title",
      descKey: "news.welcome.desc",
      title: "Добро пожаловать в Кызыл Жар",
      description: "Уникальное сочетание современного комфорта и традиционного гостеприимства.",
      date: "2020-08-24",
      category: "hotel",
      image: "/image copy 29.png",
      content: `
        <p class="text-lg mb-4 ">Наш отель — это идеальное место как для деловых поездок, так и для семейного отдыха.</p>
         <div class="rounded-2xl overflow-hidden shadow-xl mb-8 border border-gray-200">
          <video controls class="w-full h-full object-cover aspect-video" preload="metadata" playsinline
          poster="/image copy 29.png">
            <source src="/1.mp4" type="video/mp4">
            Ваш браузер не поддерживает встроенные видео.
          </video>
        </div>
      `
    },
    {
      id: 5,
      titleKey: "news.cozy.title",
      descKey: "news.cozy.desc",
      title: "Атмосфера тепла и уюта",
      description: "Мы создаем условия, в которых каждый гость чувствует себя как дома.",
      date: "2020-08-24",
      category: "hotel",
      image: "/image copy 28.png",
      content: `
        <p class="mb-6">Персонал гостиничного комплекса «Кызыл Жар» делает всё возможное, чтобы ваше пребывание было незабываемым.</p>
        
        <div class="rounded-2xl overflow-hidden shadow-xl mb-8 border border-gray-200">
          <video controls class="w-full h-full object-cover aspect-video" preload="metadata" playsinline
          poster="/image copy 28.png">
            <source src="/2.mp4" type="video/mp4">
            Ваш браузер не поддерживает встроенные видео.
          </video>
        </div>
      
      `
    },
    {
      id: 6,
      titleKey: "news.photo.title",
      descKey: "news.photo.desc",
      title: "Новая фотосессия гостиницы",
      description: "Взгляните на наш отель по-новому. Обновленная галерея интерьеров холла и номеров.",
      date: "2020-08-24",
      category: "events",
      image: "/image copy 19.png",
      content: `
        <p class="mb-8 text-lg font-medium">Спешим поделиться прекрасной новостью: мы провели новую фотосессию нашего гостиничного комплекса!</p>
        
      
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div class="overflow-hidden rounded-xl shadow-md h-48 group">
            <img src="/image copy 14.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Коридор 1">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md h-48 group">
            <img src="/image copy 15.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Коридор 2">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md h-48 group">
            <img src="/image copy 16.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Коридор 3">
          </div>
        </div>
        
        <h3 class="text-xl font-serif font-bold mb-4 border-l-4 border-gold pl-3">Холл, первый этаж:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div class="overflow-hidden rounded-xl shadow-md h-64 group">
            <img src="/image copy 17.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Ресепшн">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md h-64 group">
            <img src="/image copy 18.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Холл">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md h-64 group">
            <img src="/image copy 19.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Лобби детали">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md h-64 group">
            <img src="/image copy 20.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Интерьер">
          </div>
        </div>
  
        <h3 class="text-xl font-serif font-bold mb-4 border-l-4 border-gold pl-3">Холл, третий этаж:</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="overflow-hidden rounded-xl shadow-md aspect-[3/4] group">
            <img src="/image copy 21.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Картина 1">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md aspect-[3/4] group">
            <img src="/image copy 22.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Картина 2">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md aspect-[3/4] group">
            <img src="/image copy 23.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Растение">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md aspect-[3/4] group">
            <img src="/image copy 24.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Картина 3">
          </div>
      
          <div class="overflow-hidden rounded-xl shadow-md aspect-[3/4] group">
            <img src="/image copy 25.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Картина 4">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md aspect-[3/4] group">
            <img src="/image copy 26.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Коридор 3 этаж">
          </div>
          <div class="overflow-hidden rounded-xl shadow-md aspect-[3/4] group">
            <img src="/image copy 27.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Коридор 3 этаж">
          </div>
        </div>
      `
    },
    {
      id: 7,
      titleKey: "news.lux317.title",
      descKey: "news.lux317.desc",
      title: "Люкс 317 для особых гостей",
      description: "Это двухкомнатный Люкс со всем необходимым для комфортного пребывания в гостинице.",
      date: "2020-08-24",
      category: "hotel",
      image: "/public/image copy 8.png",
      content: `
        <p class="text-lg mb-6">Представляем вашему вниманию номер <strong>Люкс 317</strong>. Это пространство создано для тех, кто ценит максимальный комфорт и роскошь.</p>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/image copy 8.png" class="rounded-lg shadow-sm h-48 w-full object-cover">
          <img src="/image copy 9.png" class="rounded-lg shadow-sm h-48 w-full object-cover">
          <img src="/image copy 10.png" class="rounded-lg shadow-sm h-48 w-full object-cover">
          <img src="/image copy 11.png" class="rounded-lg shadow-sm h-48 w-full object-cover">
          <img src="/image copy 12.png" class="rounded-lg shadow-sm h-48 w-full object-cover">
          <img src="/image copy 13.png" class="rounded-lg shadow-sm h-48 w-full object-cover">
        </div>
      `
    }
  ];