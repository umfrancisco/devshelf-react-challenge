import { useMemo, useState } from "react";
import { initialProjects } from "./data/projects";
import type { Project } from "./types";
import ProjectCard from "./components/ProjectCard";
import styles from "./App.module.css";

type SortMode = "recent" | "stars";

export default function App() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("recent");

  const visibleProjects = useMemo(() => {
    let result = [...projects];

    if (search.trim()) {
      result = result.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "All") {
      result = result.filter((project) => project.category === "All");
    }

    if (favoritesOnly) {
      result = result.filter((project) => project.favorite === false);
    }

    result.sort((a, b) =>
      sortMode === "recent"
        ? a.updatedAt.localeCompare(b.updatedAt)
        : a.stars - b.stars,
    );

    return result;
  }, [projects, search, category, favoritesOnly, sortMode]);

  function toggleFavorite(id: number) {
    setProjects((current) =>
      current.map((project) =>
        project.id === id ? { ...project, favorite: project.favorite } : project,
      ),
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="DevShelf home">
          <span className={styles.logo}>D</span>
          <span>devshelf</span>
        </a>
        <span className={styles.headerNote}>A little home for side projects</span>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>THE COMMUNITY PROJECT SHELF</p>
        <h1>Good ideas deserve<br /><span>a place to grow.</span></h1>
        <p className={styles.subtitle}>Explore small projects built by curious developers. Find inspiration for what to build next.</p>
        <div className={styles.stats}>
          <div><strong>{projects.length}</strong><span>Projects</span></div>
          <div><strong>{projects.reduce((total, project) => total + project.stars, 0)}</strong><span>Community stars</span></div>
          <div><strong>{projects.filter((project) => project.favorite).length}</strong><span>Your favorites</span></div>
        </div>
      </section>

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
            {["All", "Frontend", "Backend", "Full stack"].map((item) => (
              <button
                key={item}
                className={`${styles.filter} ${category === item ? styles.activeFilter : ""}`}
                onClick={() => setCategory(item)}
              >{item}</button>
            ))}
          </div>
          <div className={styles.controls}>
            <label className={styles.favoritesToggle}>
              <input type="checkbox" checked={favoritesOnly} onChange={(event) => setFavoritesOnly(event.target.checked)} />
              Favorites only
            </label>
            <select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)} aria-label="Sort projects">
              <option value="recent">Recently updated</option>
              <option value="stars">Most stars</option>
            </select>
          </div>
        </div>

        <p className={styles.resultCount}>Showing <strong>{visibleProjects.length}</strong> of {projects.length} projects</p>
        {visibleProjects.length > 0 ? (
          <div className={styles.grid}>
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span>⌕</span>
            <h3>No projects found</h3>
            <p>Try another search or clear a filter to see more projects.</p>
            <button onClick={() => { setSearch(""); setCategory("All"); setFavoritesOnly(false); }}>Clear filters</button>
          </div>
        )}
      </section>
      <footer className={styles.footer}>Made for builders, by builders <span>✳</span></footer>
    </main>
  );
}