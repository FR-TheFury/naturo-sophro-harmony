import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sophrologie from "./pages/Sophrologie";
import Naturopathie from "./pages/Naturopathie";
import APropos from "./pages/APropos";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Pour GitHub Pages, change le basename avec le nom de ton repo
// Exemple: basename="/gaia-sensoria" si ton repo s'appelle gaia-sensoria
// Pour o2switch ou localhost, laisse basename="/"
const basename = import.meta.env.PROD ? "/" : "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sophrologie" element={<Sophrologie />} />
          <Route path="/naturopathie" element={<Naturopathie />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
