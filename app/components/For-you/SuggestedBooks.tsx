import React from 'react'
import BookCard from '../BookCard';
import { BookType } from '@/app/types/book';

async function getSuggestedBooks(): Promise<BookType[]> {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}

const SuggestedBooks = async () => {
  const books = await getSuggestedBooks();

  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <>
      <div className="for-you__title text-[22px] font-bold text-[#032b41] mb-4">
        Suggested Books
      </div>
      <div className="for-you__sub--title font-light text-[#394547] mb-4">
        Browse suggested books
      </div>
      <div className="for-you__suggested--books no-scrollbar flex overflow-x-auto gap-4 snap-x snap-mandatory mb-8 scroll-smooth">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};


export default SuggestedBooks