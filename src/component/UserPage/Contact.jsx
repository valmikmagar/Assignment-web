import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Contact.css";

export default function Contact() {
  return (
    <div style={{ background: "#f4f4f4", minHeight: "100vh" }}>
      <Navbar />

      {/* Promo Banner */}
      <div className="text-center p-4 bg-black text-white rounded shadow-sm mt-4">
        <h4 className="fw-bold mt-4">🎉 Get 15% Off on Your First Order!</h4>
      </div>

      {/* Contact Heading and Intro */}

      <div className="w-100 h-100 text-center p-5 rounded shadow-sm"
        style={{ backgroundColor: "#eca7d8", minHeight: "250px" }}>
        <h1 className="fw-bold mb-3"style={{marginTop: "40px"}}>Contact Us</h1>
        <p className="text-muted fs-5">
          Have a question about your order, sizing, shipping, or just want to say hello? <br />
          Our team at <strong>MyShop</strong> is always happy to hear from you.
        </p>
      </div>





      <div className="container my-5">
        <div className="row">
          {/* Left Column: Contact Form */}
          <div className="col-md-6 mb-4">
            <div className="p-4 rounded shadow-sm" style={{ backgroundColor: "#fce4ec", margin: "10px" }}>
              <h3 className="fw-bold mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-control" placeholder="you@example.com" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Comment *</label>
                  <textarea className="form-control" rows="4" placeholder="Your message..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-3 w-100">
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="col-md-6 mb-5">
            <div className="p-4 rounded shadow-sm" style={{ height: "84vh", backgroundColor: "#fce4ec", margin: "10px" }}>
              <h3 className="fw-bold mb-4">Contact Info</h3>
              <p><strong>Email</strong><br />contact@info.com</p>
              <p><strong>Phone</strong><br />929-242-6868</p>
              <p><strong>Address</strong><br />123 , Karve Nagar, Pune 411052</p>
              <p><strong>Follow Us</strong><br /><br/>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black me-3">
                    <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black me-3">
                    <i className="bi bi-twitter-x fs-5"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black">
                    <i className="bi bi-instagram fs-5"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-100 text-center p-5"
          style={{ backgroundColor: "#f1f8e9" }} // light green background 
          >
          <div className="container">
            <h2 className="fw-bold mb-3">Explore Our Support Topics</h2>
            <p className="text-muted fs-5">
              From returns and shipping to sizing and payments, we’ve got answers to all your most common questions.
            </p>
        </div>

      <div className="container my-5">
        <div className="row gy-4">

          {/* Returns & Exchanges */}
          <div className="col-md-4">
            <div className="bg-white p-3 h-100 shadow-sm rounded">
              <h5 className="fw-bold mt-2">Returns & Exchanges</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Returns & Exchanges</a></li>
                <li><a href="#" className="text-decoration-none">How to Start a Return</a></li>
                <li><a href="#" className="text-decoration-none">Check Return Status</a></li>
              </ul>
            </div>
          </div>

          {/* Ordering & Payment */}
          <div className="col-md-4">
            <div className="bg-white p-3 h-100 shadow-sm rounded">
              <h5 className="fw-bold mt-2">Ordering & Payment</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Modify or Cancel an Order</a></li>
                <li><a href="#" className="text-decoration-none">Pre-order Items</a></li>
                <li><a href="#" className="text-decoration-none">Payment Methods</a></li>
              </ul>
            </div>
          </div>

          {/* Shipping & Delivery */}
          <div className="col-md-4">
            <div className="bg-white p-3 h-100 shadow-sm rounded">
              <h5 className="fw-bold mt-2">Shipping & Delivery</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Shipping Options & Costs</a></li>
                <li><a href="#" className="text-decoration-none">Estimated Delivery Times</a></li>
                <li><a href="#" className="text-decoration-none">Track Your Order</a></li>
              </ul>
            </div>
          </div>

          {/* Product Information */}
          <div className="col-md-4">
            <div className="bg-white p-3 h-100 shadow-sm rounded">
              <h5 className="fw-bold mt-2">Product Information</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Materials & Fabrics</a></li>
                <li><a href="#" className="text-decoration-none">Care Instructions</a></li>
                <li><a href="#" className="text-decoration-none">Availability & Restocks</a></li>
              </ul>
            </div>
          </div>

          {/* Account & Privacy */}
          <div className="col-md-4">
            <div className="bg-white p-3 h-100 shadow-sm rounded">
              <h5 className="fw-bold mt-2">Account & Privacy</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Create or Manage Your Account</a></li>
                <li><a href="#" className="text-decoration-none">Password Reset Help</a></li>
                <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Sizing & Fit */}
          <div className="col-md-4">
            <div className="bg-white p-3 h-100 shadow-sm rounded">
              <h5 className="fw-bold mt-2">Sizing & Fit</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Size Guide</a></li>
                <li><a href="#" className="text-decoration-none">Fit Tips & Recommendations</a></li>
                <li><a href="#" className="text-decoration-none">Product Measurements</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Google Map */}
      <div className="container mt-5 mb-5 bg-white" style={{ marginTop: '100px' }}>
        <div className="row">
          <div className="col-12">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30242.397530803317!2d73.8567435!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06dcbe914cd%3A0x841fc0bfc34a49e9!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718720888888!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="border rounded shadow-sm"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>



      </div>
      

      <Footer />
    </div>
  );
}
