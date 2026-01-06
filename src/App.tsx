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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/room/:id" element={<RoomDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/rates" element={<BookingCalculatorPage />} /> {/* <--- НОВЫЙ МАРШРУТ */}
            <Route path="/conference" element={<ConferencePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;