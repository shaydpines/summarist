import React from "react";
import type { BookType } from "../types/book";
import AudioPlayer from "./AudioPlayer";

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

  return (
    <div className="summary h-[calc(100vh-260px)] md:h-[calc(100vh-160px)] relative w-full overflow-y-auto">
      <div className="audio__book--summary text-[16px] whitespace-pre-line p-6 max-w-[800px] my-0 mx-auto">
        <div className="audio__book--summary-title text-[20px] md:text-[24px] text-[#032b41] border-b-[#e1e7ea] mb-8 pb-4 leading-normal">
          <b>{book.title}</b>
        </div>
        <div className="audio__book--summary-text text-[14px] md:text-[16px] leading-snug text-[#032b41]">
          {book.summary}
        </div>
      </div>
      <AudioPlayer book={book} />
    </div>
  );
};

export default Player;
