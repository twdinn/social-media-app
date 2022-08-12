import React from "react";
import "./FeedCard.css";
import FeedProfile from "./FeedProfile";
import FeedPost from "./FeedPost";
import FeedIcons from "./FeedIcons";

const FeedCard = ({ id, name, profile, post }) => {
  console.log(`user id = ${id}`);
  return (
    <div className="feed_card">
      <div className="feed_card_container">
        <FeedProfile name={name} profile={profile} />
        <FeedPost post={post} />
      </div>
      <FeedIcons />
    </div>
  );
};

export default FeedCard;
