import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../assets/css/style.css';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const prodRef = useRef(null);
  const slRef = useRef(null);
   const catRef = useRef(null);
  const [openSection, setOpenSection] = useState(null); // track which is open

  const toggleCollapse = (targetRef, sectionName) => {
    const bs = window.bootstrap;
    const refs = { product: prodRef, slider: slRef,category:catRef  };

    Object.entries(refs).forEach(([name, ref]) => {
      if (!ref.current) return;
      const inst = bs.Collapse.getOrCreateInstance(ref.current, { toggle: false });
      if (name === sectionName) {
        ref.current.classList.contains("show") ? inst.hide() : inst.show();
        setOpenSection(prev => (prev === name ? null : name));
      } else {
        if (ref.current.classList.contains("show")) inst.hide();
      }
    });
  };

  const getIcon = (sectionName) => (
    openSection === sectionName ? "▼" : "▶"
  );

  return (
    <>
      {/* 🟥 Top Navbar */}
      <nav
        className="sb-topnav navbar navbar-expand navbar-dark bg-danger position-fixed w-100"
        style={{ height: '56px', zIndex: 2000, top: 0, left: 0 }}
      >
        {isOpen && (
          <img src="https://th.bing.com/th/id/OIP.fdYtl3nkidtHpeRJ5ZjOQgHaC2?w=310"
            alt="Brand"
            style={{ height: "50px", width: "200px", marginLeft: '10px' }} />
        )}
        <div
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: '8px',
            left: isOpen ? '258px' : '18px',
            zIndex: 2001,
            cursor: 'pointer',
            color: 'white',
            fontSize: '24px',
          }}
        >&#9776;</div>
        <ul className="navbar-nav ms-auto me-3">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <i className="fas fa-user fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">Settings</a>
              <a className="dropdown-item" href="#">Activity Log</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </nav>

      {/* 🟩 Sidebar */}
      <div
        className="bg-dark text-white position-fixed top-0 h-100"
        style={{
          left: isOpen ? '0' : '-250px',
          width: '250px',
          transition: 'left 0.3s ease',
          zIndex: 1000,
        }}
      >
        {isOpen && (
          <div className="d-flex align-items-center justify-content-between px-3 border-bottom" style={{ height: '56px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png"
              alt="Icon"
              style={{ height: '25px', width: '25px' }} />
            <img src="https://th.bing.com/th/id/OIP.fdYtl3nkidtHpeRJ5ZjOQgHaC2?w=310"
              alt="Header Image"
              style={{ height: '40px', width: '40px' }} />
          </div>
        )}

        <div className="p-3 pt-4">
          {/* Product Section */}
          <div className="mb-2 d-flex justify-content-between align-items-center"
               style={{ cursor: "pointer",textDecoration: 'none', fontFamily: "Serif", fontSize: "1rem"}}
               onClick={() => toggleCollapse(prodRef, 'product')}
          >
            <span className="fw-bold">Product</span>
            <span>{getIcon('product')}</span>
          </div>
          <div className="collapse mt-2" ref={prodRef}>
            <div className="card card-body bg-secondary">
              <ul className="list-unstyled mb-0">
                <li>
                 <NavLink to="add-product" className={({ isActive }) =>
    (isActive ? "text-info fw-bold d-block" : "text-white d-block")
  }
  style={{  textDecoration: 'none', fontFamily: "inheritit", fontSize: "1rem" }}
>
  Add Product
</NavLink>
                </li>
                <li>
                  <NavLink to="product-list"
                           className={({ isActive }) => isActive ? "text-info fw-bold" : "text-white d-block"}  style={{  textDecoration: 'none', fontFamily: "inherit", fontSize: "1rem" }}>
                    Product List
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

       
      <div className="mb-2 d-flex justify-content-between align-items-center"
               style={{ cursor: "pointer",textDecoration: 'none', fontFamily: "Serif", fontSize: "1rem"}}
               onClick={() => toggleCollapse(catRef, 'category')}
          >
            <span className="fw-bold">Category</span>
            <span>{getIcon('category')}</span>
          </div>
            <div className="collapse mt-2" ref={catRef}>
            <div className="card card-body bg-secondary">
              <ul className="list-unstyled mb-0">
                <li>
                 <NavLink to="add-category" className={({ isActive }) =>
    (isActive ? "text-info fw-bold d-block" : "text-white d-block")
  }
  style={{  textDecoration: 'none', fontFamily: "inheritit", fontSize: "1rem" }}
>
  Add Category
</NavLink>
                </li>
                <li>
                  <NavLink to="add-subCategory"
                           className={({ isActive }) => isActive ? "text-info fw-bold" : "text-white d-block"}  style={{  textDecoration: 'none', fontFamily: "inherit", fontSize: "1rem" }}>
                    Add SubCategory
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>





          {/* Slider Section */}
          <div className="mt-3 mb-2 d-flex justify-content-between align-items-center"
               style={{ cursor: "pointer",textDecoration: 'none', fontFamily: "inherit", fontSize: "1.1rem" }} 
               onClick={() => toggleCollapse(slRef, 'slider')}
          >
            <span className="fw-bold">Slider</span>
            <span>{getIcon('slider')}</span>
          </div>
          <div className="collapse mt-2" ref={slRef}>
            <div className="card card-body bg-secondary">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink to="add-slider"
                           className={({ isActive }) => isActive ? "text-info fw-bold d-block" : "text-white d-block"} style={{  textDecoration: 'none', fontFamily: "inherit", fontSize: "1rem" }}>
                    Add Slider
                  </NavLink>
                </li>
                <li>
                  <NavLink to="slider-list"
                           className={({ isActive }) => isActive ? "text-danger fw-bold d-block" : "text-white d-block"}  style={{  textDecoration: 'none', fontFamily: "Serif", fontSize: "1rem" }}>
                    Slider List
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
