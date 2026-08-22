import React from "react";
import { Link } from "react-router-dom";

function Info() {
  return (
    <>
      <h1>
        <mark>
          <u>Travel Information & Tips</u>
        </mark>
      </h1>
      <br />

      <div class="cont">
        <h2>● How to Reach</h2>
        <ul>
          <li>
            By Train: Regular trains from major cities. Check the latest
            timetable on the official railway website.
            <br />
          </li>
          <li>
            By Bus: State transport and private buses operate from nearby towns
            and metro cities.
            <br />
          </li>
          <li>
            By Air: Nearest airport is around 20-30 km away (update distance as
            per your city).
            <br />
          </li>
        </ul>
        <br />
        <h2>● Local Transport</h2>
        For travelling inside the city you can use the following options:
        <ul>
          <li>Auto-rickshaws and cycle-rickshaws</li>
          <li>App-based taxi services (if available)</li>
          <li>City buses at fixed routes</li>
          <li>Rental bikes or bicycles</li>
        </ul>
        <br />
        <div class="table">
          <h2>● One-Day Sample Itinerary (Table)</h2>
          <table border="1" cellspacing="10" cellpadding="5">
            <caption>Sample One-Day Tour Plan</caption>
            <thead>
              <th>Time</th>
              <th>Activity</th>
              <th>Place</th>
              <th>Remarks</th>
            </thead>
            <tbody>
              <tr>
                <td>08:00 AM</td>
                <td>Breakfast</td>
                <td>Near hotel / local cafe</td>
                <td>Try local dishes</td>
              </tr>
              <tr>
                <td>09:30 AM</td>
                <td>Sightseeing</td>
                <td>City Palace</td>
                <td>2-3 hours</td>
              </tr>
              <tr>
                <td>01:00 PM</td>
                <td>Lunch</td>
                <td>Food Street</td>
                <td>Light and hygienic food</td>
              </tr>
              <tr>
                <td>03:00 PM</td>
                <td>Temple Visit</td>
                <td>Ancient Temple</td>
                <td>Observe local rituals</td>
              </tr>
              <tr>
                <td>05:00 PM</td>
                <td>Lake Visit</td>
                <td>Famous Lake</td>
                <td>Boating and sunset view</td>
              </tr>
              <tr>
                <td>08:00 PM</td>
                <td>Shopping</td>
                <td>Local Market</td>
                <td>Buy souvenirs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <h2>● General Travel Tips</h2>
        Please follow these basic tips during your journey:
        <ol>
          <li> Keep your identity proof and important documents safely.</li>
          <li>Use only trusted transport and guide services.</li>
          <li>
            Respect local culture and follow instructions at religious places.
          </li>
          <li>Avoid throwing plastic or waste at public places.</li>
          <li>Note down emergency numbers in your phone and on paper.</li>
        </ol>
        <br />
        <div class="link">
          <h2>● Some Official Links for more Information about Travel</h2>
          <ul>
            <li>India Tourism (Official Govt.)</li>
            <Link to="https://tourism.gov.in" target="_blank">
              https://tourism.gov.in
            </Link>
            <br />
            ~Official portal for tourism info & travel guidance in India 🇮🇳
            <br />
            <br />
            <li>Ministry of External Affairs – Passports & Visas</li>
            <Link to="https://www.mea.gov.in/VFFIN-hi.htm" target="_blank">
              https://www.mea.gov.in/VFFIN-hi.htm
            </Link>
            <br />
            ~Visa rules for Indian citizens traveling abroad
            <br />
            <br />
            <li>Travel Advisories</li>
            <Link
              to="https://www.mea.gov.in/travel-advisories-hi.htm"
              target="_blank"
            >
              https://www.mea.gov.in/travel-advisories-hi.htm
            </Link>
            <br />
            ~Travel advice and warnings before going abroad
            <br />
            <br />
            <li>Travel Requirements (IATA)</li>
            <Link
              to="https://www.iata.org/en/services/compliance/timatic/travel-documentation/"
              target="_blank"
            >
              https://www.iata.org/en/services/compliance/timatic/travel-documentation/
            </Link>
            <br />
            ~IATA Travel Centre (used by airlines)
            <br />
            <br />
            <li>State Dept – Travel Advisory (For India)</li>
            <Link
              to="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/india-travel-advisory.html"
              target="_blank"
            >
              https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/india-travel-advisory.html
            </Link>
            <br />
            ~Info for U.S. citizens about safety, visas, etc.
            <br />
            <br />
          </ul>
        </div>
        <img
          src="./images/india_travel.png"
          alt="Image Not Found"
          height="1000"
          width="750"
        />
      </div>
      <br />
      <br />
    </>
  );
}

export default Info;
