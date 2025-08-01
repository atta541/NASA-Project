import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ImageIcon, Camera, Target, GitFork, Menu, X } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "APOD Explorer", href: "/apod", icon: ImageIcon },
  { name: "NEO Tracker", href: "/neo", icon: Target },
  { name: "Mars Rover", href: "/mars", icon: Camera },
  { name: "Tech Transfer", href: "/tech", icon: GitFork },
];

export default function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Fixed top bar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">N</span>
                </div>
                <span className="text-xl font-bold text-gray-900">NASA Explorer</span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
              {navigation.map(({ name, href, icon: Icon }) => {
                const active =
                  location.pathname === href ||
                  (href !== "/" && location.pathname.startsWith(href));

                const linkClasses = [
                  "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  active
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                ].join(" ");

                return (
                  <Link key={name} to={href} className={linkClasses}>
                    <Icon className="w-4 h-4" />
                    <span>{name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mobile-menu-container">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
              {navigation.map(({ name, href, icon: Icon }) => {
                const active =
                  location.pathname === href ||
                  (href !== "/" && location.pathname.startsWith(href));

                const linkClasses = [
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors",
                  active
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                ].join(" ");

                return (
                  <Link key={name} to={href} className={linkClasses}>
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer so content starts below the bar */}
      <div className="h-16" />
    </>
  );
}