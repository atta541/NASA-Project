import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  ImageIcon,
  Zap,
  Camera,
  Search,
  Moon,
  Sun,
  Heart,
  Target 
} from "lucide-react";

 
const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "APOD Explorer", href: "/apod", icon: ImageIcon },
  { name: "NEO Tracker", href: "/neo", icon: Target },
  { name: "Mars Rover", href: "/mars", icon: Camera },
  { name: "Tech Search", href: "/tech", icon: Search },
];

export default function Navbar() {
  const location = useLocation();

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ---------------------------------------------------------------- */}
          {/* Logo + nav links                                                */}
          {/* ---------------------------------------------------------------- */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl">NASA Explorer</span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navigation.map(({ name, href, icon: Icon }) => {
                const active =
                  location.pathname === href ||
                  (href !== "/" && location.pathname.startsWith(href));

                const linkClasses = [
                  "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                ].join(" ");

                return (
                  <Link key={name} to={href} className={linkClasses}>
                    <Icon className="w-4 h-4" />
                    <span>{name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to="/favorites"
              className="p-2 rounded-md hover:bg-accent transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span className="sr-only">Favorites</span>
            </Link>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent relative transition-colors"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
