import React from 'react';

const Section2Left12 = () => {
  return (
    <div className="section2_left_12_container">
      <h1>Meet your Host</h1>
      <div className="profile">
        <div className="profile-card">
          <div className="card">
            <div className="left-section">
              <img src="images/section_left_12_farnado.jpg" alt="Fernando" className="profile-pic" />
              <div className="name">Fernando</div>
              <div className="superhost">🏅 Superhost</div>
            </div>
            <div className="right-section">
              <div className="stat">
                <div className="stat-value">310</div>
                <div className="stat-label">Reviews</div>
              </div>
              <div className="stat">
                <div className="stat-value rating"><span className="star">4.92 </span>★</div>
                <div className="stat-label">Rating</div>
              </div>
              <div className="stat">
                <div className="stat-value">7</div>
                <div className="stat-label">Years hosting</div>
              </div>
            </div>
          </div>
          <p className="profile-card-p1">🎈 Born in 80s</p>
          <p className="profile-card-p2">💼 My work: Hospitality</p>
          <p className="profile-card-p3">Hello world! I love traveling and I also love welcoming guests in my home country, Peru, meeting new...</p>
          <p className="profile-card-p4">Show More &gt;</p>
        </div>
        <div className="profile-details">
          <div className="superhost-info">
            <h2>Fernando is a Superhost</h2>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
          </div>
          <div className="co-hosts">
            <h3>Co-hosts</h3>
            <div className="co-host-list">
              <div className="co-host">
                <img src="images/section_left_12_percy.jpg" alt="Percy" />
                <span>Percy</span>
              </div>
              <div className="co-host">
                <img src="images/section_left_12_R.jpg" alt="Raul" />
                <span>Raul</span>
              </div>
            </div>
          </div>
          <div className="host-details">
            <h3>Host details</h3>
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>
          <button className="message-btn">Message Host</button>
        </div>
      </div>
    </div>
  );
};

export default Section2Left12;