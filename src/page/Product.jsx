import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Ayam from "../assets/Ayam.png";
import Container from "react-bootstrap/Container";
import Sup from "../assets/Sup.png";
import satay from "../assets/satay.png";
import Citarasa from "../assets/Citarasa.png";
import Kimbab from "../assets/Kimbab.png";
import Rendang from "../assets/Rendang.png";
import { renderMatches } from "react-router-dom";

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

      <Container className="mt-4">
        <Row className="g-4 mt-3">
          <Col lg={4} md={6}>
            <Card
              className="h-100 shadow-sm"
              style={{
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Sup}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />

              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold fs-5 mb-1">Sup</Card.Title>
                <Card.Text className="text-muted small flex-grow-1 mb-4">
                  Sayuran dan daging dengan tambahan irisan tomat yang
                  menyegarkan{" "}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                    <button
                      className="btn btn-sm p-0 border-0 text-muted fw-bold"
                      style={{ width: "20px" }}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">1</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Beli
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card
              className="h-100 shadow-sm"
              style={{
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={satay}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />

              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold fs-5 mb-1">Satay</Card.Title>
                <Card.Text className="text-muted small flex-grow-1 mb-4">
                  Sate asli garut dengan kecap mushou no hitotachi{" "}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                    <button
                      className="btn btn-sm p-0 border-0 text-muted fw-bold"
                      style={{ width: "20px" }}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">1</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Beli
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card
              className="h-100 shadow-sm"
              style={{
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Ayam}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />

              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold fs-5 mb-1">Ayam</Card.Title>
                <Card.Text className="text-muted small flex-grow-1 mb-4">
                  Sayap ayam madu panggang{" "}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                    <button
                      className="btn btn-sm p-0 border-0 text-muted fw-bold"
                      style={{ width: "20px" }}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">1</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Beli
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card
              className="h-100 shadow-sm"
              style={{
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Kimbab}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />

              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold fs-5 mb-1">Kimbab</Card.Title>
                <Card.Text className="text-muted small flex-grow-1 mb-4">
                  Sayuran yang di bungkus dengan nori/rumput laut{" "}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                    <button
                      className="btn btn-sm p-0 border-0 text-muted fw-bold"
                      style={{ width: "20px" }}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">1</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Beli
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card
              className="h-100 shadow-sm"
              style={{
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Rendang}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />

              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold fs-5 mb-1">Rendang</Card.Title>
                <Card.Text className="text-muted small flex-grow-1 mb-4">
                  Daging sapi dengan aneka rempah{" "}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                    <button
                      className="btn btn-sm p-0 border-0 text-muted fw-bold"
                      style={{ width: "20px" }}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">1</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Beli
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card
              className="h-100 shadow-sm"
              style={{
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Citarasa}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />

              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold fs-5 mb-1">Citarasa</Card.Title>
                <Card.Text className="text-muted small flex-grow-1 mb-4">
                  Makanan dengan citarasa yang ramai{" "}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                    <button
                      className="btn btn-sm p-0 border-0 text-muted fw-bold"
                      style={{ width: "20px" }}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">1</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  className="w-100 py-2 fw-semibold text-white border-0 btn btn-danger"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Beli
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
