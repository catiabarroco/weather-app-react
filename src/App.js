import "./styles.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <h1 className="title">Weather App</h1>
        <Search />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
