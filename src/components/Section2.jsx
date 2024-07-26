import React from 'react';

const SleepingArrangement = ({ image, type, beds }) => (
  <div className="sleeping-arrangement">
    <img src={image} alt={type} />
    <p className="section2_left_7_p2">{type}</p>
    <p className="section2_left_7_p3">{beds}</p>
  </div>
);

const Section2 = () => {
  const sleepingArrangements = [
    { image: "images/section1_img1.jpg", type: "Bedroom", beds: "1 double bed" },
    // Add more sleeping arrangements here in the future
  ];

  return (
    <div className="section2">
      <div className="section2_left" id="section2_left_i">
        <div className="section2_left_1" id="section2_left_1_txt">Entire rental unit in Limpa, Peru</div>
        <div className="section2_left_2">2 guests · 1 bedroom · 1 bed · 1 bath</div>
        <div className="section2_left_3">★New</div>
        <hr />
        <div className="section2_left_4">
          <div className="section2_left_4_left">
            <img src="images/section_2_left_man.jpg" alt="Host" />
          </div>
          <div className="section2_left_4_right">
            <p id="section2_left_4_right_p1">Hosted by Farnando</p>
            <p id="section2_left_4_right_p2">Super host 7 years hosting</p>
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
            Some info has been automatically traslated.<b>Show original</b>
          </div>
          <div className="section2_left_6_2nd">
            Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park!<br /><br />
            It's conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from Clínica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and Alas Peruanas University. It's also very close to La...<br /><br />
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
            <div className="amenity"><span className="icon">🍳</span> Kitchen</div>
            <div className="amenity"><span className="icon">📶</span> Wifi</div>
            <div className="amenity"><span className="icon">📺</span> TV</div>
            <div className="amenity"><span className="icon">🛗</span> Elevator</div>
            <div className="amenity"><span className="icon">🧺</span> Washer</div>
            <div className="amenity"><span className="icon">👕</span> Dryer</div>
            <div className="amenity"><span className="icon">💨</span> Hair dryer</div>
            <div className="amenity"><span className="icon">🧊</span> Refrigerator</div>
            <div className="amenity"><span className="icon">⚠️</span> <del>Carbon monoxide alarm</del></div>
            <div className="amenity"><span className="icon">🚭</span> <del>Smoke alarm</del></div>
          </div>
          <button className="show-more">Show all 32 amenities</button>
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