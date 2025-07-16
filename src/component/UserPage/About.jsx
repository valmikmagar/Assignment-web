import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./About.css"; // Make sure this CSS file is created and linked


export default function About() {

  function handleSubmit(event) {
  event.preventDefault();
  alert("Subscribed Successfully");
  event.target.reset();
}

  return (
    <>
      <Navbar />
      
      <div className="text-center p-4 bg-black text-white rounded shadow-sm mt-4">
        <h4 className="fw-bold mt-4">🎉 Get 15% Off on Your First Order!</h4>
      </div>

      {/* Hero Section */}
        <div
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "50px 20px",
          }}
        >
        <div className="container py-5">
          <div className="text-center m-5">
            <h2 className="fw-bold">Style That Moves With You</h2>
            <br />
            <p className="text-light">
              We are a leading eCommerce platform bringing you the best fashion,
              footwear, and accessories at unbeatable prices.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Title */}
      <div className="text-center my-5">
        <h2 className="fw-bold display-5">What Makes Velora Stand Out</h2>
        <p className="lead text-secondary">
          Style, Comfort & More – Here’s Why You’ll Love Us
        </p>
      </div>

      {/* Feature Cards */}
      <div className="container my-5">
        <div className="row text-center g-4">
          {/* Feature 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 rounded shadow-sm bg-white h-100 border feature-card">
              <div
                className="feature-icon"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s')",
                }}
              ></div>
              <h5 className="fw-bold">Premium Quality</h5>
              <p className="text-muted small">
                Crafted with care using soft, durable fabrics designed to last and feel amazing.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 rounded shadow-sm bg-white h-100 border feature-card">
              <div
                className="feature-icon"
                style={{
                  backgroundImage:
                    "url('https://thumbs.dreamstime.com/b/white-tshirt-mockup-casual-fashion-clothing-styled-photo-gray-pants-shirt-leather-diary-pen-boho-necklace-wood-background-173352268.jpg')",
                }}
              ></div>
              <h5 className="fw-bold">Timeless Style</h5>
              <p className="text-muted small">
                Clean silhouettes and versatile pieces you can wear season after season.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 rounded shadow-sm bg-white h-100 border feature-card">
              <div
                className="feature-icon"
                style={{
                  backgroundImage:
                    "url('https://media.istockphoto.com/id/1394033419/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=RlaY4uZLg2kqvmDBBkk_dkAUfjUdJLi79umilrWcKl8=')",
                }}
              ></div>
              <h5 className="fw-bold">In-House Design</h5>
              <p className="text-muted small">
                Every detail is imagined by our in-house design team to bring you standout staples.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 rounded shadow-sm bg-white h-100 border feature-card">
              <div
                className="feature-icon"
                style={{
                  backgroundImage:
                    "url('https://www.shutterstock.com/image-photo/red-heart-shapes-shopping-cart-260nw-1621534111.jpg')",
                }}
              ></div>
              <h5 className="fw-bold">For Every Body</h5>
              <p className="text-muted small">
                Inclusive fits and sizes designed to flatter all shapes, ages, and styles.
              </p>
            </div>
          </div>
        </div>
      </div>

    <div className="container-fluid p-0 mb-4">
    <div className="row g-0 align-items-stretch" style={{ minHeight: "100vh", margin: 0 }}>
  
    {/* Left Column - Text */}

      <div className="col-md-6 bg-dark mb-4 text-white  p-5 d-flex flex-column justify-content-center m-0">
        <h2 className="fw-bold mb-4">Thoughtfully Designed for All</h2>
        <p className="lead">
          Our range covers Men, Women, and Kids, with each piece carefully crafted to combine form, function, and feeling.
          From the perfect polo to the softest loungewear and statement outerwear, everything at Velora is designed with
          real life in mind — easy to wear, easy to love.
        </p>
        <p className="text-light">
          We also believe in the power of details. That’s why we obsess over fit, fabric, and finish — so you don’t have to.
        </p>
      </div>

      {/* Right Column - Image */}
        <div className="col-md-6 bg-white d-flex mb-4 align-items-center justify-content-center m-0 p-0">
          <img
            src="https://static.wixstatic.com/media/6b8f20_b32ae61564d0462e93125d03cf975a04~mv2.png/v1/fill/w_979,h_979,al_c/6b8f20_b32ae61564d0462e93125d03cf975a04~mv2.png"
            alt="Fashion Lifestyle"
            className="img-fluid shadow-sm"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>

  <div className="m-5 text-center">
    <h2 className="text-uppercase text-black text-bold fw-semibold">Our Purpose, Your Style</h2><br/> 
    <p className="text-light fst-italic text-black mb-0">
      At Velora, everything we create starts with you — your lifestyle, your confidence, and your need for fashion that truly fits.      </p>
  </div>
  
  
  <div className="container py-5">
  <div className="row">
    {/* Mission Card */}
    <div className="col-12 col-md-6 mb-4">
      <div className="p-4 bg-light rounded shadow-sm h-100 mission-card border text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy23PNTIdoSydmtgb_nvPPIDYq4rK24O_ntQ&s"
          alt="Our Mission"
          className="img-fluid mb-3 rounded"
          style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
        />
        <h4 className="fw-bold mb-3">Our Mission</h4>
        <p className="mb-0">
          To create timeless, high-quality fashion that blends comfort with confidence...
        </p>
      </div>
    </div>

    {/* Vision Card */}
      <div className="col-12 col-md-6 mb-4">
          <div className="p-4 bg-light rounded shadow-sm h-100 mission-card border text-center">
            <img
              src="https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg"
              alt="Our Vision"
              className="img-fluid mb-3 rounded"
              style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
            />
            <h4 className="fw-bold mb-3">Our Vision</h4>
            <p className="mb-0">
              To become a trusted, global fashion destination that redefines modern essentials...
            </p>
          </div>
        </div>
      </div>
    </div>

  <div className="container-fluid text-center p-4 my-4"
      style={{ backgroundColor: "#ffc0cb" }}>
      <div className="shadow-sm text-dark fw-bold mb-4">
        <h2>Get 10% Off on Your First Order</h2>
        <p className="text-muted">
          Plus exclusive access to product drops, style tips, and insider deals.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control w-auto"
          required
        />
        <button type="submit" className="btn btn-dark">
          SUBSCRIBE
        </button>
      </form>

       <div className="row mt-4">
        <div className="col-6 col-md-3 mb-3">
          <img
            src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/footer-img-01.jpg"
            alt="Promo 1"
            className="promo-img"
          />
        </div>
        <div className="col-6 col-md-3 mb-3">
          <img
            src="https://img.freepik.com/premium-photo/beautiful-young-blonde-model-is-posing-straw-hat-green-transparent-blouse_165383-32.jpg?w=1380"
            alt="Promo 2"
            className="promo-img"
          />
        </div>
        <div className="col-6 col-md-3 mb-3">
          <img
            src="https://img.freepik.com/free-photo/low-angle-view-beautiful-young-woman-posing-front-wall_23-2148187422.jpg"
            alt="Promo 3"
            className="promo-img"
          />
        </div>
        <div className="col-6 col-md-3 mb-3">
          <img
            src="https://styledumonde.com/wp-content/uploads/2023/05/CPHFW-SS23-day-3-by-STYLEDUMONDE-Street-Style-Fashion-Photography0K3A6657-600x900.jpg"
            alt="Promo 4"
            className="promo-img"
          />
        </div>
      </div>


    </div>

      <Footer />
    </>
  );
}
