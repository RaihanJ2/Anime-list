"use client";

import { useState } from "react";

const ReviewInput = ({ mal_id, user_email, username, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [review, setReview] = useState("");
  const handleInput = (event) => {
    setReview(event.target.value);
  };
  const handlePost = async (event) => {
    event.preventDefault();

    const data = { mal_id, user_email, review, username, anime_title };

    const response = await fetch("/api/v1/review", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postReview = await response.json();
    if (postReview.isCreated) {
      setIsCreated(true);
      setReview("");
    }
    return;
  };
  return (
    <div className="flex flex-col gap-2 bg-color-secondary border-4 border-color-white rounded-xl p-4">
      <h1 className="text-color-white bg-color-dark p-2 rounded-md">
        {username}
      </h1>
      {isCreated && <p className="text-color-white">Posted</p>}
      <textarea
        value={review}
        className="w-full h-32 text-xl p-4 rounded-md"
        onChange={handleInput}
      />
      <button
        className=" w-52 py-2 px-3 bg-color-dark text-color-white rounded-md"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default ReviewInput;
