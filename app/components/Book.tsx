import React from "react";
import Image from "next/image";
import type { BookType } from "../types/book";
import { FaHeadphones, FaRegLightbulb, FaRegStar } from "react-icons/fa";
import { RxStopwatch } from "react-icons/rx";
import AudioPlayer from "./AudioPlayer";
import ReadListen from "./Book/ReadListen";
import Bookmark from "./Book/Bookmark";

type BookProps = {
  book?: BookType;
};

const Book: React.FC<BookProps> = ({ book }) => {
  if (!book) {
    return (
      <div className="container">
        <p>Book not found</p>
      </div>
    );
  }

  return (
    <div className="book__wrapper flex-col">
      <div className="book--img-wrapper flex justify-center mb-8">
        <figure className="book__image--wrapper">
          <Image
            src={book.imageLink}
            alt={book.title}
            width={300}
            height={300}
            className="book__image"
            priority
          />
        </figure>
      </div>
      <div className="book__inner-wrapper">
        <div className="book__title text-[24px] md:text-[32px] text-[#032b41] mb-4 font-semibold">
          {book.title}
        </div>
        <div className="book__author md:text-[14px] text-[#032b41] mb-4 font-semibold">
          {book.author}
        </div>
        <div className="book__sub--title text-[18px] md:text-[20px] text-[#032b41] mb-4 font-light">
          {book.subTitle}
        </div>
        <div className="book__wrapper border-t border-b border-[#e1e7ea]">
          <div className="book__description--wrapper flex flex-wrap max-w-[400px] p-3">
            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px] mr-1">
                <FaRegStar />
              </div>
              <div className="book__overall--rating mx-1">
                {book.averageRating}
              </div>
              <div className="book__total--rating">
                {`(` + book.totalRating + `)`}
              </div>
            </div>

            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px]">
                <RxStopwatch />
              </div>
              <div className="book__duration mx-1">
                <AudioPlayer
                  audioLink={book.audioLink}
                  buttonClassName="hidden"
                />
              </div>
            </div>
            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px]">
                <FaHeadphones />
              </div>
              <div className="book__type mx-1">{book.type}</div>
            </div>

            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
              <div className="book__icon text-[24px]">
                <FaRegLightbulb />
              </div>
              <div className="book__key--ideas mx-1">
                {book.keyIdeas} Key ideas
              </div>
            </div>
          </div>
        </div>

        <ReadListen id={book.id} />

        <Bookmark id={book.id} />

        <h2 className="book__secondary--title text-[18px] text-[#032b41] mb-4 font-semibold">
          What's it about?
        </h2>

        <div className="book__tags--wrapper flex flex-wrap gap-4 mb-4">
          {book.tags.length > 0 ? (
            book.tags.map((tag, index) => (
              <div
                key={index}
                className="book__tag text-[14px] bg-[#f1f6f4] px-4 h-12 flex items-center cursor-not-allowed text-[#032b41] font-medium rounded-sm"
              >
                {tag}
              </div>
            ))
          ) : (
            <div className="book__tag text-[14px] bg-[#f1f6f4] px-4 h-12 flex items-center cursor-not-allowed text-[#032b41] font-medium rounded-sm">
              No tags available
            </div>
          )}
        </div>

        <div className="book__book--description text-[14px] text-[#032b41] mb-4 leading-normal">
          {book.bookDescription}
        </div>

        <h2 className="book__secondary--title text-[18px] text-[#032b41] mb-4 font-semibold">
          About the author
        </h2>

        <div className="book__author--description  text-[14px] text-[#032b41] mb-4 leading-normal">
          {book.authorDescription}
        </div>
      </div>
    </div>
  );
};

export default Book;
