import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SleepingArrangement = ({ image, type, beds }) => (
  <div className="sleeping-arrangement">
    <img src={image} alt={type} />
    <p className="section2_left_7_p2">{type}</p>
    <p className="section2_left_7_p3">{beds}</p>
  </div>
);

const Section2 = ({ slug }) => {
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/hotels/${slug}`);
        setHotelData(response.data);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotelData();
  }, [slug]);

  if (!hotelData) return <div>Loading...</div>;

  const sleepingArrangements = [
    { image: "images/section1_img1.jpg", type: "Bedroom", beds: `${hotelData.bedroom_count} bed(s)` },
    // Add more sleeping arrangements here in the future
  ];

  return (
    <div className="section2">
      <div className="section2_left" id="section2_left_i">
        <div className="section2_left_1" id="section2_left_1_txt">{hotelData.title}</div>
        <div className="section2_left_2">
          {hotelData.guest_count} guests · {hotelData.bedroom_count} bedroom(s) · {hotelData.bedroom_count} bed(s) · {hotelData.bathroom_count} bath(s)
        </div>
        <div className="section2_left_3">★New</div>
        <hr />
        <div className="section2_left_4">
          <div className="section2_left_4_left">
            <img src="images/section_2_left_man.jpg" alt="Host" />
          </div>
          <div className="section2_left_4_right">
            <p id="section2_left_4_right_p1">Hosted by {hotelData.host_information.name}</p>
            <p id="section2_left_4_right_p2">Super host {hotelData.host_information.years_hosting} years hosting</p>
          </div>
        </div>
        <hr />
        <div className="section2_left_5">
          <div className="section2_left_5_1st">
            <img src="images/section2_left_checkin.png" alt="Check-in" />
            <div className="section2_left_5_1st_p">
              <p className="section2_left_5_1st_p1">Self Check in</p>
              <p className="section2_left_5_1st_p2">Check yourself in with smartlock</p>
            </div>
          </div>
          <div className="section2_left_5_1st" id="section2_left_5_2nd">
            <img src="images/section2_left_superhost.png" alt="Superhost" />
            <div className="section2_left_5_1st_p">
              <p className="section2_left_5_1st_p1">Furnando is a superhost</p>
              <p className="section2_left_5_1st_p2">Superhost are experienced and highly rated Hosts</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="section2_left_6">
          <div className="section2_left_6_1st">
            Some info has been automatically translated.<b>Show original</b>
          </div>
          <div className="section2_left_6_2nd">
            {hotelData.description}
            <br /><br />
            <b>Show more &gt;</b>
          </div>
          <div className="section2_left_6_3rd"></div>
        </div>
        <hr />
        <div className="section2_left_7">
          <p className="section2_left_7_p1">Where you will sleep</p>
          <div className="sleeping-arrangements-container">
            {sleepingArrangements.map((arrangement, index) => (
              <SleepingArrangement 
                key={index}
                image={arrangement.image}
                type={arrangement.type}
                beds={arrangement.beds}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="section2_left_8_container">
          <h2>What this place offers</h2>
          <div className="amenities-grid">
            {hotelData.amenities.map((amenity, index) => (
              <div key={index} className="amenity">
                <span className="icon">🔹</span> {amenity}
              </div>
            ))}
          </div>
          <button className="show-more">Show all {hotelData.amenities.length} amenities</button>
        </div>
        <hr />
      </div>
      <div className="section2_right" id="section2_right_i">
        <div className="section2_right_1st">
          <div className="section2_right_1st_inside">
            <p>Add dates for prices</p>
            <div className="section2_right_1st_inside_box">
              <table>
                <tbody>
                  <tr>
                    <td><b>Check In</b><br />Add data</td>
                    <td><b>Check Out</b><br />Add data</td>
                  </tr>
                  <tr>
                    <td colSpan="2"><b>Guests</b><br />1 guest</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button>Check availability</button>
          </div>
        </div>
        <div className="section2_right_2nd"></div>
      </div>
    </div>
  );
};

export default Section2;
