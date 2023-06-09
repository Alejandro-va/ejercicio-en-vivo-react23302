import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="detailPoke/:id" element={<Detail />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
