import { Home, Newspaper } from "lucide-react";
import Index from "./pages/Index.jsx";
import LandingPage from "./pages/LandingPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Landing",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <LandingPage />,
  },
  {
    title: "Top Stories",
    to: "/top-stories",
    icon: <Newspaper className="h-4 w-4" />,
    page: <Index />,
  },
];
