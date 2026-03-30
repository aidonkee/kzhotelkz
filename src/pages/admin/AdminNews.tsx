import { useState } from "react";
import { useData } from "@/contexts/DataContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";

const AdminNews = () => {
    const { news, deleteNews, addNews } = useData();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
        date: new Date().toISOString().split("T")[0],
    });

    const handleDelete = (id: number) => {
        if (confirm("Вы уверены, что хотите удалить эту новость?")) {
            deleteNews(id);
            toast.success("Новость удалена");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newId = Math.max(...news.map((n) => n.id), 0) + 1;

        addNews({
            id: newId,
            title: formData.title,
            description: formData.description,
            date: formData.date,
            category: "hotel", // Default
            image: "/logo.png", // Default placeholder
            content: `<p>${formData.content}</p>`,
            titleKey: "", // Not used for custom news
            descKey: "", // Not used for custom news
        });

        setIsOpen(false);
        setFormData({
            title: "",
            description: "",
            content: "",
            date: new Date().toISOString().split("T")[0],
        });
        toast.success("Новость добавлена");
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Управление новостями</h1>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="w-4 h-4 mr-2" />
                            Добавить новость
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle>Добавить новость</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Заголовок</Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) =>
                                        setFormData({ ...formData, title: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="desc">Краткое описание</Label>
                                <Input
                                    id="desc"
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="content">Контент (HTML поддерживается)</Label>
                                <Textarea
                                    id="content"
                                    value={formData.content}
                                    onChange={(e) =>
                                        setFormData({ ...formData, content: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="date">Дата</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) =>
                                        setFormData({ ...formData, date: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Сохранить
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Дата</TableHead>
                            <TableHead>Заголовок</TableHead>
                            <TableHead className="w-[100px]">Действия</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {news.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.date}</TableCell>
                                <TableCell className="font-medium">{item.title}</TableCell>
                                <TableCell>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminNews;
