import { Link } from "react-router-dom";
import { navItems } from "../nav-items";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-primary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">HN Top 100</Link>
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
