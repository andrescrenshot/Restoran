import Carousel from "react-bootstrap/Carousel";
import Sup from "../assets/Sup.png";
import Ayam from "../assets/Ayam.png";
import bangku from "../assets/bangku.png";
import satay from "../assets/satay.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={satay}
            alt="First slide"
            style={{ height: "650px", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sup}
            alt="Second slide"
            style={{ height: "650px", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Ayam}
            alt="Third slide"
            style={{ height: "650px", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mt-5">
        <Container>
          <Row>
            <Col>
              <img
                src={bangku}
                alt=""
                style={{
                  height: "300px",
                  width: "400px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </Col>
            <Col
              style={{
                fontSize: "18px",
                marginRight: "250px",
                marginTop: "30px",
              }}
            >
              <h1 className="">Resto</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              expedita sequi a iste sed vero aliquam maiores saepe cum impedit
              ducimus ratione exercitationem, quas cumque aperiam ea aut nam
              culpa!{" "}
            </Col>
          </Row>
        </Container>
      </div>
      <h1 className="text-center mt-5" style={{ fontSize: "35px" }}>
        Daftar makanan yang ada di menu
      </h1>
      <div className="mt-3">
        <Stack>
          <Row>
            <Col
              className="d-flex justify-content-center"
              style={{ gap: "45px" }}
            >
              <Link>
                <img
                  src={satay}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "255px",
                    height: "220px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <p
                  className="fw-bold text-center mt-4"
                  style={{
                    fontSize: "18px",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Satay
                </p>
              </Link>
              <Link>
                <img
                  src={satay}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "255px",
                    height: "220px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <p
                  className="fw-bold text-center mt-4"
                  style={{
                    fontSize: "18px",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Satay
                </p>
              </Link>
              <Link>
                <img
                  src={satay}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "255px",
                    height: "220px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <p
                  className="fw-bold text-center mt-4"
                  style={{
                    fontSize: "18px",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Satay
                </p>
              </Link>
              <Link>
                <img
                  src={satay}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "255px",
                    height: "220px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <p
                  className="fw-bold text-center mt-4"
                  style={{
                    fontSize: "18px",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Satay
                </p>
              </Link>
            </Col>
          </Row>
        </Stack>
      </div>
      <footer
        className="text-center text-bold py-3 mt-4"
        style={{ background: "#f1f1f1" }}
      >
        2026@Food
      </footer>
    </div>
  );
}
