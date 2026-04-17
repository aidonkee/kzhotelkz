import { Outlet, Navigate, Link, useLocation } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, BedDouble, Newspaper, LogOut } from "lucide-react";

const AdminLayout = () => {
    const { isAdmin, logout } = useAdmin();
    const location = useLocation();

    const isLoginPage = location.pathname === "/admin" || location.pathname === "/admin/";

    if (!isAdmin && !isLoginPage) {
        return <Navigate to="/admin" replace />;
    }

    if (isAdmin && isLoginPage) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    const navItems = [
        { href: "/admin/dashboard", label: "Дашборд", icon: LayoutDashboard },
        { href: "/admin/rooms", label: "Номера", icon: BedDouble },
        { href: "/admin/calculator", label: "Цены калькулятора", icon: BedDouble },
        { href: "/admin/news", label: "Новости", icon: Newspaper },
    ];

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-gray-200">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={logout}
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Выйти
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
