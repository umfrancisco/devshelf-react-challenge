export type Project = {
  id: number;
  name: string;
  description: string;
  category: "Frontend" | "Backend" | "Full stack";
  stars: number;
  updatedAt: string;
  favorite: boolean;
};