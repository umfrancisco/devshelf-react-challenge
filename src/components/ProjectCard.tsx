import { useLibraryContext } from "../contexts/LibraryContext";
import type { Project } from "../types";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { setProjects } = useLibraryContext();

  function toggleFavorite(id: number) {
    setProjects((current) => current.map((project) => project.id === id ? { ...project, favorite: !project.favorite } : project));
  }

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.category}>{project.category}</span>
        <button
          className={`${styles.favorite} ${project.favorite ? styles.isFavorite : ""}`}
          onClick={() => toggleFavorite(project.id)}
          aria-label={
            project.favorite ? "Remove from favorites" : "Add to favorites"
          }
          title={
            project.favorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          {project.favorite ? "★" : "☆"}
        </button>
      </div>
      <h3>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.meta}>
        <span>★ {project.stars} stars</span>
        <span>
          Updated{" "}
          {new Date(project.updatedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    </article>
  );
}
