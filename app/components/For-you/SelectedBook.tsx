import Link from "next/link";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import type { BookType } from "@/app/types/book";
import AudioPlayer from "../AudioPlayer";

async function getSelectedBook(): Promise<BookType[]> {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch book");
  }

  return res.json();
}

const SelectedBook = async () => {
  const books = await getSelectedBook();

  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  const book = books[0];

  return (
    <>
      <div className="for-you__wrapper ">
        <div className="for-you__title text-[22px] font-bold text-[#032b41] mb-4">
          Selected just for you
        </div>
        <Link
          className="selected__book inline-flex justify-between bg-[#fbefd6] rounded p-6 mb-6 gap-6"
          href={`/book/${book.id}`}
        >
          <div className="selected__book--sub-title text-[14px] text-[#032b41]">
            {book.subTitle}
          </div>
          <div className="selected__book--line hidden" />
          <div className="selected__book--content flex gap-4">
            <figure className="book__image--wrapper h-[140px] w-[140px]">
              <Image
                className="book__image block"
                src={book.imageLink}
                width="172"
                height="172"
                alt="book"
              />
            </figure>
            <div className="selected__book--text">
              <div className="selected__book--title font-semibold text-[#032b41] mb-2">
                {book.title}
              </div>
              <div className="selected__book--author text-[14px] text-[#394547] mb-4">
                {book.author}
              </div>
              <div className="selected__book--duration-wrapper flex items-center gap-2">
                <AudioPlayer audioLink={book.audioLink} buttonClassName="text-4xl" />
                {/* <div className="selected__book--icon flex items-center w-10 h-10">
                    <FaCirclePlay />
                  </div>
                  <div className="selected__book--duration text-[14px] font-medium text-[#032b41]">
                    3 mins 23 secs
                  </div> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SelectedBook;
