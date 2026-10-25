declare type Project = {
  id: number;
  name: string;
  description: string;
  category: "Frontend" | "Backend" | "Full stack" | "All";
  stars: number;
  updatedAt: string;
  favorite: boolean;
};

declare type SortMode = "recent" | "stars";