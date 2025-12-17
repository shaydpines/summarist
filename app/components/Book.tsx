import React from "react";
import Image from "next/image";

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

type BookProps = {
  book?: BookType;
};

const Book: React.FC<BookProps> = ({ book }) => {
  if (!book) {
    return (
      <div className="container">
        <p>Book not found</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="inner__wrapper">
        <div className="inner__book">
          <div className="inner-book__title">{book.title}</div>
          <div className="inner-book__author">{book.author}</div>
          <div className="inner-book__sub--title">{book.subTitle}</div>

          <div className="inner-book__wrapper">
            <div className="inner-book__description--wrapper">
              <div className="inner-book__description">
                <div className="inner-book__icon">★</div>
                <div className="inner-book__overall--rating">
                  {book.averageRating}
                </div>
                <div className="inner-book__total--rating">
                  {book.totalRating}
                </div>
              </div>

              <div className="inner-book__description">
                <div className="inner-book__icon">⏱</div>
                <div className="inner-book__duration">04:52</div>
              </div>

              <div className="inner-book__description">
                <div className="inner-book__icon">🎧</div>
                <div className="inner-book__type">{book.type}</div>
              </div>

              <div className="inner-book__description">
                <div className="inner-book__icon">💡</div>
                <div className="inner-book__key--ideas">
                  {book.keyIdeas}
                </div>
              </div>
            </div>
          </div>

          <div className="inner-book__read--btn-wrapper">
            <button type="button" className="inner-book__read--btn">
              <span className="inner-book__read--text">Read</span>
            </button>

            <button type="button" className="inner-book__read--btn">
              <span className="inner-book__read--text">Listen</span>
            </button>
          </div>

          <div className="inner-book__bookmark">
            <div className="inner-book__bookmark--icon">🔖</div>
            <div className="inner-book__bookmark--text">
              Add title to My Library
            </div>
          </div>

          <h2 className="inner-book__secondary--title">What's it about?</h2>

          <div className="inner-book__tags--wrapper">
            {book.tags.length > 0 ? (
              book.tags.map((tag, index) => (
                <div key={index} className="inner-book__tag">
                  {tag}
                </div>
              ))
            ) : (
              <div className="inner-book__tag">No tags available</div>
            )}
          </div>

          <div className="inner-book__book--description">
            {book.bookDescription}
          </div>

          <h2 className="inner-book__secondary--title">About the author</h2>

          <div className="inner-book__author--description">
            {book.authorDescription}
          </div>
        </div>

        <div className="inner-book--img-wrapper">
          <figure className="book__image--wrapper">
            <Image
              src={book.imageLink}
              alt={book.title}
              width={1200}
              height={1200}
              className="book__image"
              priority
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Book;
