import React from 'react'
import { AiFillStar } from "react-icons/ai";
import  styled  from 'styled-components';
import { useState } from 'react';

const Stars = styled.section`
  font-size: 50px;
  color: #444343;
  .rating {
    color: yellow;   
  }
`;

function Project4StarRating() {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  
  const start1 = () => {
    setStar1(!star1);
    setStar2(false);
    setStar3(false);
    setStar4(false);
    setStar5(false);
  }
  
  const start2 = () => {
    setStar1(true);
    setStar2(!star2);
    setStar3(false);
    setStar4(false);
    setStar5(false);
  }
  
  const start3 = () => {
    setStar1(true);
    setStar2(true);
    setStar3(!star3);
    setStar4(false);
    setStar5(false);
  }
  
  const start4 = () => {
    setStar1(true);
    setStar2(true);
    setStar3(true);
    setStar4(!star4);
    setStar5(false);
  }
  
  const start5 = () => {
    setStar1(true);
    setStar2(true);
    setStar3(true);
    setStar4(true);
    setStar5(!star5);
  }
  
  return (
    <div>
      <h3>Project 4: Star Rating</h3>
      <Stars>
        <AiFillStar className={star1 ? "rating" : ""} onClick={start1} />
        <AiFillStar className={star2 ? "rating" : ""} onClick={start2} />
        <AiFillStar className={star3 ? "rating" : ""} onClick={start3} />
        <AiFillStar className={star4 ? "rating" : ""} onClick={start4} />
        <AiFillStar className={star5 ? "rating" : ""} onClick={start5} />
        <div>{star5 ? "5" : star4 ? "4" : star3 ? "3" : star2 ? "2" : star1 ? "1" : "0"}/5</div>
      </Stars>
    </div>
  );
}

export default Project4StarRating;



