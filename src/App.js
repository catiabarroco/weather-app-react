import "./styles.css";
import Search from "./Search";
import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search />
        <Header />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}