import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const page = () => {
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

    return book.json();
  }

  return (
    <div className="row">
      <div className="container__no-cap">
        <div className="for-you__wrapper ">
          <div className="for-you__title text-[22px] font-bold text-[#032b41] mb-4">Selected just for you</div>
          <Link className="selected__book" href="/book/f9gy1gpai8">
            <div className="selected__book--sub-title">
              How Constant Innovation Creates Radically Successful Businesses
            </div>
            <div className="selected__book--line" />
            <div className="selected__book--content">
              <div className="selected__book--content">
                <figure className="book__image--wrapper">
                  <Image className="book__image" src="" alt="book" />
                </figure>
                <div className="selected__book--text">
                  <div className="selected__book--title">The Lean Startup</div>
                  <div className="selected__book--author">Eric Ries</div>
                  <div className="selected__book--duration-wrapper">
                    <div className="selected__book--icon">
                      <FaCirclePlay />
                    </div>
                    <div className="selected__book--duration">
                      3 mins 23 secs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
