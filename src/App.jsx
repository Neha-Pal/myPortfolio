import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Me } from "./components/Me/Me";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Project/Project";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div id="Me"><Me /></div>
      <div id="Skills"><Skills /></div>
      <div id="Project"><Project /></div>
      <div id="Contact"><Contact /></div>
    </div>
  );
}


export default App;