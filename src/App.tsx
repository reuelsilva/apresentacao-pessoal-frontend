import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import useSlowScroll from "./hooks/useSlowScroll";

function App(): JSX.Element {
  useSlowScroll();

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App