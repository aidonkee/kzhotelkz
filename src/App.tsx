import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import RoomsPage from "@/pages/RoomsPage";
import RoomDetailPage from "@/pages/RoomDetailPage";
import BookingPage from "@/pages/BookingPage";
import BookingCalculatorPage from "@/pages/BookingCalculatorPage"; // <--- ИМПОРТ
import ConferencePage from "@/pages/ConferencePage";
import ContactsPage from "@/pages/ContactsPage";
import NewsPage from "@/pages/NewsPage";
import NotFound from "@/pages/NotFound";
import ServicesPage from "@/pages/ServicesPage";
import NewsDetailPage from "@/pages/NewsDetailPage";

import { DataProvider } from "@/contexts/DataContext";
import { AdminProvider } from "@/contexts/AdminContext";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminRooms from "@/pages/admin/AdminRooms";
import AdminCalculator from "@/pages/admin/AdminCalculator";
import AdminNews from "@/pages/admin/AdminNews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DataProvider>
        <AdminProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/rooms" element={<Layout><RoomsPage /></Layout>} />
              <Route path="/room/:id" element={<Layout><RoomDetailPage /></Layout>} />
              <Route path="/booking" element={<Layout><BookingPage /></Layout>} />
              <Route path="/rates" element={<Layout><BookingCalculatorPage /></Layout>} />
              <Route path="/conference" element={<Layout><ConferencePage /></Layout>} />
              <Route path="/contacts" element={<Layout><ContactsPage /></Layout>} />
              <Route path="/news" element={<Layout><NewsPage /></Layout>} />
              <Route path="/news/:id" element={<Layout><NewsDetailPage /></Layout>} />
              <Route path="/services" element={<Layout><ServicesPage /></Layout>} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminLogin />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="rooms" element={<AdminRooms />} />
                <Route path="calculator" element={<AdminCalculator />} />
                <Route path="news" element={<AdminNews />} />
              </Route>

              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </DataProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;