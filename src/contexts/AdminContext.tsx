import React, { createContext, useContext, useState, useEffect } from "react";

interface AdminContextType {
    isAdmin: boolean;
    login: (password: string) => boolean;
    logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const savedAuth = localStorage.getItem("is_admin");
        if (savedAuth === "true") {
            setIsAdmin(true);
        }
    }, []);

    const login = (password: string) => {
        // В реальном приложении это должен быть запрос к API
        if (password === "22822922") {
            setIsAdmin(true);
            localStorage.setItem("is_admin", "true");
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdmin(false);
        localStorage.removeItem("is_admin");
    };

    return (
        <AdminContext.Provider value={{ isAdmin, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within a AdminProvider");
    }
    return context;
};
