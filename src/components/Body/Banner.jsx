import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { HiH1 } from "react-icons/hi2";
const Banner = () => {
  const [showHover, setHover] = useState(false)
  const handleMouseEnter = () => {
    console.log("Mouse Enter");
    setHover(true)};
    const handleMouseLeave = () => { console.log("Mouse Leave"); setHover(false) }
    return (
      <div className="container-fluid mt-5 ">
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col  position-relative">
            <div
              className="card z-1 bg-transparent border-0"
              style={{
                width: "80%",
                maxWidth: "22rem",
                position: "absolute",
                bottom: "35%",
                left: "15%",
              }}
            >
              <div className="card-body">
                <h2
                  className="card-title"
                  style={{
                    fontWeight: "bolder",
                    color: "white",
                    fontSize: "38px",
                  }}
                >
                  We Are Siddiqui's
                </h2>
                <p className="card-text">Online Shopping Solution For You</p>
                <a href="#" className="btn btn-outline-light rounded-0">
                  Purchase Now
                </a>
              </div>
            </div>
            <img
              src="/images/left-banner-image.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-12 d-flex justify-content-center col-lg-6 mt-2 mt-lg-0 ">
            <div className="container text-center">
              <div className="row row-cols-2 justify-content-center g-3 ">
                <div className="col position-relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {showHover && <Modal />}
                  <img
                    src="/images/baner-right-image-01.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <p
                    className="z-1 position-absolute fs-lg-3 fs-md-3 fs-sm-6  fs-5"
                    style={{
                      color: "white",
                      top: "25%",
                      left: "10%",
                      fontStyle: "italic",
                      fontWeight: "bolder",
                    }}
                  >
                    Best Cloth For Women
                  </p>
                </div>
                <div className="col position-relative">
                  <p
                    className="z-1 position-absolute fs-lg-3 fs-md-3 fs-sm-6  fs-5"
                    style={{
                      color: "white",
                      top: "25%",
                      left: "10%",
                      fontStyle: "italic",
                      fontWeight: "bolder",
                    }}
                  >
                    Best Cloth For Men
                  </p>
                  <img
                    src="/images/baner-right-image-02.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col mt-4 position-relative">
                  <p
                    className="z-1 position-absolute fs-lg-3 fs-md-3 fs-sm-6  fs-5"
                    style={{
                      color: "white",
                      top: "25%",
                      left: "10%",
                      fontStyle: "italic",
                      fontWeight: "bolder",
                    }}
                  >
                    Best Cloth For Kids
                  </p>
                  <img
                    src="/images/baner-right-image-03.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col mt-4 position-relative">
                  <p
                    className="z-1 position-absolute fs-lg-3 fs-md-3 fs-sm-6  fs-5"
                    style={{
                      color: "white",
                      top: "25%",
                      left: "10%",
                      fontStyle: "italic",
                      fontWeight: "bolder",
                    }}
                  >
                    Best trend Accessories
                  </p>
                  <img
                    src="/images/baner-right-image-04.jpg"
                    className="img-fluid"
                    alt=""
                  />
            </div>
                </div>
              </div>
          </div>
        </div>
        <hr className="border-bottom mt-5" style={{ border: "dotted" }} />
      </div>
    );
  };
export default Banner;