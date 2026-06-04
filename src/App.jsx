import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Product from "./page/Product";


function App() {
  return (
    <div>
      <Navbar className="py-3 justify-content-between bg-dark navbar-dark " >
        <Container>
          <Navbar.Brand href="#Home"> 🍽️ Restoran</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="auto " style={{fontSize: "20px"}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="product">Menu</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
