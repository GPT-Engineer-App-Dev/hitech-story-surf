import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary mt-auto">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p className="text-foreground">&copy; 2024 HN Top 100. All rights reserved.</p>
        <a
          href="https://github.com/yourusername/hn-top-100"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors"
        >
          <Github className="inline-block mr-2" size={20} />
          View on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
