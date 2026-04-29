import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./contexts/LanguageContext";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import EducationLoan from "./pages/services/EducationLoan";
import AssetLoan from "./pages/services/AssetLoan";
import SmallBusinessLoan from "./pages/services/SmallBusinessLoan";
import SalaryAdvanceLoan from "./pages/services/SalaryAdvanceLoan";
import Apply from "./pages/Apply";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/education-loan" element={<EducationLoan />} />
                <Route path="/services/asset-loan" element={<AssetLoan />} />
                <Route path="/services/small-scale-business-loan" element={<SmallBusinessLoan />} />
                <Route path="/services/salary-advance-loan" element={<SalaryAdvanceLoan />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            <WhatsAppButton />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
