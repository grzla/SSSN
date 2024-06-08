import React, { useState } from "react";

const LikeButton: React.FC<{ post_id: string }> = ({ post_id }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    console.log("like called");
    fetch(`http://127.0.0.1:3001/posts/${post_id}/like`, {
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
          console.error("Failed to like the post");
          setLikes(likes - 1); // revert the local state change
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLikes(likes - 1); // revert the local state change
      });
  };

  return <button onClick={handleLike}>Like {likes}</button>;
};

export default LikeButton;
