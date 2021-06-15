import React from 'react'
import { Link } from 'react-router-dom'
import './Support.css'
const Support = () => {
  return (
    <>
      <div className="header-support">
        <h1 className="header-text">We would love to hear from you</h1>
        <p className="header-paragraph">
          Whether you have a question about features or anything else, our team is ready to answer all you questions.
        </p>
        <form className="form-support">
          <h1 className="form-header">Ger in touch with us</h1>
          <p className="form-paragraph"> Your name:</p>
          <input className="form-input" type="text" />
          <p className="form-paragraph">Your email:</p>
          <input className="form-input" type="text" />
          <p className="form-paragraph">Your message</p>
          <input className="form-input-text" type="text" />
          <button className="form-button">Send</button>
          <Link to="/">
            {' '}
            <button className="button">Go Back</button>
          </Link>
        </form>
      </div>
    </>
  )
}

export default Support
