"use client";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { BookType } from "../types/book";
import BookCard from "./BookCard";

type BookProps = {
  book?: BookType;
};

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<BookType[]>([]);

  const searchBooks = async (query: string) => {
    if (!query) {
      setBooks([]);
      return;
    }

    try {
      const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${query}`
      );
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      searchBooks(search);
    }, 400); // debounce

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div className="search__background bg-white border-b border-[#e1e7ea] h-20 w-full z-10 sticky top-0">
      <div className="search__wrapper relative flex items-center px-16 h-full justify-end">
        <div className="search__content flex items-center gap-6 max-w-[340px] w-full">
          <div className="search flex items-center w-full">
            <div className="search__input--wrapper relative gap-2 flex items-center w-full">
              <input
                className="search__input h-10 w-full px-4 outline-none bg-[#f1f6f4] rounded-lg text-[#042330] text-[14px] border-2 border-[#e1e7ea]"
                placeholder="Search for books"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="search__icon flex items-center absolute h-full right-2 px-2 gap-2 border-l-2 border-[#e1e7ea]">
                <IoIosSearch className="text-[#03314b] text-[24px]" />
              </div>
            </div>
          </div>

          <div className="sidebar__toggle--btn md:hidden flex items-center justify-center cursor-pointer">
            <RxHamburgerMenu className="text-[24px]" />
          </div>
        </div>
      </div>

      {/* Search Results */}
      {books.length > 0 && (
        <div className="absolute right-16 top-20 bg-white border w-[340px] rounded-lg shadow-lg max-h-[400px] overflow-y-auto">
          {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;