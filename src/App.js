import "./styles.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search cityDefault="New York"/>
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
