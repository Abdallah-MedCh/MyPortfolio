"use client"
import { useState,useRef  } from "react"
import { X, Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "emailjs-com";

function contact({closeModal}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
   const [showAlert, setShowAlert] = useState(false)
  
    // Handle form submission logic here
    //alert(`Thanks for your message, ${name}! I'll get back to you soon.`)
    /* 
    toast.success(`Thanks, ${name}! I’ll be in touch shortly.`, {
  theme: 'light',
});
    setShowAlert(true)
    setName("")
    setEmail("")
    setMessage("")
    */
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "Portfolio",
      "template_c6as912",
      form.current,
      "ge72bhDVp_HbSaPn9"
    )
    .then(
      (result) => {
        toast.success(`Thanks, ${name}! I’ll be in touch shortly.`, {
  theme: 'light',
});
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };


  return (
        



    <section>
        <div className="modal-header">
          <h2 className="modal-title">Contact</h2>
          <button className="close-button" onClick={closeModal}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <form ref={form} onSubmit={sendEmail} action="https://formsubmit.co/abdou_chaabani@outlook.com" method="POST">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name"  className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="d-flex">
              <button type="submit" className="btn btn-primary me-2">
                Send Message
              </button>
              <button
                type="reset"
                className="btn btn-outline-secondary"
                onClick={() => {
                  setName("")
                  setEmail("")
                  setMessage("")
                }}
              >
                Reset
              </button>
            </div>
          </form>
          <div className="social-icons mt-4">
            <h3>Find Me</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/Abdallah-MedCh" className="social-link">
                  <Github size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/abdou-chaabani/" className="social-link">
                  <Linkedin size={24} />
                </a>
              </li>
                   <li className="list-inline-item">
                <a href="mailto:abdou_chaabani@outlook.com" className="social-link">
                  <Mail size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>



    </section>
    
  )
}

export default contact