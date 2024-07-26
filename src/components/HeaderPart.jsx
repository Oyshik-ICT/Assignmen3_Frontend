import React, { useState, useEffect } from 'react';

const HeaderPart = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuest, setShowGuest] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRange, setSelectedRange] = useState('exact');
  const [currentView, setCurrentView] = useState('dates');
  const [inDate, setInDate] = useState('Add date');
  const [outDate, setOutDate] = useState('Add date');
  const [countInOut, setCountInOut] = useState(0);
 
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleRangeClick = (event) => {
    const add = event.target.textContent;
    const [number] = add.split(' '); // Extract the number part
    setInDate(prev => prev + ' ' + number);
    setOutDate(prev => prev + ' ' + number);
  };

  const [guestCounts, setGuestCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });


  const handleIncrement = (type) => {
    setGuestCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
  };

  // Function to handle decrementing the count
  const handleDecrement = (type) => {
    setGuestCounts(prevCounts => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] - 1, 0) // Ensure count doesn't go below 0
    }));
  };


  const showCountryName = (event) => {
    const text = event.currentTarget.querySelector(".region-name").textContent;
    setSelectedCountry(text);
    document.getElementById('des-name').innerHTML=text
  };
  const displayBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const displayMap = () => {
    setShowMap(!showMap);
    setShowCalendar(false);
    setShowGuest(false);
  };

  const displayCalendar = () => {
    setShowCalendar(!showCalendar);
    setShowMap(false);
    setShowGuest(false);
  };

  const toggleGuestCounter = () => {
    setShowGuest(!showGuest);
    setShowMap(false);
    setShowCalendar(false);
  };

  const renderCalendar = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(<div key={`empty-${i}`} classNameN="day other-month"></div>);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const isSelected = selectedDate && day === selectedDate.getDate() &&
        currentDate.getMonth() === selectedDate.getMonth() &&
        currentDate.getFullYear() === selectedDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`day ${isSelected ? 'selected' : ''}`}
          onClick={() => selectDate(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const selectDate = (day) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate);

    const monthAbbr = newSelectedDate.toLocaleString('default', { month: 'short' });
    if (countInOut === 0) {
      setInDate(`${monthAbbr} ${day}`);
      setCountInOut(1);
    } else {
      setOutDate(`${monthAbbr} ${day}`);
      setCountInOut(0);
    }
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <header>
      <div className="searchBox">
        <div className="searchPlaceholder">
          <input type="radio" id="anywhere" className="headbar" name="searchOption" onClick={displayBar} />
          <label htmlFor="anywhere">Anywhere</label>
          
          <input type="radio" id="anyweek" className="headbar" name="searchOption" onClick={displayBar} />
          <label htmlFor="anyweek">Any week</label>
          
          <input type="radio" id="addguest" className="headbar" name="searchOption" onClick={displayBar} />
          <label htmlFor="addguest">Add guest</label>
        </div>
        <button className="searchButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <g clipPath="url(#clip0_2_17)">
                        <g filter="url(#filter0_d_2_17)">
                            <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"></path>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feOffset dy="4"></feOffset>
                            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                        </filter>
                        <clipPath id="clip0_2_17">
                            <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                        </clipPath>
                    </defs>
                </svg>
        </button>
      </div>
      <div className="right-icons">
            <button className="icon-button globe-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            </button>
            <button className="icon-button user-menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </button>
      </div>

      {showSearchBar && (
        <div id="search-bar_after" style={{ display: 'flex' }}>
          <button className="search-item"onClick={displayMap} id="where"><b>Where</b><div id="des-name"></div></button>
          <button className="search-item" id="check-in" onClick={displayCalendar}><b>Check-in</b><div id="in_date_info">{inDate}</div></button>
          <button className="search-item" onClick={displayCalendar}><b>Check-out</b><div id="in_date_info">{outDate}</div></button>
          <button className="search-item" id="add-guest" onClick={toggleGuestCounter}><b>Who</b></button>
          <button className="search-button">Search</button>
          
        </div>
      )}

<div>

      {showMap && (
        <div id="map_container" style={{ display: "block" }}>
          <h2>Search by region</h2>
          <div className="region-grid">
            <div
              className="region-item"
              id="region-item-1"
              onClick={showCountryName}
            >
              <div className="region-icon">
                <img src="images/map1.jpg" alt="I'm flexible" />
              </div>
              <div className="region-name">I'm flexible</div>
            </div>
            <div
              className="region-item"
              id="region-item-2"
              onClick={showCountryName}
            >
              <div className="region-icon">
                <img src="images/map2.png" alt="Southeast Asia" />
              </div>
              <div className="region-name">Southeast Asia</div>
            </div>
            <div
              className="region-item"
              id="region-item-3"
              onClick={showCountryName}
            >
              <div className="region-icon">
                <img src="images/map3.png" alt="Canada" />
              </div>
              <div className="region-name">Canada</div>
            </div>
            <div
              className="region-item"
              id="region-item-4"
              onClick={showCountryName}
            >
              <div className="region-icon">
                <img src="images/map4.png" alt="Europe" />
              </div>
              <div className="region-name">Europe</div>
            </div>
            <div
              className="region-item"
              id="region-item-5"
              onClick={showCountryName}
            >
              <div className="region-icon">
                <img src="images/map5.png" alt="Thailand" />
              </div>
              <div className="region-name">Thailand</div>
            </div>
            <div
              className="region-item"
              id="region-item-6"
              onClick={showCountryName}
            >
              <div className="region-icon">
                <img src="images/map6.png" alt="Middle East" />
              </div>
              <div className="region-name">Middle East</div>
            </div>
          </div>
        </div>
      )}

    </div>

    {showCalendar && (
      <div id="calendar-container" style={{ display: 'block' }}>
        <div className="view-options">
          <button className="active" data-view="dates">Dates</button>
          <button data-view="months">Months</button>
          <button data-view="flexible">Flexible</button>
        </div>
        <div className="header">
          <button className="nav-button" id="prevMonth" onClick={prevMonth}>&lt;</button>
          <span className="month-year" id="monthYear">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button className="nav-button" id="nextMonth" onClick={nextMonth}>&gt;</button>
        </div>
        <div className="weekdays">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>
        <div className="days" id="daysContainer">
          {renderCalendar()}
        </div>
        <div className="date-range">
          <button data-range="exact">Exact dates</button>
          <button className="range" data-range="1" onClick={handleRangeClick}>±1 day</button>
          <button className="range" data-range="2" onClick={handleRangeClick}>±2 days</button>
          <button className="range" data-range="3" onClick={handleRangeClick}>±3 days</button>
          <button className="range" data-range="7" onClick={handleRangeClick}>±7 days</button>
        </div>
      </div>
    )}

{showGuest && (
      <div id="counter-container" style={{ display: 'block' }}>
        <div className="counter-item">
          <div className="counter-label">
            <div>Adults</div>
            <div className="counter-sublabel">Ages 13 or above</div>
          </div>
          <div className="counter-controls">
            <button
              className="counter-button minus"
              onClick={() => handleDecrement('adults')}
              disabled={guestCounts.adults === 0}
            >
              -
            </button>
            <span className="counter-value">{guestCounts.adults}</span>
            <button
              className="counter-button plus"
              onClick={() => handleIncrement('adults')}
            >
              +
            </button>
          </div>
        </div>
        <div className="counter-item">
          <div className="counter-label">
            <div>Children</div>
            <div className="counter-sublabel">Ages 2 - 12</div>
          </div>
          <div className="counter-controls">
            <button
              className="counter-button minus"
              onClick={() => handleDecrement('children')}
              disabled={guestCounts.children === 0}
            >
              -
            </button>
            <span className="counter-value">{guestCounts.children}</span>
            <button
              className="counter-button plus"
              onClick={() => handleIncrement('children')}
            >
              +
            </button>
          </div>
        </div>
        <div className="counter-item">
          <div className="counter-label">
            <div>Infants</div>
            <div className="counter-sublabel">Under 2</div>
          </div>
          <div className="counter-controls">
            <button
              className="counter-button minus"
              onClick={() => handleDecrement('infants')}
              disabled={guestCounts.infants === 0}
            >
              -
            </button>
            <span className="counter-value">{guestCounts.infants}</span>
            <button
              className="counter-button plus"
              onClick={() => handleIncrement('infants')}
            >
              +
            </button>
          </div>
        </div>
        <div className="counter-item">
          <div className="counter-label">
            <div>Pets</div>
            <div className="counter-sublabel">Bringing a service animal?</div>
          </div>
          <div className="counter-controls">
            <button
              className="counter-button minus"
              onClick={() => handleDecrement('pets')}
              disabled={guestCounts.pets === 0}
            >
              -
            </button>
            <span className="counter-value">{guestCounts.pets}</span>
            <button
              className="counter-button plus"
              onClick={() => handleIncrement('pets')}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )}
    </header>
  );
};

export default HeaderPart;

