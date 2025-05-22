
import { Row, Col,Button, Modal,Carousel } from "react-bootstrap";
import { X, Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { FaUnity } from "react-icons/fa";


function Next({closeModal}) {
  const isMobile = window.innerWidth < 768;
  return (
    <div>
              
        <div className="modal-header">
          <h2 className="modal-title">Work in Progress</h2>
          <button className="close-button" onClick={closeModal}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
        

          {/* Project 1 - Image Right */}
          <div className="project-row">
            <Row className="align-items-center mb-5">
              <Col md={7}>
                <div className="project-content">
                  <h3>Dots and Boxes - Algerian Variant</h3>
                  <p>
  I'm currently developing a modern take on the classic <strong>Dots and Boxes</strong> game, inspired by a unique variant popular in Algeria. 
  This project is being built in <strong>Unity</strong> with <strong>C#</strong>, aiming to preserve the game's core mechanics while introducing 
  fresh layers of creativity.
</p>

<p>
  My goal is to blend the nostalgic feel of the traditional game while adding unexpected gameplay twists to enhance replayability and strategy.
</p>

<h5 className="mt-3">Key Features in Development:</h5>
<ul>
  <li>Local and online multiplayer support</li>
  <li>Dynamic visual and sound effects</li>
  <li>Unique power-ups and gameplay modifiers</li>
  <li>Progressive difficulty and randomized challenges</li>
</ul>

<p>
  This project is an exploration of blending nostalgic, culturally rooted games with modern game design concepts. 
  It's also a practical showcase of my skills in <strong>C#</strong>, <strong>Unity</strong>, and <strong>game design</strong>.
</p>
                  <div className="project-tags mb-3">
                    <span className="badge bg-ocean-light text-ocean-deep me-2">C# </span>
                    <span className="badge text-black me-2 rounded-5 d-inline-flex align-items-center gap-1">Unity Engine
                                            <FaUnity size={16} />
                                        </span>
                  </div>
                </div>
              </Col>
              <Col md={5}>
                                  <iframe
                    src="/boxesGame/index.html"
                      width={isMobile ? "100%" : "450"}
                  height={isMobile ? "500" : "500"}
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    width: isMobile ? "100%" : "450px",
                    height: isMobile ? "500px" : "500px"
                  }}
                    title="Embedded Page"
                  ></iframe>
              </Col>
            </Row>
          </div>
<hr className=" mb-5" />

<div className="project-row">
            <Row className="align-items-center mb-5">
              <Col md={5} className="order-md-1 order-2">
                <div className="project-image" >
                  <img src="/projectIMG/EVDZ.jpg" alt="EVDZ img" />
                  <div className="overlay-text">Coming Soon</div>
                </div>
              </Col>
              <Col md={7} className="order-md-2 order-1">
                <div className="project-content">
                  <h3>Project EVDZ</h3>
                  <p>
                    A travel-focused SaaS platform designed to help Algerien travelers explore the world.
                    Currently in development, this project combines WordPress for content management and Python for backend services, this tool is designed to simplify and streamline the travel preparation process for users in Algeria.
                  </p>
                  
                </div>
              </Col>
            </Row>
          </div>
        </div>
      
    </div>
  )
}

export default Next