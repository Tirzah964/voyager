import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./HomeScreen.css";

// Import assets
import backgroundVideo from "../../assets/samplevid.mp4";
import kitten from "../../assets/kitten.jpg";
import killer_whale from "../../assets/killer_whale.jpg";
import logo from "../../assets/logo.jpg";
import logoLarge from "../../assets/Sailing_Logo_L.jpg";
// Import static text
import testimonials from "../../static_text/testimonials";
import courseDetails from "../../static_text/courseDetails";
import internships from "../../static_text/internships";
import stcwBlocks from "../../static_text/stcw";

const galleryImages = Array.from({ length: 30 }, (_, i) => {
  try {
    return require(`../../assets/gallery/example${i + 1}.jpg`);
  } catch (e) {
    // Fallback in case an image doesn't exist
    console.warn(`Image example${i + 1}.jpg not found`);
    return null;
  }
}).filter(Boolean); // Remove any null values

const HomeScreen: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // State for gallery pagination
  const [currentGalleryPage, setCurrentGalleryPage] = useState(0);

  // Group images into pages of 6 (2x3 grid)
  const galleryPages = [];
  for (let i = 0; i < galleryImages.length; i += 6) {
    galleryPages.push(galleryImages.slice(i, i + 6));
  }

  const totalPages = galleryPages.length;

  const handleNextGallery = () => {
    setCurrentGalleryPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevGallery = () => {
    setCurrentGalleryPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // State for course dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  // Function to open dialog
  const openCourseDialog = (index: number) => {
    setSelectedCourse(index);
    setIsDialogOpen(true);
  };

  // Function to close dialog
  const closeCourseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCourse(null);
  };

  // Add this state for testimonials pagination
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);

  // Group testimonials into pages of 4
  const testimonialPages = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    testimonialPages.push(testimonials.slice(i, i + 4));
  }

  const totalTestimonialPages = testimonialPages.length;

  const handleNextTestimonial = () => {
    setCurrentTestimonialPage((prev) => (prev + 1) % totalTestimonialPages);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialPage(
      (prev) => (prev - 1 + totalTestimonialPages) % totalTestimonialPages
    );
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* Welcome Screen Container */}
      <div className="home-screen-container">
        {/* Video */}
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <div className="overlay-div1">Welcome to</div>
          <div className="overlay-div2">Sailing Voyager</div>
          <div className="overlay-div3">Your journey starts here</div>
          <Link to="/contact" className="contact-button">
            Start your voyage
          </Link>
        </div>
      </div>

      {/* Internship Program Section */}
      <div className="internship-container">
        <div id="internship" className="internship-header">
          <p style={{ paddingBottom: "1rem" }}>Internship Program</p>
          <h1></h1>
        </div>

        {internships.map((section, index) => (
          <section className="content-section" key={index}>
            <div className={`section-content image-${section.imagePosition}`}>
              <div className="text-content">
                <h2>{section.title}</h2>
                <div className="feature-list">
                  {section.description.map((item, itemIndex) => (
                    <p key={itemIndex}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="image-container">
                <img src={kitten} alt={section.title} />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="section">
        <div className="section-content">

          <div className="section-header">
            <p className="section-subtitle">WHY CHOOSE US</p>
            <h2 className="section-title">Sailing Voyager Is More Than Just A Superyacht Training Academy</h2>
          </div>

          <div className="content-row">
            <div className="content-column">
              <div>
                <p className="body-header text-center">Beyond Training: A BOATique Approach</p>
                <p className="text-center">
                  Pull North is more than a Superyacht Training Academy; it's a
                  launchpad for ambition and growth. We offer visa assistance,
                  expert advice, and a supportive community of seasoned
                  professionals dedicated to your success. From landing your first
                  job to building a long-term career, we help you cultivate the
                  skills and mindset needed to thrive in the industry.
                </p>
              </div>
            </div>

            <div className="content-column">
              <div>
                <p className="body-header text-center">Beyond Training: A BOATique Approach</p>
                <p className="text-center">
                  Pull North is more than a Superyacht Training Academy; it's a
                  launchpad for ambition and growth. We offer visa assistance,
                  expert advice, and a supportive community of seasoned
                  professionals dedicated to your success. From landing your first
                  job to building a long-term career, we help you cultivate the
                  skills and mindset needed to thrive in the industry.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div id="course-section" className="section bg-secondary-color">
        <div className="section-content">
          <div className="section-header">
            <p className="section-subtitle">WHAT KIND OF YACHTIE ARE YOU</p>
            <h2 className="section-title">Superyacht Training Courses</h2>
          </div>


          <div className="content-row">
            {courseDetails.map((course, index) => (
              <div
                className="card"
                key={index}
                onClick={() => openCourseDialog(index)}
              >
                <img src={killer_whale} alt={`${course.title}`} />
                <h3>{course.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Dialog */}
      {isDialogOpen && selectedCourse !== null && (
        <div className="dialog-overlay" onClick={closeCourseDialog}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <button className="dialog-close" onClick={closeCourseDialog}>
              ×
            </button>
            <h2>{courseDetails[selectedCourse].title}</h2>
            <p className="dialog-description">
              {courseDetails[selectedCourse].description}
            </p>
            <div className="dialog-details">
              <div className="dialog-detail-item">
                <strong>Duration:</strong>{" "}
                {courseDetails[selectedCourse].duration}
              </div>
              <div className="dialog-detail-item">
                <strong>Price:</strong> {courseDetails[selectedCourse].price}
              </div>
              <div className="dialog-detail-item">
                <strong>Requirements:</strong>{" "}
                {courseDetails[selectedCourse].requirements}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <div id="stcw-section" className="section bg-tertiary-color">
        <div className="section-content">

          <div className="section-header">
            <p className="section-subtitle">STCW</p>
            <h2 className="section-title">Get STCW Certified and Ready</h2>
          </div>

          <div className="content-row">
            <div className="card">
              <img className="h-100" src={kitten} alt="stcw" />
            </div>

            <div className="content-column">
              {stcwBlocks.map((block, index) => (
                <div key={index}>
                  <p className="body-header">{block.title}</p>
                  <p>{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="section">
        <div className="section-content">

          <div className="section-header">
            <div className="logo">
              <img src={logoLarge} alt="Sailing Voyager Logo" />
            </div>

            <p className="text-center">
              All the training courses booked through Pull North Yachting are
              accredited with the correct accreditations & we pride ourselves in the
              quality of the facilities we are affiliated with. Please don't
              hesitate to contact us if you need any further information.
            </p>
          </div>

          <div className="content-row">
            <div className="logo-partner">
              <img src={logo} alt="Partner Logo 1" />
            </div>
            <div className="logo-partner">
              <img src={logo} alt="Partner Logo 2" />
            </div>
            <div className="logo-partner">
              <img src={logo} alt="Partner Logo 3" />
            </div>
          </div>
        </div>

      </div>

      <div id="gallery-section" className="section bg-tertiary-color">

        <div className="section-header">
          <p className="section-subtitle">Gallery</p>
          <h2 className="section-title">Unforgettable moments</h2>
        </div>

        <div className="content-column">
          <div className="gallery-container">

            <div className="content-grid">
              {galleryPages[currentGalleryPage].map((image, index) => (
                <div className="card" key={index}>
                  <img className="lock-aspect-ratio" src={image} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </div>

          </div>

          <div className="content-row">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`pagination-dot ${index === currentGalleryPage ? "active" : ""
                  }`}
                onClick={() => setCurrentGalleryPage(index)}
              />
            ))}
          </div>
        </div>


      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonials-header">
          <p>Testimonials</p>
          <h2>What Our Students Say</h2>
        </div>

        <div className="testimonials-container">
          {currentTestimonialPage > 0 && (
            <button
              className="testimonial-nav-button prev"
              onClick={handlePrevTestimonial}
            >
              &larr;
            </button>
          )}

          <div className="testimonials-row">
            {testimonialPages[currentTestimonialPage].map(
              (testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              )
            )}
          </div>

          {currentTestimonialPage < totalTestimonialPages - 1 && (
            <button
              className="testimonial-nav-button next"
              onClick={handleNextTestimonial}
            >
              &rarr;
            </button>
          )}
        </div>

        <div className="testimonial-pagination">
          {Array.from({ length: totalTestimonialPages }).map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${index === currentTestimonialPage ? "active" : ""
                }`}
              onClick={() => setCurrentTestimonialPage(index)}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="section">

      <div className="section-header">
          <p className="section-subtitle">Contact Us</p>
          <h2 className="section-title">We Want To Hear From You</h2>
        </div>


        <div className="contact-container">
          <div className="contact-info">
            <h3>Ready to start your sailing journey?</h3>
            <p>
              Our team is here to answer all your questions about our courses,
              internships, and how to begin your career in yachting.
            </p>
            <button className="contact-us-button" onClick={handleContactClick}>
              Get In Touch
            </button>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53487.42621493518!2d22.09012543976928!3d-34.17538326099499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd61e5e8c0b9385%3A0x779f4b23e7d69df3!2sMossel%20Bay!5e0!3m2!1sen!2sza!4v1689324567890!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mossel Bay Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="section bg-secondary-color">
        <div className="section-content">

          <div className="section-header">
            <div className="logo">
              <img src={logoLarge} alt="Sailing Voyager Logo" />
            </div>
          </div>


          <div className="content-column text-center">
            <div>
              <p className="body-header">Location</p>
              <p>
                43 Riet Road
                <br />
                Loerie Park
                <br />
                Cape Town
                <br />
                6590
              </p>
            </div>

            <div>
              <p className="body-header">Opening Hours</p>
              <p>
                Monday to Friday
                <br />
                09:00 - 17:00
              </p>
            </div>

            <div>
              <p className="body-header">Contact Info</p>
              <p>
                +24 95 689 6578
                <br />
                Info@jousite.co.za
              </p>
            </div>


            <div className="content-row">
              <a
                href="https://facebook.com/your-facebook-page"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://wa.me/2495689657"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <hr></hr>
            <p>Made With ❤ By Katkos.studio <br></br>© 2025 All Rights Reserved.</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomeScreen;
