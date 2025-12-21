import React from "react";
import Image from "next/image";
import type { BookType } from "../types/book";
import { FaHeadphones, FaRegStar, FaStar } from "react-icons/fa";
import { RxStopwatch } from "react-icons/rx";
import AudioPlayer from "./AudioPlayer";

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
          <div className="book__description--wrapper flex-wrap max-w-[400px] p-3">
            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px] mr-1"><FaRegStar /></div>
              <div className="book__overall--rating mx-1">{book.averageRating}</div>
              <div className="book__total--rating">{`(` + book.totalRating + `)`}</div>
            </div>

            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px]"><RxStopwatch /></div>
              <div className="book__duration mx-1"><AudioPlayer audioLink={book.audioLink} buttonClassName="hidden" /></div>
            </div>

            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px]"><FaHeadphones /></div>
              <div className="book__type mx-1">{book.type}</div>
            </div>

            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
              <div className="book__icon">💡</div>
              <div className="book__key--ideas">{book.keyIdeas}</div>
            </div>
          </div>
        </div>

        <div className="book__read--btn-wrapper">
          <button type="button" className="book__read--btn">
            <span className="book__read--text">Read</span>
          </button>

          <button type="button" className="book__read--btn">
            <span className="book__read--text">Listen</span>
          </button>
        </div>

        <div className="book__bookmark">
          <div className="book__bookmark--icon">🔖</div>
          <div className="book__bookmark--text">Add title to My Library</div>
        </div>

        <h2 className="book__secondary--title">What's it about?</h2>

        <div className="book__tags--wrapper">
          {book.tags.length > 0 ? (
            book.tags.map((tag, index) => (
              <div key={index} className="book__tag">
                {tag}
              </div>
            ))
          ) : (
            <div className="book__tag">No tags available</div>
          )}
        </div>

        <div className="book__book--description">{book.bookDescription}</div>

        <h2 className="book__secondary--title">About the author</h2>

        <div className="book__author--description">
          {book.authorDescription}
        </div>
      </div>
    </div>
  );
};

export default Book;
