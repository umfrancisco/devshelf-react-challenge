declare type Category = "Frontend" | "Backend" | "Full stack" | "All";

declare type Project = {
  id: number;
  name: string;
  description: string;
  category: Category;
  stars: number;
  updatedAt: string;
  favorite: boolean;
};

declare type SortMode = "recent" | "stars";
