import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { initialProjects } from "./data/projects";
import type { Category, Project, SortMode } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Library from "./components/Library";

export default function App() {
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

  function toggleFavorite(id: number) {
    setProjects((current) => current.map((project) => project.id === id ? { ...project, favorite: !project.favorite } : project));
  }

  return (
    <main className={styles.page}>
      <Header />
      <Hero projects={projects} />
      <Library 
        search={search} 
        setSearch={setSearch} 
        category={category} 
        setCategory={setCategory} 
        favoritesOnly={favoritesOnly} 
        setFavoritesOnly={setFavoritesOnly} 
        sortMode={sortMode} 
        setSortMode={setSortMode} 
        selected={selected} 
        projects={projects} 
        onToggleFavorite={toggleFavorite} />
      <footer className={styles.footer}>
        Made for builders, by builders <span>✳</span>
      </footer>
    </main>
  );
}
