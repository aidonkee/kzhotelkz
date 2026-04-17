import { useState } from "react";
import { useData } from "@/contexts/DataContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

const AdminRooms = () => {
    const { rooms, updateRoomPrice } = useData();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [tempPrice, setTempPrice] = useState("");

    const handleEdit = (id: string, price: string) => {
        setEditingId(id);
        setTempPrice(price);
    };

    const handleSave = (id: string) => {
        updateRoomPrice(id, tempPrice);
        setEditingId(null);
        toast.success("Цена обновлена");
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Управление номерами</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Название (RU)</TableHead>
                            <TableHead>Цена</TableHead>
                            <TableHead className="w-[100px]">Действия</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.values(rooms).map((room) => (
                            <TableRow key={room.id}>
                                <TableCell className="font-medium">{room.name.ru}</TableCell>
                                <TableCell>
                                    {editingId === room.id ? (
                                        <Input
                                            value={tempPrice}
                                            onChange={(e) => setTempPrice(e.target.value)}
                                            className="w-32"
                                        />
                                    ) : (
                                        room.price
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editingId === room.id ? (
                                        <Button
                                            size="sm"
                                            onClick={() => handleSave(room.id)}
                                            className="w-full"
                                        >
                                            Сохранить
                                        </Button>
                                    ) : (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleEdit(room.id, room.price)}
                                            className="w-full"
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
        </div>
    );
};

export default AdminRooms;
