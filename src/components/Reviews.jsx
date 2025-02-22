import React from "react";
import { FaUserCircle } from "react-icons/fa"; // User icon
import "../styles/Reviews.css"; // Import CSS file

const reviews = [
  {
    name: "🧑‍💼 Vijay",
    feedback: "This resume builder is amazing! Super easy to use.",
  },
  {
    name: "👩‍💼 Charu R",
    feedback: "Helped me land my dream job! Highly recommend.",
  },
  {
    name: "🧑‍💼 John",
    feedback: "Fantastic templates! Made my resume stand out.",
  },
  {
    name: "👩‍💼 Sophia",
    feedback: "Quick and efficient. Landed interviews instantly!",
  },
  {
    name: "👩‍💼Vishnu",
    feedback: "A game-changer! My resume got noticed within days!",
  },
  {
    name: "🧑‍💼 Joju M",
    feedback: "User-friendly and professional templates. Highly satisfied!",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-container">
      <h2>What Our Clients Say</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-box" key={index}>
            <FaUserCircle className="user-icon" />
            <p className="review-text">"{review.feedback}"</p>
            <p className="review-name">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
