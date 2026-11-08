import { useEffect, useState, type ReactNode } from "react";
import { LibraryContext } from "./LibraryContext";
import type { Category, Project, SortMode } from "../types";
import { initialProjects } from "../data/projects";

type Props = {
  children: ReactNode;
}

function LibraryContextProvider({ children }: Props) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selected, setSelected] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("recent");

  useEffect(() => {
    if (search === "" && category === "All") {
      setSelected([...projects]);
    }
    if (category !== "All") {
      setSelected(projects.filter(project => project.category === category));
    }
    if (search !== "") {
      setSelected(selected.filter(project => {
        const searched = search.toLowerCase();
        const projectName = project.name.split(" ").reduce((p, c) => p + c, "").toLowerCase();
        return projectName.includes(searched);
      }));
    }
    if (favoritesOnly) {
      setSelected(category === "All" ? (
        projects.filter(p => p.favorite)
      ) : (
        projects.filter(p => p.category === category).filter(p => p.favorite)
      ));
    }
  }, [search, category, favoritesOnly, projects]);

  return (
    <LibraryContext.Provider value={{
      projects,
      setProjects,
      selected,
      setSelected,
      search,
      setSearch,
      category,
      setCategory,
      favoritesOnly,
      setFavoritesOnly,
      sortMode,
      setSortMode,
    }}>
      {children}
    </LibraryContext.Provider>
  );
}

export default LibraryContextProvider;