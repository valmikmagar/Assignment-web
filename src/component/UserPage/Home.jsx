import Card from "./card";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home(){
    return(
        <>
        <Navbar/>
      <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
>
  {/* Indicators */}
  <div className="carousel-indicators">
    <button type="button"data-bs-target="#carouselExampleIndicators"data-bs-slide-to="0"className="active"aria-current="true" aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  {/* Slides */}
  <div className="carousel-inner">
    <div className="carousel-item active position-relative">
      <img
        src="https://th.bing.com/th/id/OIP.rKQIJWgBlR-MZkisqhuXpwHaC2?w=984&h=378&rs=1&pid=ImgDetMain"
        className="d-block w-100"
        alt="Slide 1"
        style={{ height: "450px", objectFit: "cover" }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Step into Style</h5>
        <p>Trendy footwear for all seasons.</p>
        <a href="#" className="btn btn-primary btn-sm">
          Shop Now
        </a>
      </div>
    </div>

    <div className="carousel-item position-relative">
      <img
        src="https://www.evanik.com/wp-content/uploads/2022/03/blog-2-1.png"
        className="d-block w-100"
        alt="Slide 2"
        style={{ height: "450px", objectFit: "cover" }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Comfort Meets Style</h5>
        <p>Experience walking like never before.</p>
        <a href="#" className="btn btn-primary btn-sm">
          Shop Now
        </a>
      </div>
    </div>

    <div className="carousel-item position-relative">
      <img
        src="https://www.banarasee.in/cdn/shop/files/Banarasee-Website-banner_1400x.jpg?v=1705664971"
        className="d-block w-100"
        alt="Slide 3"
        style={{ height: "450px", objectFit: "cover" }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>New Arrivals</h5>
        <p>Fresh stock updated weekly!</p>
        <a href="#" className="btn btn-primary btn-sm">
          Shop Now
        </a>
      </div>
    </div>
  </div>

  {/* Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <Card/>
  <Footer/>
        </>
    );
}