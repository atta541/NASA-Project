import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ImageIcon, Camera, Target, GitFork } from "lucide-react";

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* fixed top bar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b bg-white" >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* logo + links */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">N</span>
                </div>
                <span className="text-xl font-bold">NASA Explorer</span>
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
          </div>
        </div>
      </nav>

      {/* spacer so content starts below the bar */}
      <div className="h-16" />
    </>
  );
}
