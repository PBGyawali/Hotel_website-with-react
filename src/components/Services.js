import React from 'react';
//importing image assets from assets folder
import Service from '../assets/116104303_166880488224847_7515200828338560580_n.jpg';

//importing icons assets from react icons assets components
import { FaCar, FaTree, FaPeace, FaUtensils, FaWifi, FaClock } from 'react-icons/fa';


function Services() {
   //importing or defining image sources for services section
   //const PeaceImage="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600";
  const PeaceImage="https://images.pexels.com/photos/4723293/pexels-photo-4723293.jpeg?auto=compress&cs=tinysrgb&w=600";
  const ParkImage="https://images.pexels.com/photos/5182301/pexels-photo-5182301.jpeg?auto=compress&cs=tinysrgb&w=600";
  const RoomServiceImage = Service;
  const GardenImage="https://images.pexels.com/photos/14024968/pexels-photo-14024968.jpeg?auto=compress&cs=tinysrgb&w=600";
  const WifiImage="https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const RestaurantImage="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  //code for services section
  return (
    <section id="services">
      <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
        <h2>Our Services</h2>
        </div>
      </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-item">
            {/* inserting the imported image variable*/}
              <img src={PeaceImage} alt="Peaceful Environment" className="img-fluid" />
              <h3>
                  <span class="icon text-primary"><FaPeace /></span>
                  <span class="text"> Peaceful Environment</span>
              </h3>
              <p>Experience a tranquil and peaceful stay away from the hustle and bustle of the city.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
            {/* inserting the imported image variable*/}
              <img src={ParkImage} alt="Service Icon" className="img-fluid"/>
              <h3>
                  <span class="icon text-warning"><FaCar/></span>
                  <span class="text"> Private Parking</span>
              </h3>
              <p>Our hotel offers secure and convenient private parking for all
                our guests, so you can rest assured that your vehicle is safe
                during your stay.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
            {/* inserting the imported image variable*/}
              <img src={RoomServiceImage} alt="Service Icon" className="img-fluid" style={{ width: '600px',height:'235px' }} />
              <h3>
                  <span class="icon text-secondary"><FaClock /></span>
                  <span class="text"> 24/7 Reception</span>
              </h3>
              <p>We provide 24/7 room service to ensure your comfort.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={GardenImage} alt="Service Icon" className="img-fluid"/>
              <h3>
                  <span class="icon text-success"><FaTree /></span>
                  <span class="text"> Garden Area</span>
              </h3>
              <p>Our hotel features a beautiful garden area where you can relax
                and enjoy the natural beauty of the surroundings. Perfect for
                enjoying a cup of coffee or reading a book</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={RestaurantImage} alt="Service Icon" className="img-fluid"/>
              <h3>
                  <span class="icon text-danger"><FaUtensils /></span>
                  <span class="text"> Restaurant and Bar</span>
              </h3>
              <p>Indulge in delicious Nepali, Indian and Chinese cuisines at our bar and restaurant.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={WifiImage} alt="Service Icon" className="img-fluid"/>
              <h3>
                  <span class="icon text-info"><FaWifi /></span>
                  <span class="text"> Free Wi-Fi</span>
              </h3>
              <p>Stay connected with our high-speed Wi-Fi internet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Services;
