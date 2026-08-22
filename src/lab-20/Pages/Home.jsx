import React from "react";
import { Link } from "react-router-dom";

// 1. Implement Routing in ReactJS. (A)
// 2. Develop basic website using 5 different component (pages) and implement Routing in it. (i.e.
// About, Contact etc…) (A)

function Home() {
  return (
    <>
      <section>
        <h1>
          Welcome to
          <u>
            <mark>Incredible India</mark>
          </u>
        </h1>
        <br />

        <div class="cont">
          <h2>● India Country</h2>
          <p>
            India, officially the Republic of India, is a vast, diverse South
            Asian country known for its ancient civilization, rich culture, and
            status as the world's largest democracy, featuring varied geography
            from the Himalayas to tropical coasts, and home to multiple
            religions, languages (Hindi & English are official), It is the
            seventh-largest country by area; the most populous country since
            2023; and, since its independence in 1947 and traditions, governed
            by a parliamentary republic with a capital in New Delhi. If you know
            more about India then please check about link!
          </p>
        </div>
        <br />
        <br />

        <div class="cont">
          <img
            src={"./images/india.png"}
            alt="Image not Found"
            height="600"
            width="450"
          />
        </div>
        <br />
        <br />

        <div class="cont">
          <h2>● Quick Facts</h2>
          <dl>
            <dt>States & Union territory:</dt>
            <dd>Totally 28 states and 8 union territory in India</dd>
            <dt>Best Season:</dt>
            <dd>
              India has three type of Season
              <ul>
                <li>Winter</li>
                <li>Summer</li>
                <li>Monsoon</li>
              </ul>
            </dd>
            <dt>Famous For:</dt>
            <dd>
              Democracy & Population , Inventions , Culture & Religion , Unique
              feature and Unity of People
            </dd>
          </dl>
        </div>
        <br />
        <br />

        <div class="cont">
          <h2>● Tourist Categories</h2>
          <ul>
            <li>Historical Monuments</li>
            <li>Natural attraction like lakes,hills,beaches</li>
            <li>Religions and Spiritual places</li>
            <li>Shopping and Local markets</li>
            <li>Food streets and night life</li>
          </ul>
        </div>
        <br />
        <br />

        <div class="cont">
          <h2>● Suggested 3-Day Plan</h2>
          <ol>
            <li>Day-1 : City palace and nearby attractions</li>
            <li>Day-2 : Temple,Museums and local markets</li>
            <li>Day-3 : Lakeside / nature sport and food street</li>
          </ol>
        </div>
        <br />
        <br />
      </section>
    </>
  );
}

export default Home;
