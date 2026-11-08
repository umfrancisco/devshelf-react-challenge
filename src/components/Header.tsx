import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label="DevShelf home">
        <span className={styles.logo}>D</span>
        <span>devshelf</span>
      </a>
      <span className={styles.headerNote}>
        A little home for side projects
      </span>
    </header>
  );
}

export default Header;