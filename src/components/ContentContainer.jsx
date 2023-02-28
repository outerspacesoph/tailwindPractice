import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
// import { useState } from 'react';

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list">
        <Post
          name="John B"
          timestamp="one week ago"
          text={`From the very beginning, it was always Kooks and Pogues. Some people with everything. And some with nothing. That's the way it's always been. And that's how they wanna keep it.

          `}
        />
        <Post
          name="Pope"
          timestamp="one week ago"
          text={`The treasure was our way out. How we evened the scales. How the Pogues win. `}
        />
        <Post name="JJ" timestamp="5 days ago" text={`But at some point... you kind of have to wonder... ..was the treasure an escape? Or was it a trap?`} />
        <Post
          name="Cleo"
          timestamp="4 days ago"
          text={`You had the real treasure in your hand, and you just let it go.`}
        />
        <Post
          name="Big John"
          timestamp="4 days ago"
          text={`This is my work. This is my life!`}
        />
        <Post
          name="Sarah"
          timestamp="2 days ago"
          text={`Is it really worth all this? `}
        />
        <Post
          name="John B"
          timestamp="22 hours ago"
          text={`You know, wars have been started for less, Sarah Cameron. `}
        />
        <Post
          name="Kie"
          timestamp="3 hours ago"
          text={`You ever seen this many Kooks in one place? `}
        />
        <Post
          name="Sarah"
          timestamp="Just now"
          text={`Can we drop the Pogue versus Kooks thing? `}
        />
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className="bottom-bar">
    <PlusIcon />
    <input
      type="text"
      placeholder="Enter message..."
      className="bottom-bar-input"
    />
  </div>
);

const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className={"post"}>
      <div className="avatar-wrapper">
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
          alt=""
          className="avatar"
        />
      </div>

      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size="22"
    className="text-green-500 dark:shadow-lg mx-2 dark:text-primary"
  />
);

export default ContentContainer;
