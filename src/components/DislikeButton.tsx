import React, { useState } from "react";

const LikeButton: React.FC = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes - 1);
  };

  return <button onClick={handleLike}>Dislike {likes}</button>;
};

export default LikeButton;
