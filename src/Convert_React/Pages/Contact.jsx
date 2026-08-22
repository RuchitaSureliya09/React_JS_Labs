import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <br />
      <div class="form">
        <center>
          <form >
            <center>
              <div className="row h1 justify-content-center py-4">● Contact us ●</div>
            </center>
            <div className="row">
              <div className="col-3">
                <label for="fn">First Name</label>
                <br />
                <br />
                <br />
                <label for="ln">Last Name</label>
                <br />
                <br />
                <br />
                <label for="email">Email</label>
                <br />
                <br />
                <br />
                <label for="gender">Gender</label>
                <br />
                <br />
                <br />
                <label for="mn">Mobile No.</label>
                <br />
                <br />
                <br />
                <label for="age">Age</label>
                <br />
                <br />
                <br />
                <label for="select">Select</label>
                <br />
                <br />
                <br />
                <label for="rm">Remark</label>
              </div>
              <div className="col">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  id="fn"
                  className="form-control mb-2"
                  required
                />
                <br/>
                <input
                  type="text"
                  placeholder="Enter last Name"
                  className="form-control"
                  id="ln"
                  required
                />
                <br/>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  id="email"
                  pattern="[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,27}"
                  className="form-control mt-2 mb-3"
                  required
                />
                <br/>
                <input
                  type="radio"
                  name="gender"
                  className="form-checked mt-2 mx-2 mb-5"
                  id="male"
                />   
                <label for="male">Male</label>  
                <input
                  type="radio"
                  name="gender"
                  className="form-checked mx-2"
                  id="female"
                />
                <label for="female">Female</label>
                <input
                  type="tel"
                  placeholder="Enter mobile no."
                  id="mn"
                  className="form-control "
                  minlength="10"
                  maxlength="10"
                  required
                />
                <br/>
                <input
                  type="number"
                  id="age"
                  min="18"
                  max="80"
                  className="form-control mt-2 mb-2 "
                  required
                />
                <br/>
                <select className="form-select mb-4">
                  <option>Select State</option>
                  <option>Jammu & Kashmir</option>
                  <option>Ladakh</option>
                  <option>Panjab</option>
                  <option>Haryana</option>
                  <option>Rajasthan</option>
                  <option>Gujarat</option>
                  <option>Madhya Pradhesh</option>
                  <option>Maharastra</option>
                  <option>Goa</option>
                  <option>Karnataka</option>
                  <option>Keral</option>
                  <option>Tamil Nadu</option>
                  <option>Andra Pardesh</option>
                  <option>Telangana</option>
                  <option>Chhattisgarh</option>
                  <option>Orissa</option>
                  <option>Jharkhand</option>
                  <option>West Bengal</option>
                  <option>Tripura</option>
                  <option>Mizoram</option>
                  <option>Manipur</option>
                  <option>Nagaland</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Meghalaya</option>
                  <option>Sikkim</option>
                  <option>Bihar</option>
                  <option>Uttar Pradesh</option>
                  <option>Delhi</option>
                  <option>Uttarakhand</option>
                  <option>Himachal Pradesh</option>
                </select>
                <textarea
                  placeholder="Enter Your Remark"
                  rows="5"
                  cols="35"
                  className="form-control mb-4"
                ></textarea>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-2">
                <input
                  type="submit"
                  className="form-control mb-4"
                  value="Submit"
                />
                  </div>
                  <div className="col-2">

                <input
                  type="reset"
                  className="form-control mb-4"
                  value="Reset"
                />
                  </div>
            </div>
          </form>
          <br />
          <br />
        </center>
      </div>
      <br />
    </>
  );
}

export default Contact;
