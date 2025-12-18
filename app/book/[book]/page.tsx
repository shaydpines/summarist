import Book from "@/app/components/Book";

type BookType = {
  title: string;
  author: string;
  subTitle: string;
  averageRating: number;
  totalRating: number;
  type: string;
  keyIdeas: number;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
  imageLink: string;
};

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
  const books = await getSelectedBook();

  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <div className="container">
      {books.map((book) => (
        <Book key={book.imageLink} book={book} />
      ))}
    </div>
  );
};

export default Page;



