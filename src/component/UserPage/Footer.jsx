import React from 'react'

export default function FooterContact() {
  return (
    <div>
      {/* Footer */}
        <footer className="bg-dark text-white mt-5 pt-4 pb-3">
        <div className="container text-center text-md-start">
            <div className="row">
            {/* About */}
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold">ShopStore</h5>
                <p>
                We are passionate about building high-quality digital experiences.
                Reach out to us for collaboration, support, or just to say hello!
                </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Quick Links</h5>
                <ul className="list-unstyled">
                <li><a href="/user/home" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/user/about" className="text-white text-decoration-none">About</a></li>
                <li><a href="/user/contact" className="text-white text-decoration-none">Contact</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
                <h5 className="fw-bold">Contact</h5>
                <p><i className="bi bi-envelope-fill me-2"></i> support@shoestore.com</p>
                <p><i className="bi bi-phone-fill me-2"></i> +91 98765 43210</p>
                <div className="mt-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                    <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                    <i className="bi bi-twitter-x fs-5"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className="bi bi-instagram fs-5"></i>
                </a>
                </div>
            </div>
            </div>

            <hr className="text-white" />

            <div className="text-center small">
            © {new Date().getFullYear()} All rights reserved.
            </div>
        </div>
        </footer>

    </div>
  )
}
