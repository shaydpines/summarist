import Book from "@/app/components/Book";
import type { BookType } from "@/app/types/book";

type PageProps = {
  params: Promise<{ id: string }>;
};

async function getSelectedBook(id: string): Promise<BookType | null> {
  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const book = await getSelectedBook(id);

  if (!book) {
    return <p>No book found.</p>;
  }

  return (
    <div className="row">
      <div className="container__no-cap">
        <Book book={book} />
      </div>
    </div>
  );
}
