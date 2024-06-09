// LikeCount.tsx
import React, { useState } from "react";

interface LikeCountProps {
  count: number;
}

const LikeCount: React.FC<LikeCountProps> = ({ count }) => {
  // const [likes, setLikes] = useState(count);
  return (
    <p>
      {count} {count === 1 ? "like" : "likes"}
    </p>
  );
};

export default LikeCount;
