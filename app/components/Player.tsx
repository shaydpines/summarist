import React from "react";
import type { BookType } from "../types/book";
import Image from "next/image";
import { RiForward10Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";

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
      <div className="audio__wrapper h-180px md:h-80px w-full py-4 md:py-0 px-6 md:px-10 flex flex-col mt-auto items-center justify-between bg-[#042330] fixed bottom-0 left-0 z-50">
        <audio className="w-[300px] h-[54px]" src={book.audioLink}></audio>
        <div className="audio__track--wrapper w-full md:w-[calc(100%/3)] justify-center flex gap-3">
          <figure className="audio__track--image-mask max-w-20 md:max-w-12 flex">
            <figure className="book__image--wrapper h-12 w-12 min-w-12">
              <Image
                src={book.imageLink}
                alt={book.title}
                width={300}
                height={300}
                className="book__image block"
                priority
              />
            </figure>
          </figure>
          <div className="audio__track--details-wrapper text-white text-[14px] flex flex-col gap-1 justify-center ">
            <div className="audio__track--title ">{book.title}</div>
            <div className="audio__track--author text-[]">{book.author}</div>
          </div>
        </div>
        <div className="audio__controls--wrapper w-full md:w-[calc(100%/3)] flex justify-center">
          <div className="audio__controls gap-6 flex items-center justify-center">
            <button className="audio__controls--btn flex items-center justify-center rounded-[50%] cursor-pointer">
              <RiForward10Fill className="audio__controls--icon -scale-x-100 w-7 h-7 text-white transition-all duration-200" />
            </button>
            <button className="audio__controls--btn flex items-center justify-center rounded-[50%] cursor-pointer audio__controls--btn-play bg-white w-10 h-10">
              <FaPlay className="audio__controls--icon w-5 h-5 text-[#042330] transition-all translate-x-0.5 duration-200" />
            </button>
            <button className="audio__controls--btn flex items-center justify-center rounded-[50%] cursor-pointer">
              <RiForward10Fill className="audio__controls--icon w-7 h-7 text-white transition-all duration-200" />
            </button>
          </div>
        </div>
        <div className="audio__progress--wrapper">
          <div className="audio__time">00:00</div>
          <div className="audio__time">04:52</div>
        </div>
      </div>
    </div>
  );
};

export default Player;
