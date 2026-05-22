import {
    Tv, Wifi, Coffee, Wind, Microwave,
    Bed, Snowflake, Ban, Phone, ShowerHead, DoorOpen, HardDrive, Bath
} from "lucide-react";

// Helper for custom icons if needed
export const Refrigerator = (props: any) => <Snowflake {...props} />;
export const CigaretteOffIcon = (props: any) => <Ban {...props} />; // Using Ban for no smoking as generic replacement or custom SVG

export const AMENITY_ICONS: Record<string, any> = {
    tv: Tv,
    wifi: Wifi,
    breakfast: Coffee,
    breakfastTime: Coffee,
    noSmoking: CigaretteOffIcon,
    ac: Wind,
    fridge: Refrigerator,
    microwave: Microwave,
    bedS: Bed,
    bedD: Bed,
    bedT: Bed,
    phone: Phone,
    kettle: Coffee,
    hairDryer: Wind,
    bathroom: ShowerHead,
    twoRooms: DoorOpen,
    doubleBed: Bed
};

export const TRANSLATIONS = {
    ru: {
        backBtn: "К списку номеров",
        priceLabel: "ЦЕНА ЗА НОМЕР:",
        bookBtn: "Забронировать",
        notFound: "Номер не найден",
        noPhoto: "Нет фото",
        whatsappHi: "Здравствуйте! Хочу забронировать номер: ",
        guestsLabel: "Количество гостей:",
        amenities: {
            tv: "Кабельное TV",
            wifi: "Бесплатный WiFi",
            breakfast: "Вкусный завтрак",
            breakfastTime: "Вкусный завтрак",
            noSmoking: "Курение запрещено",
            ac: "Кондиционер",
            fridge: "Холодильник",
            microwave: "Микроволновка",
            bedS: "Кровать полуторная",
            bedD: "Две полуторные кровати",
            bedT: "Три полуторные кровати",
            phone: "Телефон",
            kettle: "Чайник",
            hairDryer: "Фен",
            bathroom: "Санузел",
            twoRooms: "2 комнаты",
            doubleBed: "2-х спальная кровать"
        },
        categories: {
            family: { title: "Семейный", desc: "Идеальный выбор для семейного отдыха. Простор и уют." },
            lux: { title: "Люкс", desc: "Высший уровень комфорта. Гостиная, спальня и все удобства." },
            semilux: { title: "Полулюкс", desc: "Оптимальное соотношение цены и качества." },
            economPlus: { title: "Эконом +", desc: "Уютные номера со свежим ремонтом." },
            standard: { title: "Стандарт", desc: "Классические номера, идеально подходящие для командировок." },
            econom: { title: "Эконом", desc: "Базовое размещение по самым доступным ценам." }
        }
    },
    kz: {
        backBtn: "Нөмірлер тізіміне",
        priceLabel: "НӨМІР БАҒАСЫ:",
        bookBtn: "Брондау",
        notFound: "Нөмір табылмады",
        noPhoto: "Фото жоқ",
        whatsappHi: "Сәлеметсіз бе! Мен нөмірді брондағым келеді: ",
        guestsLabel: "Қонақтар саны:",
        amenities: {
            tv: "Кабельдік TV",
            wifi: "Тегін WiFi",
            breakfast: "Дәмді таңғы ас",
            breakfastTime: "Дәмді таңғы ас ",
            noSmoking: "Темекі шегуге тыйым салынады",
            ac: "Кондиционер",
            fridge: "Тоңазытқыш",
            microwave: "Микротолқынды пеш",
            bedS: "Бір жарым кісілік төсек",
            bedD: "Екі бір жарым кісілік төсек",
            bedT: "Үш бір жарым кісілік төсек",
            phone: "Телефон",
            kettle: "Шайнек",
            hairDryer: "Фен",
            bathroom: "Санузел",
            twoRooms: "2 бөлме",
            doubleBed: "2 кісілік төсек"
        },
        categories: {
            family: { title: "Отбасылық", desc: "Отбасылық демалыс үшін тамаша таңдау." },
            lux: { title: "Люкс", desc: "Жоғары деңгейдегі жайлылық." },
            semilux: { title: "Жартылай люкс", desc: "Баға мен сапаның оңтайлы арақатынасы." },
            economPlus: { title: "Эконом +", desc: "Жаңа жөндеуден өткен жайлы бөлмелер." },
            standard: { title: "Стандарт", desc: "Іссапарларға өте ыңғайлы классикалық бөлмелер." },
            econom: { title: "Эконом", desc: "Ең қолжетімді бағамен негізгі орналастыру." }
        }
    },
    en: {
        backBtn: "Back to rooms",
        priceLabel: "PRICE PER ROOM:",
        bookBtn: "Book Now",
        notFound: "Room not found",
        noPhoto: "No photo",
        whatsappHi: "Hello! I would like to book a room: ",
        guestsLabel: "Number of guests:",
        amenities: {
            tv: "Cable TV",
            wifi: "Free WiFi",
            breakfast: "Delicious breakfast",
            breakfastTime: "Delicious breakfast",
            noSmoking: "No smoking",
            ac: "Air conditioning",
            fridge: "Refrigerator",
            microwave: "Microwave",
            bedS: "Single bed",
            bedD: "Two single beds",
            bedT: "Three single beds",
            phone: "Phone",
            kettle: "Kettle",
            hairDryer: "Hair dryer",
            bathroom: "Bathroom",
            twoRooms: "2 rooms",
            doubleBed: "Double bed"
        },
        categories: {
            family: { title: "Family", desc: "Ideal choice for family holidays. Space and comfort." },
            lux: { title: "Lux", desc: "The highest level of comfort. Living room, bedroom and all amenities." },
            semilux: { title: "Semi-Lux", desc: "Optimum value for money." },
            economPlus: { title: "Econom +", desc: "Cozy rooms with fresh renovation." },
            standard: { title: "Standard", desc: "Classic rooms, ideal for business trips." },
            econom: { title: "Econom", desc: "Basic accommodation at the most affordable prices." }
        }
    },
    zh: {
        backBtn: "返回房间列表",
        priceLabel: "每间房价格：",
        bookBtn: "现在预订",
        notFound: "未找到房间",
        noPhoto: "无照片",
        whatsappHi: "您好！我想预订客房：",
        guestsLabel: "客人人数：",
        amenities: {
            tv: "有线电视",
            wifi: "免费 WiFi",
            breakfast: "美味早餐",
            breakfastTime: "美味早餐",
            noSmoking: "严禁吸烟",
            ac: "空调",
            fridge: "冰箱",
            microwave: "微波炉",
            bedS: "单人床",
            bedD: "两张单人床",
            bedT: "三张单人床",
            phone: "电话",
            kettle: "水壶",
            hairDryer: "吹风机",
            bathroom: "浴室",
            twoRooms: "2 间房",
            doubleBed: "双人床"
        },
        categories: {
            family: { title: "家庭房", desc: "家庭度假的理想选择。宽敞舒适。" },
            lux: { title: "豪华房", desc: "最高水平的舒适。设有客厅、卧室及所有设施。" },
            semilux: { title: "半豪华房", desc: "性价比的最佳选择。" },
            economPlus: { title: "经济+房", desc: "新装修的舒适客房。" },
            standard: { title: "标准房", desc: "经典客房，非常适合商务出差。" },
            econom: { title: "经济房", desc: "价格最实惠的基础住宿。" }
        }
    },
    az: {
        backBtn: "Otaq siyahısına qayıt",
        priceLabel: "OTAQ QİYMƏTİ:",
        bookBtn: "Rezerv et",
        notFound: "Otaq tapılmadı",
        noPhoto: "Foto yoxdur",
        whatsappHi: "Salam! Bu otağı rezerv etmək istəyirəm: ",
        guestsLabel: "Qonaq sayı:",
        amenities: {
            tv: "Kabel TV",
            wifi: "Pulsuz WiFi",
            breakfast: "Dadlı səhər yeməyi",
            breakfastTime: "Dadlı səhər yeməyi",
            noSmoking: "Siqaret çəkmək qadağandır",
            ac: "Kondisioner",
            fridge: "Soyuducu",
            microwave: "Mikrodalğalı soba",
            bedS: "Birnəfərlik çarpayı",
            bedD: "İki əдəd birnəfərlik çarpayı",
            bedT: "Үç əдəd birnəfərlik çarpayı",
            phone: "Telefon",
            kettle: "Çaydan",
            hairDryer: "Fen",
            bathroom: "Hamam otağı",
            twoRooms: "2 otaq",
            doubleBed: "İkinəfərlik çarpayı"
        },
        categories: {
            family: { title: "Ailəvi", desc: "Ailəvi istirahət üçün ideal seçimdir. Genişlik və rahatlıq." },
            lux: { title: "Lüks", desc: "Yüksək səviyyəli rahatlıq. Qonaq otağı, yataq otağı və bütün şərait." },
            semilux: { title: "Yarımlüks", desc: "Optimal qiymət və keyfiyyət nisbəti." },
            economPlus: { title: "Ekonom +", desc: "Təzə təmirli rahat otaqlar." },
            standard: { title: "Standart", desc: "İş ezamiyyətləri üçün ideal olan klassik otaqlar." },
            econom: { title: "Ekonom", desc: "Ən münasib qiymətə əsas yerləşdirmə." }
        }
    }
};

