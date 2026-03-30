import React, { createContext, useContext, useState, useEffect } from "react";
import { ROOMS_DATA as initialRoomsData, RoomData } from "@/data/rooms";
import { newsData as initialNewsData, NewsItem } from "@/data/newsData";

// Define Calculator Data Types locally since they are not exported from the page
interface CalculatorRoom {
    id: string;
    name: { ru: string; kz: string; en: string; zh: string; az: string };
    priceNight: number;
    pricePlace: number;
}

interface CalculatorCategory {
    id: string;
    title: { ru: string; kz: string; en: string; zh: string; az: string };
    image: string;
    rooms: CalculatorRoom[];
}

// Initial Data from BookingCalculatorPage (Hardcoded for now to avoid circular deps or complex extraction)
// Ideally this should be in a separate data file.
const initialCalculatorData: CalculatorCategory[] = [
    {
        id: "family",
        title: { ru: "СЕМЕЙНЫЙ", kz: "ОТБАСЫЛЫҚ", en: "FAMILY", zh: "家庭", az: "AİLƏVİ" },
        image: "/family-3-room/1-IMAGE 2025-12-25 20:21:35.jpg",
        rooms: [
            {
                id: "fam-2",
                name: { ru: "Семейный 2-х комнатный", kz: "Отбасылық 2 бөлмелі", en: "Family 2-Room", zh: "家庭两室", az: "Ailəvi 2 otaqlı" },
                priceNight: 25000, pricePlace: 25000
            },
            {
                id: "fam-3",
                name: { ru: "Семейный 3-х комнатный", kz: "Отбасылық 3 бөлмелі", en: "Family 3-Room", zh: "家庭三室", az: "Ailəvi 3 otaqlı" },
                priceNight: 30000, pricePlace: 10000
            },
        ]
    },
    {
        id: "lux",
        title: { ru: "ЛЮКС", kz: "ЛЮКС", en: "LUXURY", zh: "豪华", az: "LUKS" },
        image: "/3-room-lux/17-photo_5361824987964182350_y (1).jpg",
        rooms: [
            {
                id: "lux-2-imp",
                name: { ru: "Люкс 2-х комнатный (Улучшенный)", kz: "Люкс 2 бөлмелі (Жақсартылған)", en: "Luxury 2-Room (Superior)", zh: "豪华两室（高级）", az: "Luks 2 otaqlı (Təkmilləşdirilmiş)" },
                priceNight: 40000, pricePlace: 40000
            },
            {
                id: "lux-3",
                name: { ru: "Люкс 3-х комнатный", kz: "Люкс 3 бөлмелі", en: "Luxury 3-Room", zh: "豪华三室", az: "Luks 3 otaqlı" },
                priceNight: 45000, pricePlace: 45000
            },
            {
                id: "lux-2",
                name: { ru: "Люкс 2-х комнатный", kz: "Люкс 2 бөлмелі", en: "Luxury 2-Room", zh: "豪华两室", az: "Luks 2 otaqlı" },
                priceNight: 40000, pricePlace: 40000
            },
            {
                id: "lux-317-calc",
                name: { ru: "Люкс 317", kz: "Люкс 317", en: "Luxury 317", zh: "豪华房 317", az: "Lüks 317" },
                priceNight: 35000, pricePlace: 35000
            },
        ]
    },
    {
        id: "semilux",
        title: { ru: "ПОЛУЛЮКС", kz: "ЖАРТЫЛАЙ ЛЮКС", en: "SEMI-LUX", zh: "半豪华", az: "YARIMLUKS" },
        image: "/semi-lux-2-place/10-photo_5361824987964182344_y (1).jpg",
        rooms: [
            {
                id: "semi-1",
                name: { ru: "1 местный однокомнатный", kz: "1 орынды бір бөлмелі", en: "Single 1-Room", zh: "单人一室", az: "1 nəfərlik bir otaqlı" },
                priceNight: 19000, pricePlace: 19000
            },
            {
                id: "semi-1-2room",
                name: { ru: "1 местный 2-х комнатный", kz: "1 орынды 2 бөлмелі", en: "Single 2-Room", zh: "单人两室", az: "1 nəfərlik 2 otaqlı" },
                priceNight: 28000, pricePlace: 28000
            },
            {
                id: "semi-2-2room",
                name: { ru: "2-х местный 2-х комнатный", kz: "2 орынды 2 бөлмелі", en: "Double 2-Room", zh: "双人两室", az: "2 nəfərlik 2 otaqlı" },
                priceNight: 32000, pricePlace: 16000
            },
        ]
    },
    {
        id: "econom-plus",
        title: { ru: "ЭКОНОМ +", kz: "ЭКОНОМ +", en: "ECONOMY +", zh: "经济 +", az: "EKONOM +" },
        image: "/2-place-econom+/picture-1.jpg",
        rooms: [
            {
                id: "eco-p-3",
                name: { ru: "Эконом+ 3-х местный", kz: "Эконом+ 3 орынды", en: "Economy+ Triple", zh: "经济+ 三人间", az: "Ekonom+ 3 nəfərlik" },
                priceNight: 33000, pricePlace: 11000
            },
            {
                id: "eco-p-1",
                name: { ru: "Эконом+ Однокомнатный", kz: "Эконом+ Бір бөлмелі", en: "Economy+ Single Room", zh: "经济+ 单间", az: "Ekonom+ Bir otaqlı" },
                priceNight: 15000, pricePlace: 15000
            },
            {
                id: "eco-p-2",
                name: { ru: "Эконом+ 2-х местный", kz: "Эконом+ 2 орынды", en: "Economy+ Double", zh: "经济+ 双人间", az: "Ekonom+ 2 nəfərlik" },
                priceNight: 24000, pricePlace: 12000
            },
            {
                id: "eco-p-1-large",
                name: { ru: "Эконом+ Одноместный (Большой)", kz: "Эконом+ Бір орынды (Үлкен)", en: "Economy+ Single (Large)", zh: "经济+ 单人（大）", az: "Ekonom+ Bir nəfərlik (Büyük)" },
                priceNight: 22000, pricePlace: 22000
            },
        ]
    },
    {
        id: "standard",
        title: { ru: "СТАНДАРТ", kz: "СТАНДАРТ", en: "STANDARD", zh: "标准", az: "STANDART" },
        image: "/one-place-standart/picture-1.jpg",
        rooms: [
            {
                id: "std-1",
                name: { ru: "1 местный", kz: "1 орынды", en: "Single", zh: "单人间", az: "1 nəfərlik" },
                priceNight: 17000, pricePlace: 17000
            },
            {
                id: "std-2",
                name: { ru: "2-х местный", kz: "2 орынды", en: "Double", zh: "双人间", az: "2 nəfərlik" },
                priceNight: 27000, pricePlace: 13500
            },
        ]
    },
    {
        id: "econom",
        title: { ru: "ЭКОНОМ", kz: "ЭКОНОМ", en: "ECONOMY", zh: "经济", az: "EKONOM" },
        image: "/1-place-econom/picture-1.jpg",
        rooms: [
            {
                id: "eco-1-l",
                name: { ru: "Одноместный Эконом с большой кроватью", kz: "Үлкен төсегі бар бір орынды Эконом", en: "Single Economy with Large Bed", zh: "大床单人经济房", az: "Böyük çarpayılı bir nəfərlik Ekonom" },
                priceNight: 20000, pricePlace: 20000
            },
            {
                id: "eco-2",
                name: { ru: "Эконом 2-х местный", kz: "Эконом 2 орынды", en: "Economy Double", zh: "经济双人间", az: "Ekonom 2 nəfərlik" },
                priceNight: 20000, pricePlace: 10000
            },
            {
                id: "eco-1",
                name: { ru: "Эконом 1-о местный", kz: "Эконом 1 орынды", en: "Economy Single", zh: "经济单人间", az: "Ekonom 1 nəfərlik" },
                priceNight: 12000, pricePlace: 12000
            },
            {
                id: "eco-4",
                name: { ru: "4-х местный", kz: "4 орынды", en: "Quadruple", zh: "四人间", az: "4 nəfərlik" },
                priceNight: 40000, pricePlace: 10000
            },
            {
                id: "eco-3",
                name: { ru: "3-х местный", kz: "3 орынды", en: "Triple", zh: "三人间", az: "3 nəfərlik" },
                priceNight: 30000, pricePlace: 10000
            },
        ]
    }
];

