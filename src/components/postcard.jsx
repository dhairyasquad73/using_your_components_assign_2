// components/PostCard.jsx
import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ profilePic = "defaultProfilePicUrl", username, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80">
      <div className="flex items-center gap-3">
        <img
          src={profilePic || "https://via.placeholder.com/40"}
          alt={username}
          className="w-10 h-10 rounded-full"
        />
        <h3 className="text-lg font-bold">{username}</h3>
      </div>
      <p className="mt-2 text-gray-600">{content}</p>
      <div className="mt-3">
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;
