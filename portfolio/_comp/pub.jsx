
import { X, } from "lucide-react"

function Pub({closeModal}) {
  return (
    <div>
        <div className="modal-header">
          <h2 className="modal-title">Publications</h2>
          <button className="close-button" onClick={closeModal}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <h5>
Network Intrusion Detection System Using Neural Network and Condensed Nearest Neighbors with Selection of NSL-KDD Influencing Features
</h5>
          <p>
          IEEE · 26 janv. 2021
          </p>

          <button className="btn btn-outline-light " onClick={() => window.open("https://ieeexplore.ieee.org/abstract/document/9359689", "_blank")}>
            View Publication
          </button>
          <hr  />
        </div>
    </div>
  )
}

export default Pub