interface DataContextType {
    rooms: Record<string, RoomData>;
    news: NewsItem[];
    calculatorData: CalculatorCategory[];
    updateRoomPrice: (roomId: string, newPrice: string) => void;
    updateCalculatorPrice: (roomId: string, priceNight: number, pricePlace: number) => void;
    addNews: (newsItem: NewsItem) => void;
    deleteNews: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    // Инициализация из localStorage или дефолтных данных
    const [rooms, setRooms] = useState<Record<string, RoomData>>(() => {
        const savedRooms = localStorage.getItem("app_rooms");
        return savedRooms ? JSON.parse(savedRooms) : initialRoomsData;
    });

    const [news, setNews] = useState<NewsItem[]>(() => {
        const savedNews = localStorage.getItem("app_news");
        return savedNews ? JSON.parse(savedNews) : initialNewsData;
    });

    const [calculatorData, setCalculatorData] = useState<CalculatorCategory[]>(() => {
        const savedCalc = localStorage.getItem("app_calculator");
        return savedCalc ? JSON.parse(savedCalc) : initialCalculatorData;
    });

    // Сохранение в localStorage при изменениях
    useEffect(() => {
        localStorage.setItem("app_rooms", JSON.stringify(rooms));
    }, [rooms]);

    useEffect(() => {
        localStorage.setItem("app_news", JSON.stringify(news));
    }, [news]);

    useEffect(() => {
        localStorage.setItem("app_calculator", JSON.stringify(calculatorData));
    }, [calculatorData]);

    const updateRoomPrice = (roomId: string, newPrice: string) => {
        setRooms((prev) => ({
            ...prev,
            [roomId]: {
                ...prev[roomId],
                price: newPrice,
            },
        }));
    };

    const updateCalculatorPrice = (roomId: string, priceNight: number, pricePlace: number) => {
        setCalculatorData((prev) => prev.map(cat => ({
            ...cat,
            rooms: cat.rooms.map(room => room.id === roomId ? { ...room, priceNight, pricePlace } : room)
        })));
    };

    const addNews = (newsItem: NewsItem) => {
        setNews((prev) => [newsItem, ...prev]);
    };

    const deleteNews = (id: number) => {
        setNews((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <DataContext.Provider value={{ rooms, news, calculatorData, updateRoomPrice, updateCalculatorPrice, addNews, deleteNews }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};
