import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AlltheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <MyNav home="Home🏠" about="About" browse="Browse" />
        </nav>
        <section>
          <Welcome />
        </section>
      </header>
      <main>
        <AlltheBooks buy="Acquista🛒" />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
