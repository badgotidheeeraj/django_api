import "./App.css";
import Jsontext from "./Components/Jsontext";
import Navbar from "./Components/navbar";
import TextFrom from "./Components/textfrom";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Jsontext />
      <TextFrom />
      {/* <TextFrom heading="Answer is Here" /> */}
      {/* <BrowserRouter>
        <Route path="/" Component={TextFrom} />
      </BrowserRouter> */}
    </>
  );
}

export default App;
