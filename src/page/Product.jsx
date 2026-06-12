import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "remixicon/fonts/remixicon.css";
import Card from "react-bootstrap/Card";
import Ayam from "../assets/Ayam.png";
import Container from "react-bootstrap/Container";
import Sup from "../assets/Sup.png";
import satay from "../assets/satay.png";
import Citarasa from "../assets/Citarasa.png";
import Kimbab from "../assets/Kimbab.png";
import Rendang from "../assets/Rendang.png";
import Swal from "sweetalert2";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Product() {
  const HandleBeli = () => {
    Swal.fire({
      title: "Berhasil!",
      text: "Pesanan berhasil ditambahkan",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const [jumlah, setJumlah] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [kategori, setKategori] = useState(" Kategori");

  const kategoriConfig = {
    " Kategori": { icon: "ri-apps-2-line", color: "#888", bg: "#f1f5f9" },
    Makanan: { icon: "ri-restaurant-2-line", color: "#BA7517", bg: "#FAEEDA" },
    Minuman: { icon: "ri-goblet-line", color: "#185FA5", bg: "#E6F1FB" },
    Dessert: { icon: "ri-cake-3-line", color: "#993556", bg: "#FBEAF0" },
  };
  return (
    <div id="link">
      <Row className="justify-content-center align-items-center mt-4">
        <Col md={8}>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            style={{
              height: "45px",
              fontSize: "20px",
            }}
            placeholder="🔍 Cari nama makanan..."
          />
        </Col>
        <Col md="auto">
          <NavDropdown
            title={
              <span className="d-flex align-items-center gap-2">
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 7,
                    background: kategoriConfig[kategori]?.bg,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className={kategoriConfig[kategori]?.icon}
                    style={{
                      color: kategoriConfig[kategori]?.color,
                      fontSize: 17,
                    }}
                  ></i>
                </span>
                <span style={{ fontSize: 15 }}>{kategori}</span>
              </span>
            }
            id="basic-nav-dropdown"
            className="fw-semibold"
            style={{
              border: "1.5px solid #e2e8f0",
              borderRadius: 10,
              background: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
              padding: "4px 10px",
            }}
          >
            <NavDropdown.Item
              onClick={() => setKategori("Makanan")}
              className="rounded d-flex align-items-center gap-2 py-2"
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "#FAEEDA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="ri-restaurant-2-line"
                  style={{ color: "#BA7517" }}
                ></i>
              </span>
              Makanan
            </NavDropdown.Item>

            <NavDropdown.Item
              onClick={() => setKategori("Minuman")}
              className="rounded d-flex align-items-center gap-2 py-2"
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "#E6F1FB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="ri-goblet-line" style={{ color: "#185FA5" }}></i>
              </span>
              Minuman
            </NavDropdown.Item>

            <NavDropdown.Item
              onClick={() => setKategori("Dessert")}
              className="rounded d-flex align-items-center gap-2 py-2"
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "#FBEAF0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="ri-cake-3-line" style={{ color: "#993556" }}></i>
              </span>
              Dessert
            </NavDropdown.Item>
          </NavDropdown>
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
                      onClick={() => jumlah > 1 && setJumlah(jumlah - 1)}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">{jumlah}</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                      onClick={() => setJumlah(jumlah + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  onClick={HandleBeli}
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
                      onClick={() => jumlah > 1 && setJumlah(jumlah - 1)}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">{jumlah}</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                      onClick={() => setJumlah(jumlah + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  onClick={HandleBeli}
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
                      onClick={() => jumlah > 1 && setJumlah(jumlah - 1)}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">{jumlah}</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                      onClick={() => setJumlah(jumlah + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  onClick={HandleBeli}
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
                      onClick={() => jumlah > 1 && setJumlah(jumlah - 1)}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">{jumlah}</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                      onClick={() => setJumlah(jumlah + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  onClick={HandleBeli}
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
                      onClick={() => jumlah > 1 && setJumlah(jumlah - 1)}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">{jumlah}</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                      onClick={() => setJumlah(jumlah + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  onClick={HandleBeli}
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
                      onClick={() => jumlah > 1 && setJumlah(jumlah - 1)}
                    >
                      −
                    </button>
                    <span className="mx-3 fw-semibold small">{jumlah}</span>
                    <button
                      className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500"
                      style={{ width: "20px" }}
                      onClick={() => setJumlah(jumlah + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="fw-bold text-secondary fs-6">Rp 5.000</div>
                </div>
                <button
                  onClick={HandleBeli}
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
      <nav className="d-flex justify-content-center mt-4 btn-danger">
        <ul className="pagination ">
          <li className={`page-item ${currentPage === 1 ? "active" : " "}`}>
            <button
              className={`page-link ${
                currentPage === 1 ? "bg-danger text-white border-danger" : ""
              }`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
          </li>

          <li className={`page-item ${currentPage === 2 ? "active" : ""}`}>
            <button
              className={`page-link ${
                currentPage === 2 ? "bg-danger text-white border-danger" : ""
              }`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
