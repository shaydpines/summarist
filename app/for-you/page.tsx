import React from "react";
import SelectedBook from "../components/For-you/SelectedBook";
import RecommendedBooks from "../components/For-you/RecommendedBooks";

const page = () => {
  return (
    <div className="row">
      <div className="container__no-cap">
        <SelectedBook />
        <RecommendedBooks />
      </div>
    </div>
  );
};

export default page;
