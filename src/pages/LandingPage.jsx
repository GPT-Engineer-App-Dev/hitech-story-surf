import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        <Terminal className="mr-2" />
        Hacker News Top 100
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Stay up-to-date with the most popular stories from Hacker News. Our app fetches and displays the top 100 stories, allowing you to quickly browse and search through the latest tech news and discussions.
      </p>
      <Link to="/top-stories">
        <Button className="bg-primary hover:bg-secondary text-primary-foreground text-lg px-6 py-3">
          View Top Stories
        </Button>
      </Link>
    </div>
  );
};

export default LandingPage;
