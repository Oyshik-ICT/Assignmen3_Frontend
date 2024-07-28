const SleepingArrangement = ({ images, type, beds }) => (
  <div className="sleeping-arrangement">
    <div className="images-scroll-container">
      {images.map((image, index) => (
        <img key={index} src={`http://localhost:3000/${image}`} alt={`${type} ${index}`} />
      ))}
    </div>
    <p className="section2_left_7_p2">{type}</p>
    <p className="section2_left_7_p3">{beds}</p>
  </div>
);


const Section2 = ({ hotel, room }) => {
  return (
    <div className="section2">
      <div className="section2_left" id="section2_left_i">
        <div className="section2_left_1" id="section2_left_1_txt">{hotel.title}</div>
        <div className="section2_left_2">
          {hotel.guest_count} guests · {hotel.bedroom_count} bedroom(s) · {hotel.bedroom_count} bed(s) · {hotel.bathroom_count} bath(s)
        </div>
        <div className="section2_left_3">★New</div>
        <hr />
        <div className="section2_left_4">
          <div className="section2_left_4_left">
            <img src="images/section_2_left_man.jpg" alt="Host" />
          </div>
          <div className="section2_left_4_right">
            <p id="section2_left_4_right_p1">Hosted by {hotel.host_information.name}</p>
            <p id="section2_left_4_right_p2">Super host {hotel.host_information.years_hosting} years hosting</p>
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
              <p className="section2_left_5_1st_p1">{hotel.host_information.name} is a superhost</p>
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
            {hotel.description}
            <br /><br />
            <b>Show more &gt;</b>
          </div>
          <div className="section2_left_6_3rd"></div>
        </div>
        <hr />
        <div className="section2_left_7">
          <p className="section2_left_7_p1">Where you will sleep</p>
          <div className="sleeping-arrangements-container">
            {room.map((room, index) => (
              <SleepingArrangement 
                key={index}
                images={room.room_image} // Pass array of images
                type={room.room_title}
                beds={`${room.bedroom_count} bed(s)`}
              />
            ))}
          </div>
          {/* <div id="room_name">{rooms.map(room => room.room_title).join(', ')}</div> */}
        </div>
        <hr />
        <div className="section2_left_8_container">
          <h2>What this place offers</h2>
          <div className="amenities-grid">
            {hotel.amenities.map((amenity, index) => (
              <div key={index} className="amenity">
                <span className="icon">🔹</span> {amenity}
              </div>
            ))}
          </div>
          <button className="show-more">Show all {hotel.amenities.length} amenities</button>
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
                    <td><b>Check In</b><br />Add date</td>
                    <td><b>Check Out</b><br />Add date</td>
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



