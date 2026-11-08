import styles from "./App.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Library from "./components/Library";
import Footer from "./components/Footer";
import LibraryContextProvider from "./contexts/LibraryContextProvider";

function App() {
  return (
    <LibraryContextProvider>
      <main className={styles.page}>
        <Header />
        <Hero />
        <Library />
        <Footer />
      </main>
    </LibraryContextProvider>
  );
}

export default App;
