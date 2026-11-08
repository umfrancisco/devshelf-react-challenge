import { useLibraryContext } from "../contexts/LibraryContext";
import type { Category, SortMode } from "../types";
import styles from "./Library.module.css";
import ProjectCard from "./ProjectCard";

const categories: Category[] = ["All", "Frontend", "Backend", "Full stack"];

function Library() {
  const { 
    search, 
    setSearch, 
    category, 
    setCategory, 
    favoritesOnly, 
    setFavoritesOnly, 
    sortMode, 
    setSortMode,
    selected,
    projects,
  } = useLibraryContext();

  return (
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
            <ProjectCard key={project.id} project={project} />
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
  );
}

export default Library;