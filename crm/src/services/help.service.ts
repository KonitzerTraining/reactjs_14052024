import { useEffect, useState } from "react";
import { CONFIG } from "../CONFIG";
import { HelpArticle } from "../model/HelpArticle";

const url = CONFIG.api + 'help';

export const helpService = {
    async getAll(): Promise<HelpArticle[]> {
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
} 
