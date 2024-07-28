import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import HackerNewsList from '../components/HackerNewsList';
import { ThemeToggle } from '../components/ThemeToggle';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const filteredStories = data?.hits.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Top 100 Hacker News Stories</h1>
        <ThemeToggle />
      </div>
      <div className="flex items-center mb-6">
        <div className="relative flex-grow mr-2">
          <Input
            type="text"
            placeholder="Search stories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <Button type="button" onClick={() => {}} className="bg-pink-500 hover:bg-pink-600 text-white">
          Search
        </Button>
      </div>
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <HackerNewsList stories={filteredStories} isLoading={isLoading} />
    </div>
  );
};

export default Index;