export interface RoomData {
    id: string;
    name: { [key: string]: string };
    price: string;
    images: string[];
    amenityKeys: string[];
    descriptionCategory: 'family' | 'lux' | 'semilux' | 'economPlus' | 'standard' | 'econom';
}

export const ROOMS_DATA: Record<string, RoomData> = {
    "lux-317": {
        id: "lux-317",
        name: { ru: "ЛЮКС 317", kz: "ЛЮКС 317", en: "LUX 317", zh: "豪华房 317", az: "LÜKS 317" },
        price: "45 000",
        images: [
            "/kyzylzharNomera/lux-317/Screenshot 2026-02-13 at 17.27.07.jpg",
            "/kyzylzharNomera/lux-317/Screenshot 2026-02-13 at 17.27.19.jpg",
            "/kyzylzharNomera/lux-317/Screenshot 2026-02-13 at 17.27.27.jpg",
            "/kyzylzharNomera/lux-317/Screenshot 2026-02-13 at 17.27.35.jpg",
            "/kyzylzharNomera/lux-317/Screenshot 2026-02-13 at 17.27.44.jpg",
            "/kyzylzharNomera/lux-317/Screenshot 2026-02-13 at 17.27.53.jpg",
            "/kyzylzharNomera/lux-317/Screenshot 2026-02-13 at 17.28.00.jpg"
        ],
        amenityKeys: ["twoRooms", "bathroom", "doubleBed", "tv", "phone", "fridge", "kettle", "hairDryer"],
        descriptionCategory: "lux"
    },
    "lux-2room": {
        id: "lux-2room",
        name: { ru: "ЛЮКС 2-Х КОМНАТНЫЙ", kz: "2 БӨЛМЕЛІ ЛЮКС", en: "LUX 2-ROOM", zh: "豪华两居室", az: "2 OTAQLI LÜKS" },
        price: "50 000",
        images: ["/kyzylzharNomera/lux-2-room/IMG_0383.jpg", "/kyzylzharNomera/lux-2-room/IMG_0393.jpg", "/kyzylzharNomera/lux-2-room/IMG_0387.jpg", "/kyzylzharNomera/lux-2-room/IMG_0370.jpg", "/kyzylzharNomera/lux-2-room/IMG_0380.jpg", "/kyzylzharNomera/lux-2-room/IMG_0375.jpg", "/kyzylzharNomera/lux-2-room/IMG_0372.jpg", "/kyzylzharNomera/lux-2-room/IMG_0351.jpg", "/kyzylzharNomera/lux-2-room/IMG_0366.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking", "ac", "microwave"],
        descriptionCategory: "lux"
    },
    "lux-3room": {
        id: "lux-3room",
        name: { ru: "ЛЮКС 3-Х КОМНАТНЫЙ", kz: "3 БӨЛМЕЛІ ЛЮКС", en: "LUX 3-ROOM", zh: "豪华三居室", az: "3 OTAQLI LÜKS" },
        price: "55 000",
        images: ["/kyzylzharNomera/lux-3-room-number409/IMG_0444.jpg",
            "/kyzylzharNomera/lux-3-room-number409/IMG_0451.jpg",
            "/kyzylzharNomera/lux-3-room-number409/IMG_0431.jpg",
            "/kyzylzharNomera/lux-3-room-number409/IMG_0437.jpg",
            "/kyzylzharNomera/lux-3-room-number409/IMG_0441.jpg",
            "/kyzylzharNomera/lux-3-room-number409/IMG_0454.jpg",
            "/kyzylzharNomera/lux-3-room-number409/IMG_0456.jpg",
            "/kyzylzharNomera/lux-3-room-number409/IMG_0422.jpg",
            "/kyzylzharNomera/lux-3-room-number409/IMG_0419.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking", "ac", "microwave"],
        descriptionCategory: "lux"
    },
    "semilux-1room-1place": {
        id: "semilux-1room-1place",
        name: { ru: "ПОЛУЛЮКС 1-МЕСТНЫЙ 1-O КОМНАТНЫЙ", kz: "1 ОРЫНДЫҚ 1 БӨЛМЕЛІ ЖАРТЫЛАЙ ЛЮКС", en: "SEMI-LUX SINGLE 1-ROOM", zh: "单人两居室半豪华房", az: "1 NƏFƏRLİK 1 OTAQLI YARIMLÜKS" },
        price: "23 000",
        images: ["/kyzylzharNomera/1-place-semilux-1room/IMG_0726.jpg", "/kyzylzharNomera/1-place-semilux-1room/IMG_0731.jpg", "/kyzylzharNomera/1-place-semilux-1room/IMG_0721.jpg", "/kyzylzharNomera/1-place-semilux-1room/IMG_0722.jpg", "/kyzylzharNomera/1-place-semilux-1room/IMG_0714.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking", "ac"],
        descriptionCategory: "semilux"
    },
    "single-semilux": {
        id: "single-semilux",
        name: { ru: "ПОЛУЛЮКС 1-МЕСТНЫЙ", kz: "1 ОРЫНДЫҚ ЖАРТЫЛАЙ ЛЮКС", en: "SEMI-LUX SINGLE", zh: "单人半豪华房", az: "1 NƏFƏRLİK YARIMLÜKS" },
        price: "36 000",
        images: ["/kyzylzharNomera/semilux-1place/IMG_0491.jpg", "/kyzylzharNomera/semilux-1place/IMG_0487.jpg", "/kyzylzharNomera/semilux-1place/IMG_0483.jpg", "/kyzylzharNomera/semilux-1place/IMG_0480.jpg", "/kyzylzharNomera/semilux-1place/IMG_0471.jpg", "/kyzylzharNomera/semilux-1place/IMG_0466.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking", "ac"],
        descriptionCategory: "semilux"
    },
    "double-semilux": {
        id: "double-semilux",
        name: { ru: "ПОЛУЛЮКС 2-Х МЕСТНЫЙ", kz: "2 ОРЫНДЫҚ ЖАРТЫЛАЙ ЛЮКС", en: "SEMI-LUX DOUBLE", zh: "双人半豪华房", az: "2 NƏFƏRLİK YARIMLÜKS" },
        price: "40 000",
        images: ["/kyzylzharNomera/semilux-2place/IMG_0529.jpg",
            "/kyzylzharNomera/semilux-2place/IMG_0535.jpg",
            "/kyzylzharNomera/semilux-2place/IMG_0519.jpg",
            "/kyzylzharNomera/semilux-2place/IMG_0521.jpg",
            "/kyzylzharNomera/semilux-2place/IMG_20260114_183715_038 2.jpg",
            "/kyzylzharNomera/semilux-2place/IMG_0516.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking", "ac"],
        descriptionCategory: "semilux"
    },
    "family-2": {
        id: "family-2",
        name: { ru: "СЕМЕЙНЫЙ 2-Х КОМНАТНЫЙ", kz: "2 БӨЛМЕЛІ ОТБАСЫЛЫҚ", en: "FAMILY 2-ROOM", zh: "家庭两居室", az: "2 OTAQLI AİLƏVİ" },
        price: "35 000",
        images: ["/kyzylzharNomera/family-2room/IMG_0323.jpg",
            "/kyzylzharNomera/family-2room/IMG_0320.jpg", "/kyzylzharNomera/family-2room/IMG_0313.jpg", "/kyzylzharNomera/family-2room/IMG_0304.jpg", "/kyzylzharNomera/family-2room/IMG_0293.jpg", "/kyzylzharNomera/family-2room/IMG_0280.jpg", "/kyzylzharNomera/family-2room/IMG_0275.jpg", "/kyzylzharNomera/family-2room/IMG_0286.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking", "ac", "microwave"],
        descriptionCategory: "family"
    },
    "family-3": {
        id: "family-3",
        name: { ru: "СЕМЕЙНЫЙ 3-Х КОМНАТНЫЙ", kz: "3 БӨЛМЕЛІ ОТБАСЫЛЫҚ", en: "FAMILY 3-ROOM", zh: "家庭三居室", az: "3 OTAQLI AİLƏVİ" },
        price: "45 000",
        images: ["/kyzylzharNomera/family-3room/IMG_0669.jpg",
            "/kyzylzharNomera/family-3room/IMG_0689.jpg",
            "/kyzylzharNomera/family-3room/IMG_0683.jpg",
            "/kyzylzharNomera/family-3room/IMG_0660.jpg",
            "/kyzylzharNomera/family-3room/IMG_0657.jpg",
            "/kyzylzharNomera/family-3room/IMG_0696.jpg",
            "/kyzylzharNomera/family-3room/IMG_0687.jpg",
            "/kyzylzharNomera/family-2room/IMG_0286.jpg",
            "/kyzylzharNomera/family-2room/IMG_0280.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking", "ac", "microwave"],
        descriptionCategory: "family"
    },
    "econom-plus": {
        id: "econom-plus",
        name: { ru: "ЭКОНОМ+ ОДНОКОМНАТНЫЙ", kz: "ЭКОНОМ+ БІР БӨЛМЕЛІ", en: "ECONOM+ STUDIO", zh: "经济+单间", az: "EKONOM+ BİR OTAQLI" },
        price: "19 000",
        images: ["/kyzylzharNomera/econom+-1room/IMG_0170.jpg", "/kyzylzharNomera/econom+-1room/IMG_0172.jpg", "/kyzylzharNomera/econom+-1room/IMG_0175.jpg", "/kyzylzharNomera/econom+-1room/IMG_0097.jpg", "/kyzylzharNomera/econom+-1room/IMG_0092.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking"],
        descriptionCategory: "economPlus"
    },
    "econom-plus-1": {
        id: "econom-plus-1",
        name: { ru: "ЭКОНОМ+ ОДНОМЕСТНЫЙ", kz: "ЭКОНОМ+ БІР ОРЫНДЫҚ", en: "ECONOM+ SINGLE", zh: "经济+单人房", az: "EKONOM+ BİR NƏFƏRLİK" },
        price: "28 000",
        images: ["/kyzylzharNomera/econom+-1place/IMG_0259.jpg", "/kyzylzharNomera/econom+-1place/IMG_0268.jpg", "/kyzylzharNomera/econom+-1place/IMG_0275.jpg", "/kyzylzharNomera/econom+-1place/IMG_0247.jpg", "/kyzylzharNomera/econom+-1place/IMG_0240.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking"],
        descriptionCategory: "economPlus"
    },
    "double-econom-plus": {
        id: "double-econom-plus",
        name: { ru: "ЭКОНОМ+ 2-Х МЕСТНЫЙ", kz: "ЭКОНОМ+ 2 ОРЫНДЫҚ", en: "ECONOM+ DOUBLE", zh: "经济+双人房", az: "EKONOM+ 2 NƏFƏRLİK" },
        price: "30 000",
        images: ["/kyzylzharNomera/econom+-2place/IMG_0212.jpg", "/kyzylzharNomera/econom+-2place/IMG_0213.jpg", "/kyzylzharNomera/econom+-2place/IMG_0219.jpg", "/kyzylzharNomera/econom+-2place/IMG_0203.jpg", "/kyzylzharNomera/econom+-2place/IMG_0187.jpg", "/kyzylzharNomera/econom+-2place/IMG_0209.jpg", "/kyzylzharNomera/econom+-2place/IMG_0183.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking"],
        descriptionCategory: "economPlus"
    },
    "econom-plus-3": {
        id: "econom-plus-3",
        name: { ru: "ЭКОНОМ+ 3-Х МЕСТНЫЙ", kz: "ЭКОНОМ+ 3 ОРЫНДЫҚ", en: "ECONOM+ TRIPLE", zh: "经济+三人房", az: "EKONOM+ 3 NƏFƏRLİK" },
        price: "45 000",
        images: ["/kyzylzharNomera/econom+-3place/IMG_0044.jpg",
            "/kyzylzharNomera/econom+-3place/IMG_0047.jpg",
            "/kyzylzharNomera/econom+-3place/IMG_0026.jpg",
            "/kyzylzharNomera/econom+-3place/IMG_0035.jpg",
            "/kyzylzharNomera/econom+-3place/IMG_0009.jpg",
            "/kyzylzharNomera/econom+-3place/IMG_0092.jpg",
            "/kyzylzharNomera/econom+-3place/IMG_0097.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfast", "noSmoking"],
        descriptionCategory: "economPlus"
    },
    "single-standard": {
        id: "single-standard",
        name: { ru: "СТАНДАРТ 1-МЕСТНЫЙ", kz: "СТАНДАРТ 1 ОРЫНДЫҚ", en: "STANDARD SINGLE", zh: "标准单人房", az: "STANDART BİR NƏFƏRLİK" },
        price: "20 000",
        images: ["/kyzylzharNomera/standard-1place/IMG_0564.jpg", "/kyzylzharNomera/standard-1place/IMG_0566.jpg", "/kyzylzharNomera/standard-1place/IMG_0570.jpg", "/kyzylzharNomera/standard-1place/IMG_0556.jpg", "/kyzylzharNomera/standard-1place/IMG_0561.jpg", "/kyzylzharNomera/standard-1place/IMG_0554.jpg"],
        amenityKeys: ["bedS", "tv", "fridge", "wifi", "breakfastTime", "noSmoking"],
        descriptionCategory: "standard"
    },
    "double-standard": {
        id: "double-standard",
        name: { ru: "СТАНДАРТ 2-Х МЕСТНЫЙ", kz: "СТАНДАРТ 2 ОРЫНДЫҚ", en: "STANDARD DOUBLE", zh: "标准双人房", az: "STANDART İKИ NƏFƏRLİK" },
        price: "34 000",
        images: ["/kyzylzharNomera/standard-2place/IMG_0581.jpg", "/kyzylzharNomera/standard-2place/IMG_0585.jpg", "/kyzylzharNomera/standard-2place/IMG_0582.jpg", "/kyzylzharNomera/standard-2place/IMG_0576.jpg", "/kyzylzharNomera/standard-2place/IMG_0578.jpg", "/kyzylzharNomera/standard-2place/IMG_0574.jpg"],
        amenityKeys: ["bedD", "tv", "fridge", "wifi", "breakfastTime", "noSmoking"],
        descriptionCategory: "standard"
    },
    "econom-1": {
        id: "econom-1",
        name: { ru: "ЭКОНОМ 1-МЕСТНЫЙ", kz: "ЭКОНОМ 1 ОРЫНДЫҚ", en: "ECONOM SINGLE", zh: "经济单人房", az: "EKONOM BİR NƏFƏRLİK" },
        price: "15 000",
        images: ["/kyzylzharNomera/econom-1place/IMG_0611.jpg", "/kyzylzharNomera/econom-1place/IMG_0616.jpg", "/kyzylzharNomera/econom-1place/IMG_0609.jpg", "/kyzylzharNomera/econom-1place/IMG_0604.jpg"],
        amenityKeys: ["tv", "wifi", "breakfastTime", "noSmoking"],
        descriptionCategory: "econom"
    },
    "econom-1-large": {
        id: "econom-1-large",
        name: { ru: "ЭКОНОМ 1-МЕСТНЫЙ (БОЛЬШАЯ КРОВАТЬ)", kz: "ЭКОНОМ 1 ОРЫНДЫҚ (ҮЛКЕН ТӨСЕК)", en: "ECONOM SINGLE (BIG BED)", zh: "经济单人房（大床）", az: "EKONOM BİR NƏFƏRLİK (BÖYÜK ÇARPAYI)" },
        price: "26 000",
        images: ["/kyzylzharNomera/econom-1palce-placebigbed/IMG_0781.jpg", "/kyzylzharNomera/econom-1palce-placebigbed/IMG_0783.jpg", "/kyzylzharNomera/econom-1palce-placebigbed/IMG_0787.jpg", "/kyzylzharNomera/econom-1palce-placebigbed/IMG_0778.jpg", "/kyzylzharNomera/econom-1palce-placebigbed/IMG_0773.jpg"],
        amenityKeys: ["tv", "fridge", "wifi", "breakfastTime", "noSmoking"],
        descriptionCategory: "econom"
    },
    "econom-2": {
        id: "econom-2",
        name: { ru: "ЭКОНОМ 2-Х МЕСТНЫЙ", kz: "ЭКОНОМ 2 ОРЫНДЫҚ", en: "ECONOM DOUBLE", zh: "经济双人房", az: "EKONOM İKИ NƏFƏRLİK" },
        price: "26 000",
        images: ["/kyzylzharNomera/econom-2place/IMG_0595.jpg", "/kyzylzharNomera/econom-2place/IMG_0602.jpg", "/kyzylzharNomera/econom-2place/IMG_0600.jpg", "/kyzylzharNomera/econom-2place/IMG_0587.jpg"],
        amenityKeys: ["tv", "wifi", "breakfastTime", "noSmoking"],
        descriptionCategory: "econom"
    },
    "econom-3": {
        id: "econom-3",
        name: { ru: "ЭКОНОМ 3-Х МЕСТНЫЙ", kz: "ЭКОНОМ 3 ОРЫНДЫҚ", en: "ECONOM TRIPLE", zh: "经济三人房", az: "EKONOM ÜÇ NƏFƏRLİK" },
        price: "39 000",
        images: ["/kyzylzharNomera/econom-3place/econome-1.png",
             "/kyzylzharNomera/econom-3place/econome-6.png",
              "/kyzylzharNomera/econom-3place/econome-3.png",
               "/kyzylzharNomera/econom-3place/econome-4.png",
                "/kyzylzharNomera/econom-3place/econome-5.png",
                 "/kyzylzharNomera/econom-3place/econome-2.jpg"],
        amenityKeys: ["bedT", "tv", "fridge", "wifi", "breakfastTime", "noSmoking"],
        descriptionCategory: "econom"
    },
    "econom-4": {
        id: "econom-4",
        name: { ru: "ЭКОНОМ 4-Х МЕСТНЫЙ", kz: "ЭКОНОМ 4 ОРЫНДЫҚ", en: "ECONOM QUAD", zh: "经济四人房", az: "EKONOM DÖRD NƏFƏRLİK" },
        price: "52 000",
        images: ["/kyzylzharNomera/econom-4place/IMG_0827.jpg",
            "/kyzylzharNomera/econom-4place/IMG_0824.jpg",
            "/kyzylzharNomera/econom-4place/IMG_0810.jpg",
            "/kyzylzharNomera/econom-4place/IMG_0805.jpg",
            "/kyzylzharNomera/econom-4place/IMG_0802.jpg",
            "/kyzylzharNomera/econom-4place/IMG_0796.jpg",
            "/kyzylzharNomera/econom-4place/IMG_0793.jpg"],
        amenityKeys: ["bedS", "tv", "fridge", "wifi", "breakfastTime", "noSmoking"],
        descriptionCategory: "econom"
    }
};
