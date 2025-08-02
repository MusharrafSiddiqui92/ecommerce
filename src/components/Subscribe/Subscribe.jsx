import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


const Subscribe = () => {
  return (
    <div className="container mt-5">
  <div className="row">
    <div className="col-8"><h3>By Subscribing To Our Newsletter You Can <br /> Get 30% Off</h3>
    <p>Details to details is what makes Siddiqui's different from the other themes.</p>
    <form className='form d-flex gap-2'>
  <div className="mb-3 w-50 rounded-0">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label> */}
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder='Your Name'
    />
    {/* <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div> */}
  </div>
  <div className="mb-3 w-50 rounded-0">
    {/* <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label> */}
    <input
      type="email"
      className="form-control"
      id="exampleInputPassword1"
      placeholder='Your E-Mail'
    />
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div> */}
  <button type="submit" className="btn btn-sm"><BsFillSendFill /></button>
</form>
    </div>
    <div className="col">
        <div className="container">
  <div className="row row-cols-2">
    <div className="col"><h5>Store Location:</h5>
    <p>Shop No 52 Dollmen Mall Johar,Karachi.</p></div>
    <div className="col"><h5>Work Hours:</h5><p>07:30 AM - 9:30 PM <br /> Daily</p></div>
    <div className="col"><h5>Phone:</h5><p>+923348108095</p></div>
    <div className="col"><h5>E-Mail:</h5><p>text@gmail.com</p></div>
    <div className="col"><h5>Office Location:</h5><p>Central Karachi</p></div>
    <div className="col"><h5>Social Media:</h5><p className='fs-4 ps-2'><FaFacebook /> <span className='ps-2'><FaInstagramSquare />
</span><span className='ps-2'><FaSquareWhatsapp />
</span></p></div>
  </div>
</div>
 </div>
  </div>
</div>

  )
}

export default Subscribe
