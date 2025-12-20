"use client";

import Image from "next/image";
import Link from "next/link";
import AudioPlayer from "./AudioPlayer";
import type { BookType } from "../types/book";
import { FaStar } from "react-icons/fa";
import { RxStopwatch } from "react-icons/rx";

type BookCardProps = {
  book: BookType;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link
      href={`/book/${book.id}`}
      className="
        for-you__recommended--books-link
        relative
        snap-start
        shrink-0
        w-[200px]
        pt-8
        px-3
        rounded
        block
        hover:bg-[#f1f6f4]
      "
    >
      {/* <AudioPlayer audioLink={book.audioLink} /> */}
      <figure className="book__image--wrapper mb-3">
        <Image
          className="book__image mx-auto"
          src={book.imageLink}
          alt={book.title}
          width={172}
          height={172}
        />
      </figure>
      <div className="recommended__book--title text-[16px] font-bold text-[#032b41] mb-2">
        {book.title}
      </div>
      <div className="recommended__book--author text-[14px] text-[#6b757b] font-light mb-2">
        {book.author}
      </div>
      <div className="recommended__book--sub-title text-[14px] text-[#394547] mb-2">
        {book.subTitle}
      </div>
      <div className="recommended__book--details-wrapper flex gap-3">
        <div className="flex items-center gap-1 text-[14px] font-light text-[#6b757b]">
          <RxStopwatch className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1 text-[14px] font-light text-[#6b757b]">
          <FaStar className="w-4 h-4" />
          {book.averageRating.toFixed(1)}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
