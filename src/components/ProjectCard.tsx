import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  onToggleFavorite: (id: number) => void;
};

export default function ProjectCard({ project, onToggleFavorite }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.category}>{project.category}</span>
        <button
          className={`${styles.favorite} ${project.favorite ? styles.isFavorite : ""}`}
          onClick={() => onToggleFavorite(project.id)}
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
