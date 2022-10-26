import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
import "./index.css";
import Nav from "../src/components/Nav component/nav";
import  Section1 from "./components/firstsection/section1";
import Somenft from "./components/collectnft section/somenft"
import Topcreators from "./components/Top creators/topcreators"
import Ntscollection from './components/NFT collection section/NftsCollection'
import Footer from "./components/footer/footer"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Section1 />
    <Somenft/>
    <Topcreators/>
    <Ntscollection/>
    <Footer/>
  </React.StrictMode>
);
