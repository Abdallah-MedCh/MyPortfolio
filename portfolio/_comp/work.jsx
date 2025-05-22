"use client"
import { useState } from "react"
import { Row, Col,Button, Modal,Carousel } from "react-bootstrap";
import { X, Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { SiFigma, SiReact,SiVite,SiExpo,SiGooglegemini,SiNextdotjs,SiStrapi,SiClerk   } from "react-icons/si";
import { FaJava, FaAndroid,FaBootstrap,FaStripeS  } from "react-icons/fa";
  
const Projects = [
    {
        title: "CH Voyage",
        images: [
                "/projectIMG/CHV/1.png",
                "/projectIMG/CHV/2.png",
                "/projectIMG/CHV/3.png",
                "/projectIMG/CHV/4.png",
                "/projectIMG/CHV/5.png",
                "/projectIMG/CHV/6.png",
                "/projectIMG/CHV/7.png",
                "/projectIMG/CHV/8.png",
                "/projectIMG/CHV/9.png",
                ],
        link: "",
        },
        {
        title: "Sudoku Helper",
        images: [
                "/projectIMG/SH/1.jpg",
                "/projectIMG/SH/2.jpg",
                "/projectIMG/SH/3.jpg",
                ],
        link: "",
        },
        {
        title: "Fit Food",
        images: [
                "/projectIMG/FF/1.jpg",
                "/projectIMG/FF/2.jpg",
                "/projectIMG/FF/3.jpg",
                "/projectIMG/FF/4.jpg",
                "/projectIMG/FF/5.jpg",
                "/projectIMG/FF/6.jpg",
                
                ],
        link: "",
        },

]
function work({closeModal}) {
      const [show, setShow] = useState(false);

  const [activeModal, setActiveModal] = useState(null)
  const handleClose = () => {
    setActiveModal(null)
    document.body.classList.remove("modal-open")
  }

  const handleShow = () => setShow(true);

    const openModal = (id) => {
    setActiveModal(id)
    document.body.classList.add("modal-open")
  }
  const open =(url)=>{
    window.open(url, "_blank")
  }
  return (
    <section>
        <div className="modal-header">
          <h2 className="modal-title">Projects</h2>
          <button className="close-button" onClick={closeModal}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          

          {/* Project 1 - SH */}
          <div className="project-row">
            <Row className="align-items-center mb-5 project-card">
              <Col md={7}>
                <div className="project-content">
                  <h3>Sudoku Helper</h3>
                  <p>
                    An Android application designed to assist users in solving Sudoku puzzles with ease.
                    Initially, the app featured a custom-built algorithm, a unique and faster approach to solving Sudoku.
                    Unfortunately, this innovative solution was lost, leading to the reimplementation of a reliable backtracking algorithm.
                    Despite this setback, the app remains a strong demonstration of algorithmic thinking, mobile development in Java, and user-focused design.
                  </p>
                  <div className="project-tags mb-3">
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">JAVA
                        <FaJava size={16} />
                    </span>
                    <span className="badge  text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Android
                        <FaAndroid size={16} />
                    </span>
                  </div>
                  <button className="btn btn-outline-light btn-sm mb-3" onClick={() =>open("https://github.com/Abdallah-MedCh/Sudoku-Helper")}>View Project</button>
                </div>
              </Col>
              <Col md={5}>
              
                <div className="project-image-square"     onClick={() => openModal("SH")}>
                    
                  <img src="/projectIMG/SH/4.jpg"     alt="SH img" />
                  <div className="overlay-text">Click to show more</div>
                
                </div>
                <Modal show={activeModal === "SH"} onHide={handleClose} centered size="sm">
        
        <Carousel>
            {Projects[1].images.map((image, index) => (
              <Carousel.Item key={index}>  
                <img src={image} width="100%" height="100%" alt={`Project Image ${index + 1}`} />
                
              </Carousel.Item>
            ))} 
      
    </Carousel>
        
      </Modal>
              </Col>
            </Row>
          </div>

          {/* Project 2 - CHV */}
          <div className="project-row">
            <Row className="align-items-center mb-5 project-card">
              <Col md={5} className="order-md-1 order-2">

                <div className="project-image"  onClick={() => openModal("CHV")}>
                  <img src="/projectIMG/CHV/1.png" alt="Ch Voyage img" />
                  <div className="overlay-text">Click to show more</div>
                </div>
   
      

      <Modal show={activeModal === "CHV"} onHide={handleClose} centered size="xl">
        
        <Carousel>
            {Projects[0].images.map((image, index) => (
              <Carousel.Item key={index}>  
                <img src={image} width="100%" height="100%" alt={`Project Image ${index + 1}`} />
              </Carousel.Item>
            ))} 
      
    </Carousel>
        
      </Modal>
    
              </Col>
              <Col md={7} className="order-md-2 order-1">
                <div className="project-content">
                  <h3>CH Voyage</h3>
                  <p>
                    ChVoyage is a full-stack web application designed for travel agencies to showcase and sell travel packages seamlessly.
                    Built with Next.js and styled using Tailwind CSS, the app offers a modern and responsive user experience.
                    The backend is powered by Strapi, providing a flexible CMS to manage travel content, with Cloudinary handling image storage for optimized media delivery.
                  </p>
                  <p>Users can browse curated travel packages, book flights directly through integration with the Google Flights API, and securely complete purchases in the e-shop using Stripe payment processing. 
                    Authentication and user management are handled smoothly with Clerk, while Resend manages transactional email communications such as booking confirmations and password resets.</p>
                  <p>
                    ChVoyage combines powerful tools to deliver an all-in-one platform for travel agencies to engage customers and streamline bookings effortlessly.
                  </p>

                  <div className="project-tags mb-3">
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Next.js
                        <SiNextdotjs   size={16} />
                    </span> 
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Strapi
                        <SiStrapi size={16} />
                    </span>
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Clerk
                        <SiClerk  size={16} />
                    </span>
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Stripe
                        <FaStripeS   size={16} />
                    </span>
                    
                  </div>
                  <button className="btn btn-outline-light btn-sm mb-3" onClick={() =>open("https://github.com/Abdallah-MedCh/ChVoyage")}>View Project</button>
                </div>
              </Col>
            </Row>
          </div>

          {/* Project 3 - FF */}
          <div className="project-row ">
            <Row className="align-items-center mb-5 project-card">
              <Col md={7}>
                <div className="project-content">
                  <h3>Fit Food</h3>
                  <p>
                    Fit Food is a cross-platform mobile app that generates personalized meal plans based on the user's grocery list and calorie intake. 
                    Built using React Native and Expo, it integrates AI (via Gemini)to interpret user input and generate practical meal suggestions. 
                    This project showcases my ability to creatively apply AI tools and prompt engineering to build practical, user-oriented applications to solve real-world problems.
                  </p>
                  <div className="project-tags mb-3">
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">React Native
                        <SiReact size={16} />
                    </span>
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Expo
                        <SiExpo size={16} />
                    </span>
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Figma
                        <SiFigma size={16} />
                    </span>
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Gemini
                        <SiGooglegemini size={16} />
                    </span>
                  </div>
                  <button className="btn btn-outline-light btn-sm mb-3" onClick={() =>open("https://github.com/Abdallah-MedCh/FitFood")}>View Project</button>
                </div>
              </Col>
              <Col md={5}>
                <div className="project-image-square" onClick={() => openModal("FF")}>
                  <img src="/projectIMG/FF/7.jpg" alt="FitFood img" />
                  <div className="overlay-text">Click to show more</div>
                </div>
                <Modal show={activeModal === "FF"} onHide={handleClose} centered size="sm">
        
        <Carousel>
            {Projects[2].images.map((image, index) => (
              <Carousel.Item key={index}>  
                <img src={image} width="100%" height="100%" alt={`Project Image ${index + 1}`} />
                
              </Carousel.Item>
            ))} 
      
    </Carousel>
        
      </Modal>
              </Col>
            </Row>
          </div>

          {/* Project 4 - PF */}
          <div className="project-row">
            <Row className="align-items-center mb-5 project-card">
              <Col md={5} className="order-md-1 order-2">
                <div className="project-image-square" >
                  <img src="/projectIMG/PF.jpg" alt="Portfolio img" />
                  <div className="overlay-text">You are already here</div>
                </div>
              </Col>
              <Col md={7} className="order-md-2 order-1">
                <div className="project-content">
                  <h3>My Portfolio</h3>
                  <p>
                    A personal portfolio website built with React, Vite, and Bootstrap CSS to showcase my projects, skills, and passion for development. 
                    It's fast, responsive, and built with performance in mind, serving as a central hub for everything I create and learn.
                  </p>
                  <div className="project-tags mb-3">
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">React
                        <SiReact size={16} />
                    </span>
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Vite
                        <SiVite  size={16} />
                    </span>
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Bootstrap CSS
                        <FaBootstrap size={16} />
                    </span>
                  </div>
                  <button className="btn btn-outline-light btn-sm mb-3" onClick={() =>open("url")}>View Project</button>
                </div>
              </Col>
            </Row>
          </div>
              <div className="social-icons mt-4">
            <button className="btn btn-primary me-2 mb-4" onClick={() =>open("https://github.com/Abdallah-MedCh?tab=repositories")}>View More Projects</button>
            </div>
        </div>
        </section>
  )
}

export default work