import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, Newspaper, Calculator } from "lucide-react";

const AdminDashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Дашборд</h1>
            <div className="grid md:grid-cols-2 gap-6">
                <Link to="/admin/rooms">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xl font-medium">Номера</CardTitle>
                            <BedDouble className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-primary">Управление номерами</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Изменить стоимость проживания
                            </p>
                        </CardContent>
                    </Card>
                </Link>
                <Link to="/admin/calculator">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xl font-medium">Калькулятор</CardTitle>
                            <Calculator className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-primary">Управление ценами</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Изменить цены в калькуляторе
                            </p>
                        </CardContent>
                    </Card>
                </Link>
                <Link to="/admin/news">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xl font-medium">Новости</CardTitle>
                            <Newspaper className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-primary">Управление новостями</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Добавить или удалить новости
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            </div >
        </div >
    );
};

export default AdminDashboard;
