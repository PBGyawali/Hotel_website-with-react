import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import standardRoomImage from '../assets/121196745_187229166189979_4067828173997070329_n.jpg';
import deluxeRoomImage from '../assets/86308391_113818390197724_5583307989873328128_n.jpg';
import superDeluxeRoomImage from '../assets/121196745_187229166189979_4067828173997070329_n.jpg';
import juniorDeluxeRoomImage from '../assets/IMG_0719.jpeg';
//import dormitoryRoomImage from '../assets/';

function Rooms(props) {
  const dormitoryRoomImage='https://cf.bstatic.com/xdata/images/hotel/max1024x768/172918912.jpg?k=195b6b85aa575da2107fd91049f777eb0b77ef699978752e7bd0dbb46e443869&o=&hp=1';

  function handleBookNow(roomType) {
    //since the room type value is also used in another component we pass it to the parent component
    props.onBookNow(roomType);
    //scrolling to the booking section
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  }

    return (
        <section id="rooms" className="bg-light my-5">
          <Container>
            <h2 className="text-center mb-5">Rooms</h2>
            <Row>
            <Col md={6} lg={4}>
                <Card>
                  <Card.Img variant="top" src={dormitoryRoomImage} alt="Dormitory" />
                  <Card.Body>
                    <Card.Title>Dormitory</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">From Rs. 500/night</Card.Subtitle>
                    <Card.Text>
                      Our dormitory rooms are perfect for solo travelers or a group of friends. They come with single beds, a shared bathroom, and locker facilities.
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleBookNow('dormitory')}>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card>
                {/* inserting the imported image variable*/}
                  <Card.Img variant="top" src={standardRoomImage} alt="Standard Room" />
                  <Card.Body>
                    <Card.Title>Standard Room</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">From Rs. 700/night</Card.Subtitle>
                    <Card.Text>
                      Our Standard Rooms are perfect for a comfortable and affordable stay. They come with a queen-size bed, a flat-screen TV, and a minibar.
                    </Card.Text>
                    {/* sending corresponding value i.e.'standard' when clicked */}
                    <Button variant="primary" onClick={(e) => handleBookNow('standard')}>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card>
                {/* inserting the imported image variable*/}
                  <Card.Img variant="top" src={deluxeRoomImage} alt="Deluxe Room" />
                  <Card.Body>
                    <Card.Title>Deluxe Room</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">From Rs. 2,000/night</Card.Subtitle>
                    <Card.Text>
                      Our Deluxe Rooms are perfect for a comfortable and relaxing stay. They come with a king-size bed, a flat-screen TV, and a minibar.
                    </Card.Text>
                    {/* sending corresponding value i.e.'deluxe' when clicked */}
                    <Button variant="primary" onClick={() => handleBookNow('deluxe')}>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card>
                {/* inserting the imported image variable*/}
                  <Card.Img variant="top" src={juniorDeluxeRoomImage} alt="Junior Deluxe Room" />
                  <Card.Body>
                    <Card.Title>Junior Deluxe Room</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">From Rs. 2,400/night</Card.Subtitle>
                    <Card.Text>
                    Our Junior Deluxe Rooms offer a luxurious experience with a king-size bed,
                    a flat-screen TV, and a minibar. The room also features a private balcony
                    with a beautiful view of the surrounding area.
                    </Card.Text>
                    {/* sending corresponding value i.e.'jr-deluxe' when clicked */}
                    <Button variant="primary" onClick={(e) => handleBookNow('jr-deluxe')}>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>



              <Col md={6} lg={4}>
                <Card>
                  <Card.Img variant="top" src={superDeluxeRoomImage} alt="Super Deluxe Room" />
                  <Card.Body>
                    <Card.Title>Super Deluxe Room</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">From Rs. 2,500/night</Card.Subtitle>
                    <Card.Text>
                      Our super deluxe rooms are the epitome of luxury and comfort. They feature a spacious living area, a separate bedroom with a king-size bed, and a luxurious bathroom with a Jacuzzi and a sauna.
                    </Card.Text>
                    <Button variant="primary" onClick={(e) => handleBookNow('super-deluxe')}>Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
    </section>
  );
}

export default Rooms;
