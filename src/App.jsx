import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import UnderNav from "./components/UnderNav";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <NavBar />
      <UnderNav />
      <Gallery />
      {/* <MyFooter /> */}
    </>
  );
}

export default App;
