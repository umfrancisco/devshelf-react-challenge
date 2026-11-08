import { useEffect, useState } from "react";
import styles from "./App.module.css";
import ProjectCard from "./components/ProjectCard";
import { initialProjects } from "./data/projects";
import type { Category, Project, SortMode } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";

const categories: Category[] = ["All", "Frontend", "Backend", "Full stack"];

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

      <section className={styles.library} aria-labelledby="library-heading">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>BROWSE THE LIBRARY</p>
            <h2 id="library-heading">Featured projects</h2>
          </div>
          <label className={styles.searchWrap}>
            <span aria-hidden="true">⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects..."
              aria-label="Search projects"
            />
          </label>
        </div>

        <div className={styles.toolbar}>
          <div className={styles.filters} aria-label="Filter by category">
            {categories.map((item) => (
              <button
                key={item}
                className={`${styles.filter} ${category === item ? styles.activeFilter : ""}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={styles.controls}>
            <label className={styles.favoritesToggle}>
              <input
                type="checkbox"
                checked={favoritesOnly}
                onChange={(event) => setFavoritesOnly(event.target.checked)}
              />
              Favorites only
            </label>
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              aria-label="Sort projects"
            >
              <option value="recent">Recently updated</option>
              <option value="stars">Most stars</option>
            </select>
          </div>
        </div>

        <p className={styles.resultCount}>
          Showing <strong>{selected.length}</strong> of {projects.length}{" "}
          projects
        </p>
        {selected.length > 0 ? (
          <div className={styles.grid}>
            {selected.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span>⌕</span>
            <h3>No projects found</h3>
            <p>Try another search or clear a filter to see more projects.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setFavoritesOnly(false);
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
      <footer className={styles.footer}>
        Made for builders, by builders <span>✳</span>
      </footer>
    </main>
  );
}
