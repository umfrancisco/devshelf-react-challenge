import type { Dispatch } from "react";

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

export type LibraryContextType = {
  projects: Project[];
  setProjects: Dispatch<React.SetStateAction<Project[]>>;
  selected: Project[];
  setSelected: Dispatch<React.SetStateAction<Project[]>>;
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<React.SetStateAction<Category>>;
  favoritesOnly: boolean;
  setFavoritesOnly: Dispatch<React.SetStateAction<boolean>>;
  sortMode: SortMode;
  setSortMode: Dispatch<React.SetStateAction<SortMode>>;
}
