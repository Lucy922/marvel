import "./Modal.css"
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useState } from 'react'

const Modal = ({onChange}) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="header-title">
            Edit Address
          </h4>
          <button className="btn-icon" onClick={onChange}><FaTimes /></button>
        </div>
        <div className="modal-body">
          <div className="input-wrap">
            <div>
              <label className="label">Name</label>
            </div>
            <div>
              <input className="input-text" type="text" placeholder="eg John Doe" />
            </div>
          </div>
          <div className="input-wrap">
            <div>
              <label className="label">Mobile number</label>
            </div>
            <div className="input-form">
              <select>
                <option>+256</option>
              </select>
              <input className="input-field" type="text" placeholder="Enter mobile number" />
            </div>
          </div>
          <div className="input-wrap">
            <div>
              <label className="label">City</label>
            </div>
            <div>
              <input className="input-text" type="text" placeholder="eg Kampala" />
            </div>
          </div>
          <div className="input-wrap">
            <div>
              <label className="label">Address</label>
            </div>
            <div>
              <input className="input-txt" type="text" placeholder="eg Kalema Apartments, Plot 00 Johnson Rd, Room 248" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="add-btn">Add Address</button>
        </div>
      </div>
    </div>
  )
}

export default Modal