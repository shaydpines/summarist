import Book from "@/app/components/Book";
import type { BookType } from "@/app/types/book"



async function getSelectedBook(): Promise<BookType[]> {
  const book = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
    {
      cache: "no-store",
    }
  );

  if (!book.ok) {
    throw new Error("Failed to fetch book");
  }

  return book.json()
}

const Page = async () => {
  const book = await getSelectedBook();

  if (book.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <div className="container">
      {book.map((book) => (
        <Book key={book.imageLink} book={book} />
      ))}
    </div>
  );
};

export default Page;



