import React from "react";
import type { BookType } from "@/app/types/book";
import BookCard from "../BookCard";

async function getRecommendedBooks(): Promise<BookType[]> {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}

const RecommendedBooks = async () => {
  const books = await getRecommendedBooks();

  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <>
      <div className="for-you__title text-[22px] font-bold text-[#032b41] mb-4">
        Recommended for you
      </div>
      <div className="for-you__sub--title font-light text-[#394547] mb-4">
        We think you'll like these
      </div>
      <div className="for-you__recommended--books no-scrollbar flex overflow-x-auto gap-4 snap-x snap-mandatory mb-8 scroll-smooth">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default RecommendedBooks;
