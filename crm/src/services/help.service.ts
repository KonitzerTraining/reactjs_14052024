import { useEffect, useState } from "react";
import { CONFIG } from "../CONFIG";
import { HelpArticle } from "../model/HelpArticle";

const url = CONFIG.api + 'help';

export const helpService = {
    async getAll() {
      const response = await fetch(url);
      return response.json();
    }
}

// Custom Hook
export function useHelpArticles() {
  const [articles, setArticles] = useState<HelpArticle[]>([]);

  useEffect(() => {
      helpService.getAll().then((articles) => {
          setArticles(articles);
      });
  }, []);

  return articles;
<<<<<<< HEAD
} 
=======
}
>>>>>>> fbfb9aec66551a882fb8b37a13629af2a6dc9c76
