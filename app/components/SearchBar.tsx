"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { BookType } from "../types/book";
import SearchCard from "./SearchCard";

type BookProps = {
  book?: BookType;
};

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const searchBooks = async (query: string) => {
    if (!query) {
      setBooks([]);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${query}`
      );
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      searchBooks(search);
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowResults(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div ref={wrapperRef} className="search__background bg-white border-b border-[#e1e7ea] h-20 w-full z-10 sticky top-0">
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
                onFocus={() => setShowResults(true)}
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
      {showResults && search.length > 0 && (
        <div className="absolute  top-20 right-0 md:right-16 flex flex-col w-full md:max-w-[440px] max-h-[640px] p-4 shadow-[2px_2px_6px_0_rgba(0,0,0,0.14)] bg-white ml-auto overflow-y-auto"> 
          {loading && (
            <div className="p-4 text-sm text-gray-500">Searching...</div>
          )}

          {!loading && books.length === 0 && search.length >= 2 && (
            <div className="p-4 text-sm text-gray-500">
              No books found
            </div>
          )}
          
          {!loading && books.map((book) => (
          <SearchCard key={book.id} book={book} />
        ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;