import React from "react"
import ReactDOM from "react-dom"
import './Modal.css'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className='modal-overlay'>
            <div className="modal-container">
                <div className="upper-section">
                    <h1>Huge Announcment</h1>
                    <p className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h3>React Projects!!!</h3>
                </div>
                <div className="lower-section">
                    <a className="modal-btn btn-red">Close</a>
                    <a href="" target="_blank" className="modal-btn btn-green">Start</a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;