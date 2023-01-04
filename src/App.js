import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  const [userToggle, setUserToggle] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Nav userToggle={userToggle} setUserToggle={setUserToggle} />
      <ContactUs />
      {/* <Footer /> */}
    </>
  );
}

export default App;
