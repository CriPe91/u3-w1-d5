import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import UnderNav from "./components/UnderNav";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";
import GalleryOne from "./components/GalleryOne";
import GalleryTwo from "./components/GalleryTwo";

function App() {
  return (
    <>
      <NavBar />
      <UnderNav />
      <Gallery />
      <GalleryOne />
      <GalleryTwo />
      <MyFooter />
    </>
  );
}

export default App;
