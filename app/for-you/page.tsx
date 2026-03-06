import SelectedBook from "../components/For-you/SelectedBook";
import RecommendedBooks from "../components/For-you/RecommendedBooks";
import SuggestedBooks from "../components/For-you/SuggestedBooks";
import Navbar from "../components/Navbar";
import { Suspense } from "react";
import Skeleton from "../components/Skeleton";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="container__no-cap">
          <Suspense fallback={<Skeleton height="250px" className="my-4"/>}>
            <SelectedBook />
          </Suspense>
          <Suspense fallback={<Skeleton height="250px" className="my-4"/>}>
            <RecommendedBooks />
          </Suspense>
          <Suspense fallback={<Skeleton height="250px" className="my-4"/>}>
            <SuggestedBooks />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default page;