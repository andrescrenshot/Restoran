import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Ayam from "../assets/Ayam.png";

export default function Product() {
  return (
    <div id="link">
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            style={{
              height: "50px",
              fontSize: "20px",
              width: "1100",
            }}
            placeholder="🔍 Cari nama makanan..."
          />
        </Col>
      </Row>
      <Row className="mt-20px">
        <Col lg={4} md={6}>
          {" "}
          <Card
            style={{
              width: "80%",
              borderRadius: "20px",
            }}
          >
            <Card.Img
              variant="top"
              src={Ayam}
              style={{
                height: "220px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <Card.Body>
              <Card.Title> Ayam</Card.Title>
              <Card.Text>Cita rasa bumbu gurih</Card.Text>
              <button
                className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                style={{
                  borderRadius: "10px",
                  marginTop: "65px",
                  height: "45px",
                }}
              >
                Beli
              </button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          {" "}
          <Card
            style={{
              width: "80%",
              borderRadius: "20px",
            }}
          >
            <Card.Img
              variant="top"
              src={Ayam}
              style={{
                height: "220px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <Card.Body>
              <Card.Title> Ayam</Card.Title>
              <Card.Text>Cita rasa bumbu gurih</Card.Text>
              <button
                className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                style={{
                  borderRadius: "10px",
                  marginTop: "65px",
                  height: "45px",
                }}
              >
                Beli
              </button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          {" "}
          <Card
            style={{
              width: "80%",
              borderRadius: "20px",
            }}
          >
            <Card.Img
              variant="top"
              src={Ayam}
              style={{
                height: "220px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <Card.Body>
              <Card.Title> Ayam</Card.Title>
              <Card.Text>Cita rasa bumbu gurih</Card.Text>
              <button
                className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                style={{
                  borderRadius: "10px",
                  marginTop: "65px",
                  height: "45px",
                }}
              >
                Beli
              </button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          {" "}
          <Card
            style={{
              width: "80%",
              borderRadius: "20px",
            }}
          >
            <Card.Img
              variant="top"
              src={Ayam}
              style={{
                height: "220px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <Card.Body>
              <Card.Title> Ayam</Card.Title>
              <Card.Text>Cita rasa bumbu gurih</Card.Text>
              <button
                className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                style={{
                  borderRadius: "10px",
                  marginTop: "65px",
                  height: "45px",
                }}
              >
                Beli
              </button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
