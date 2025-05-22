import React from 'react'
import { Row, Col } from "react-bootstrap";

import { X, Github, Linkedin, Twitter, Mail, Download } from "lucide-react"

function About({ closeModal }) {
  return (
    <section>
      <div className="modal-header">
          <h2 className="modal-title">About Me</h2>
          <button className="close-button" onClick={closeModal}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          
          <div className="row align-items-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="about-image">
                <img src="/me.jpg?height=250&width=250" alt="Profile" className="rounded-circle" />
              </div>
            </div>
            <div className="col-md-8">
              <h3>Abdallah MOHAMMED CHAABANI</h3>
              <p>
                I am a Network and Data Engineer with a solid foundation in object-oriented
 programming. My academic background gave me the chance to acquire an
 experience in Java and Android Studio. My current job has allowed me to
 gain experience in the field of insurance where I was able to build a solid
 base in the different departments I visited (Sales / Claims / General
 resources / HR).
              </p>
              
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-5">
            <h3 className="mb-4">My Resume</h3>
            <Row>
              <div className="padding-10 d-flex justify-content-center">
                <a className="btn btn-primary  col-4 me-2 d-flex align-items-center justify-content-center" href="/CV/eng/CV.pdf"  download>
                    English 
                <Download size={20} className="ms-2" />
                  </a>
              <a className="btn btn-primary  col-4 me-2 d-flex align-items-center justify-content-center" href="/CV/fr/CV.pdf"  download>
              French
                <Download size={20} className="ms-2" />
              </a>
              <a className="btn btn-primary  col-4 me-2 d-flex align-items-center justify-content-center" href="/CV/acd/CV.pdf"  download>
              Academic
                <Download size={18} className="ms-2" />
              </a>
              </div>
            </Row>
          </div>
        </div>
    </section>
  )
}

export default About