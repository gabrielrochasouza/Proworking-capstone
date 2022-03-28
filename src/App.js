import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

import { Zoom } from "react-toastify";
import BottomNavigator from "./components/BottomNavigator";
import { useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});





const App = () => {

  const location = useLocation()

  return (
    <>
      <ToastContainer transition={Zoom} autoClose={1000} limit={1} />
      <GlobalStyle location={location.pathname} />
      <Loading />
      <Header />
      <Routes />
      <Footer />
      <BottomNavigator />
    </>
  );
};

export default App;
