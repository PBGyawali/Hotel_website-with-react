import React, { useState } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Booking from './components/Booking';
import About from './components/About';
import Rooms from './components/Rooms';
import Review from './components/Review';

function App() {

  //creating a constant for selected rooms type
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  //changing the selected room type when book now button is clicked
  function handleBookNow(roomType) {
  setSelectedRoomType(roomType);
  }
  function handleBookNow(roomType) {
    setSelectedRoomType(roomType);
    setIsChecked(false);
  }

  return (
    <div className="App">
      <Header />
       {/*passing the onBookNow property value to handleBookNow function
       and selectedRoomType constant's value to selectedRoomType props
       in the child component i.e booking section*/}
      <Booking
      selectedRoomType={selectedRoomType}
      onBookNow={handleBookNow}
      // Pass the isChecked state to Booking component
      //isChecked variable is created to prevent user
      //from booking before the availabilty of the room is checked
      isChecked={isChecked} setIsChecked={setIsChecked}
      />
      <Services />
      <Gallery />
      {/*passing the onBookNow property value to handleBookNow function,isChecked variable
      is created to prevent user  from booking before the availabilty of the room is checked*/}
      <Rooms
      onBookNow={handleBookNow}
      isChecked={isChecked} setIsChecked={setIsChecked}
      />
      <About />
      <Review/>
      <Contact />
    </div>
  );
}

export default App;




