// src/components/HeaderMenu.tsx
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./HeaderMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

type HeaderMenuProps = {
  showNotification: boolean;
  onClose?: () => void;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  showNotification,
  onClose,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Add or remove the notification class from the main element
    const mainElement = document.querySelector("main");
    if (mainElement) {
      if (showNotification) {
        mainElement.classList.add("has-notification");
      } else {
        mainElement.classList.remove("has-notification");
      }
    }
  }, [showNotification]);

  const handleSectionClick = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();

    // If already on home page, just scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page with the hash
      navigate(`/#${sectionId}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header-menu">
        <div className="logo">LOGO</div>
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Sailing Charters
              </Link>
            </li>
            <li>
              <a
                href="#internship"
                onClick={(e) => {
                  handleSectionClick("internship", e);
                  setMenuOpen(false);
                }}
              >
                Internship
              </a>
            </li>
            <li>
              <a
                href="#course-section"
                onClick={(e) => {
                  handleSectionClick("course-section", e);
                  setMenuOpen(false);
                }}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#stcw-section"
                onClick={(e) => {
                  handleSectionClick("stcw-section", e);
                  setMenuOpen(false);
                }}
              >
                STCW
              </a>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <a
                href="#gallery-section"
                onClick={(e) => {
                  handleSectionClick("gallery-section", e);
                  setMenuOpen(false);
                }}
              >
                Gallery
              </a>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {showNotification && (
        <div className="notification-banner">
          <div className="message-container">
            <span className="bell-icon">
              <FontAwesomeIcon icon={faBell} />
            </span>
            <span>Important Announcement: New courses available now!</span>
          </div>
          {onClose && (
            <button
              className="close-button"
              onClick={onClose}
              aria-label="Close notification"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default HeaderMenu;
