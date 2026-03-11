"use client";

import Image from "next/image";
import Link from "next/link";
import AudioBook from "./AudioButton";
import type { BookType } from "../types/book";
import { RxStopwatch } from "react-icons/rx";

type BookCardProps = {
  book: BookType;
};

const SearchCard = ({ book }: BookCardProps) => {
  return (
    <Link
      href={`/book/${book.id}`}
      className="
        for-you__book-card--link
        flex
        relative
        w-full
        gap-2
        p-4
        hover:bg-[#f1f6f4]
        border-b
        border-[#e1e7ea]
      "
    >
      {book.subscriptionRequired && (
        <div className="book-card__premium absolute right-4 top-4 px-2  text-white text-[12px] bg-[#032b41] rounded-2xl ">
          Premium
        </div>
      )}
      <figure className="book__image--wrapper mb-3 inline-block">
        <Image
          className="book__image mx-auto"
          src={book.imageLink}
          alt={book.title}
          width={80}
          height={80}
          unoptimized
        />
      </figure>
      <div className="flex flex-col">
        <div className="book-card__title text-[16px] font-medium text-[#032b41] mb-2 mr-20">
          {book.title}
        </div>
        <div className="book-card__author text-[14px] text-[#6b757b] font-light mb-2">
          {book.author}
        </div>
        <div className="book-card__details-wrapper flex gap-3">
          <div className="flex items-center gap-1 text-[14px] font-light text-[#6b757b]">
            <RxStopwatch className="w-4 h-4" />{" "}
            <AudioBook audioLink={book.audioLink} buttonClassName="hidden" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
