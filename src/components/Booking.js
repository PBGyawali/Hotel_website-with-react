import React, { useState } from 'react';

function Booking(props) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [availabiltyMessage, setAvailabiltyMessage] = useState('');
  const [textClass, setTextClass] = useState('');

   function handleRoomTypeChange(roomType) {
    props.onBookNow(roomType);
    handleBooking();
  }

  const handleCheckInChange = (event) => {
    setCheckInDate(event.target.value);
    handleBooking();
  };

  const handleCheckOutChange = (event) => {
    setCheckOutDate(event.target.value);
    handleBooking();
  };

  const handleNumGuestsChange = (event) => {
    setNumGuests(event.target.value);
    handleBooking();
  };

  const handleBooking = (check=false) => {
    props.setIsChecked(check);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //remove book now button
    handleBooking();

    // Handle form submission
    if(checkInDate!= '' && checkOutDate!= ''&& numGuests!= '' &&  props.setSelectedRoomType!= '' ){
      setAvailabiltyMessage("Room is Available for your given room type and dates");
      setTextClass("bg-success");
      handleBooking(true);
    }
    else{
      setAvailabiltyMessage("Room is Not Available for your given room type and dates");
      setTextClass("bg-danger");
    }
    setTimeout(() => {
      setAvailabiltyMessage("");
      setTextClass("");
    }, 6000);

  };

  return (
     //code for booking menu in heading section
    <section id="booking" className="room-availability-form bg-light py-4">
      <div className="container">
        <h2>Check Room Availability</h2>
      <form id="booking-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="check-in-date">Check-in Date</label>
              <input  type="date" className="form-control"   id="check-in-date"  value={checkInDate}
                onChange={handleCheckInChange}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="check-out-date">Check-out Date</label>
              <input
                type="date"
                className="form-control"
                id="check-out-date"
                value={checkOutDate}
                onChange={handleCheckOutChange}
              />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor="num-guests">Number of Guests</label>
              <select
                className="form-control"
                id="num-guests"
                value={numGuests}
                onChange={handleNumGuestsChange}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor="room-type">Room Type</label>
              {/*we use props instead of local constant since the value is also used in another component */}
              <select
                className="form-control"
                id="room-type"
                value={props.selectedRoomType}
                onChange={(e) => handleRoomTypeChange(e.target.value)}
              >
                <option value="">Select</option>
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="jr-deluxe">Junior Deluxe</option>
                  <option value="super-deluxe">Super Deluxe</option>
                  <option value="dormitory">Dormitory</option>
              </select>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                <button  className="btn btn-primary m-2">
                  Check Availability
                </button>
                {props.isChecked && <button type="submit" className="btn btn-success m-2">
                Book Now
                </button>}
                </div>
                <div className="col-sm-12 col-md-8 mt-2">
                  <span className={`col-sm-12 col-md-8 mt-2 text-white p-2 ${textClass}`}>{availabiltyMessage} </span>
                </div>
            </div>
          </div>
        </div>
      </form>
      </div>
      </section>
  );
}

export default Booking;
