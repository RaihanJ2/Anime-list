"use client";

import React, { useState } from "react";

const CollectionButton = ({ mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleButton = async (event) => {
    event.preventDefault();

    const data = { mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-white">success</p>
      ) : (
        <div className="">
          <button
            onClick={handleButton}
            className="px-2 py-2 bg-color-secondary rounded-md mt-2"
          >
            Add To Collection
          </button>
        </div>
      )}
    </>
  );
};

export default CollectionButton;
