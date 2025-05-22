"use client"
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react"
import { Row, Col, Modal } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import About from "../_comp/about"
import Work from "../_comp/work"
import Pub from "../_comp/pub"
import Next from "../_comp/next"
import Contact from "../_comp/contact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function OceanDimension() {
  const [activeModal, setActiveModal] = useState(null)
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    // Add loaded class to body after a short delay for intro animation
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const openModal = (id) => {
    setActiveModal(id)
    document.body.classList.add("modal-open")
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.classList.remove("modal-open")
  }

  

  return (
    <main className={`ocean-dimension ${loaded ? "loaded" : ""}`}>
       <ToastContainer position="top-right" />
      {/* Background */}
      <div className="bg-overlay"></div>

      {/* Wrapper */}
      <div id="wrapper">
        {/* Header */}
        <header id="header">
          <div className="content">
            <div className="inner ">
              <h1>Abdallah MOHAMMED CHAABANI</h1>
              <div>
                I’m a <span style={{ display: "inline-block", verticalAlign: "middle" }}><Typewriter 
                  options={{
                    strings: ["Developer", "Desinger"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }} wrapperClassName="typewriter-inline"/>
                   </span>who loves turning ideas into reality.
                <br />
                Focused on creating clean, user-friendly experiences using various technologies
              </div>

              <nav>
            <ul>
              {[
                { id: "about", label: "About" },
                { id: "work", label: "Projects" },
                { id: "pub", label: "Publications" },
                { id: "next", label: "Next" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => openModal(item.id)} className="nav-link" data-text={item.label}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
            </div>



          </div>
          
        </header>

        
      </div>

      {/* Modals */}
      {/* Intro Modal */}
      <Modal show={activeModal === "pub"} onHide={closeModal} centered size="lg" contentClassName="ocean-modal">
        <Pub closeModal={closeModal} />
      </Modal>

      {/* Work Modal */}
      <Modal show={activeModal === "work"} onHide={closeModal} centered size="lg" contentClassName="ocean-modal">
        <Work closeModal={closeModal} />
      </Modal>

       {/* Next Modal */}
      <Modal show={activeModal === "next"} onHide={closeModal} centered size="xl" contentClassName="ocean-modal">
        <Next closeModal={closeModal} />
      </Modal>

      {/* About Modal */}
      <Modal show={activeModal === "about"} onHide={closeModal} centered size="lg" contentClassName="ocean-modal">
        <About  closeModal={closeModal} />
      </Modal>

      {/* Contact Modal */}
      <Modal show={activeModal === "contact"} onHide={closeModal} centered size="lg" contentClassName="ocean-modal">
        <Contact  closeModal={closeModal} />
      </Modal>
    </main>
  )
}
