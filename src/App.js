import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <Cards />
    </Container>
  );
}

export default App;
