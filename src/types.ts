export type Category = "Frontend" | "Backend" | "Full stack" | "All";

export type Project = {
  id: number;
  name: string;
  description: string;
  category: Category;
  stars: number;
  updatedAt: string;
  favorite: boolean;
};

export type SortMode = "recent" | "stars";
