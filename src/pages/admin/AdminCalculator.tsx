import { useState } from "react";
import { useData } from "@/contexts/DataContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Shadcn table might be too simple for nested data, let's use divs or custom layout
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Save } from "lucide-react";

const AdminCalculator = () => {
    const { calculatorData, updateCalculatorPrice } = useData();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [tempPriceNight, setTempPriceNight] = useState<string>("");
    const [tempPricePlace, setTempPricePlace] = useState<string>("");

    const handleEdit = (roomId: string, priceNight: number, pricePlace: number) => {
        setEditingId(roomId);
        setTempPriceNight(priceNight.toString());
        setTempPricePlace(pricePlace.toString());
    };

    const handleSave = (roomId: string) => {
        const night = parseInt(tempPriceNight.replace(/\s/g, ""), 10);
        const place = parseInt(tempPricePlace.replace(/\s/g, ""), 10);

        if (isNaN(night) || isNaN(place)) {
            toast.error("Введите корректные числа");
            return;
        }

        updateCalculatorPrice(roomId, night, place);
        setEditingId(null);
        toast.success("Цены обновлены");
    };

    const cancelEdit = () => {
        setEditingId(null);
        setTempPriceNight("");
        setTempPricePlace("");
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Управление ценами калькулятора</h1>

            <div className="space-y-8">
                {calculatorData.map((category) => (
                    <div key={category.id} className="bg-white p-6 rounded-xl shadow-sm border">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <img src={category.image} alt="" className="w-10 h-10 rounded-md object-cover" />
                            {category.title.ru}
                        </h2>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Название (RU)</TableHead>
                                    <TableHead>Цена за номер (Ночь)</TableHead>
                                    <TableHead>Цена за место</TableHead>
                                    <TableHead className="w-[150px]">Действия</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {category.rooms.map((room) => (
                                    <TableRow key={room.id}>
                                        <TableCell className="font-medium">{room.name.ru}</TableCell>
                                        <TableCell>
                                            {editingId === room.id ? (
                                                <Input
                                                    value={tempPriceNight}
                                                    onChange={(e) => setTempPriceNight(e.target.value)}
                                                    type="number"
                                                    className="w-32"
                                                />
                                            ) : (
                                                `${room.priceNight.toLocaleString()} ₸`
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {editingId === room.id ? (
                                                <Input
                                                    value={tempPricePlace}
                                                    onChange={(e) => setTempPricePlace(e.target.value)}
                                                    type="number"
                                                    className="w-32"
                                                />
                                            ) : (
                                                `${room.pricePlace.toLocaleString()} ₸`
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {editingId === room.id ? (
                                                <div className="flex gap-2">
                                                    <Button size="sm" onClick={() => handleSave(room.id)}>
                                                        <Save className="w-4 h-4" />
                                                    </Button>
                                                    <Button size="sm" variant="ghost" onClick={cancelEdit}>
                                                        ✕
                                                    </Button>
                                                </div>
                                            ) : (
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleEdit(room.id, room.priceNight, room.pricePlace)}
                                                >
                                                    Изменить
                                                </Button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminCalculator;
