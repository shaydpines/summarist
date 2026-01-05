import React from "react";
import Image from "next/image";
import type { BookType } from "../types/book";
import { FaHeadphones, FaRegLightbulb, FaRegStar } from "react-icons/fa";
import { RxStopwatch } from "react-icons/rx";
import AudioPlayer from "./AudioPlayer";
import ReadListen from "./Book/ReadListen";
import Bookmark from "./Book/Bookmark";

type PlayerProps = {
  book?: BookType;
};

const Player: React.FC<PlayerProps> = ({ book }) => {
  if (!book) {
    return (
      <div className="container">
        <p>Book not found</p>
      </div>
    );
  }
  
  return <div>Player</div>;
};

export default Player;
