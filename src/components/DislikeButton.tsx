import React, { useState } from "react";

const DislikeButton: React.FC<{ post_id: string }> = ({ post_id }) => {
  const [likes, setLikes] = useState(0);

  const handleDislike = () => {
    setLikes(likes - 1);
    console.log("Disliking post", post_id);
    fetch(`http://127.0.0.1:3001/posts/${post_id}/dislike`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server response was not ok");
        }
      })
      .then((data) => {
        if (!data.success) {
          console.error("Failed to dislike the post");
          setLikes(likes + 1); // revert the local state change
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLikes(likes + 1); // revert the local state change
      });
  };

  return <button onClick={handleDislike}>Dislike {likes}</button>;
};

export default DislikeButton;
