import "./App.css";
import Header from "./components/Header/Header";
import logo from "./components/logo-netflix.png";
import Section from "./components/Section/Section.js";
import Assets from "./components/netflix-asset.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header img={logo} />
        {Assets.map((genre, index) => {
          return (
            <Section
              key={index}
              title={genre.category}
              pictures={genre.images}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
