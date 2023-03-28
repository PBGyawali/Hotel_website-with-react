import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  {
    id: 1,
    username: "John",
    userPic: "https://randomuser.me/api/portraits/men/1.jpg",
    stars: 4,
    comment: "Great hotel, amazing location and very helpful staff.",
    topic: "Location",
  },
  {
    id: 2,
    username: "Jane",
    userPic: "https://randomuser.me/api/portraits/women/2.jpg",
    stars: 5,
    comment: "The room was spacious and clean, and the bed was very comfortable.",
    topic: "Room",
  },
  {
    id: 3,
    username: "Bob",
    userPic: "https://randomuser.me/api/portraits/men/3.jpg",
    stars: 3,
    comment: "The breakfast was just okay, nothing special.",
    topic: "Food",
  },
  {
    id: 4,
    username: "johnDoe",
    userPic: "https://randomuser.me/api/portraits/men/33.jpg",
    stars: 3,
    comment: "The food was just okay, nothing special.",
    topic: "Food quality"
},
{
    id: 5,
    username: "janeSmith",
    userPic: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 4,
    comment: "Great service and friendly staff!",
    topic: "Customer service"
},
{
    id: 6,
    username: "samWilliams",
    userPic: "https://randomuser.me/api/portraits/men/20.jpg",
    stars: 5,
    comment: "Absolutely fantastic experience. Would recommend to anyone!",
    topic: "Overall experience"
},
{
    id: 7,
    username: "emilyJones",
    userPic: "https://randomuser.me/api/portraits/women/13.jpg",
    stars: 2,
    comment: "The atmosphere was too loud and crowded for my taste.",
    topic: "Ambience"
},
{
    id: 8,
    username: "mikeJohnson",
    userPic: "https://randomuser.me/api/portraits/men/56.jpg",
    stars: 5,
    comment: "The food was absolutely delicious! Would definitely come back again.",
    topic: "Food quality"
},
{
    id: 9,
    username: "kateAnderson",
    userPic: "https://randomuser.me/api/portraits/women/76.jpg",
    stars: 4,
    comment: "The waitstaff was very attentive and helpful.",
    topic: "Customer service"
},
{
    id: 10,
    username: "davidLee",
    userPic: "https://randomuser.me/api/portraits/men/84.jpg",
    stars: 3,
    comment: "The prices were a bit steep for the portions.",
    topic: "Value for money"
}
];

//function to display names with their first letter capitalized for first name and last name
function TextDivider( text ) {
  //Since given data has last name capitalized we need to split it into two parts
  const words = text.split(/(?=[A-Z])/); // split text at capital letters
  const part1 = words.shift(); // extract the first word from the array
  const part2 = words.join('');// join the remaining words together without spaces
 return (
  part1.substring(0, 1).toUpperCase() + part1.substring(1).toLowerCase()+" "+
  part2.substring(0, 1).toUpperCase() + part2.substring(1).toLowerCase()
 );
}


const HotelReview = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(index => (index + 1) % reviews.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  const nextReview = () => {
    setIndex(index => (index + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex(index => (index + reviews.length - 1) % reviews.length);
  };

  return (
    <Container className="py-5">
    <h2 className="text-center mb-5">Customer Reviews</h2>
      <Row className="justify-content-center align-items-center">
        <Col xs={2} className="d-flex justify-content-center align-items-center">
          <Button variant="primary" className="rounded-circle" onClick={prevReview}>
          <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Col>
        <Col xs={8} className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <Image src={reviews[index].userPic} roundedCircle className="mb-3" />
            <h4>{TextDivider(reviews[index].username )}</h4>
            <p>
            {/* No of stars given by the customer */}
              {[...Array(reviews[index].stars)].map((star, i) => (
                <FontAwesomeIcon key={i} icon={solidStar} className="text-warning" />
              ))}
              {/* the total deducted stars from maximum of 5 */}
              {[...Array(5 - reviews[index].stars)].map((star, i) => (
                              <FontAwesomeIcon key={i} icon={regularStar} className="text-warning" />
                ))}
            </p>
            <h5 className="font-weight-bold">{reviews[index].topic}</h5>
            <p>{reviews[index].comment}</p>
          </div>
        </Col>
        <Col xs={2} className="d-flex justify-content-center align-items-center">
          <Button variant="primary" className="rounded-circle" onClick={nextReview}>
          <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelReview;
