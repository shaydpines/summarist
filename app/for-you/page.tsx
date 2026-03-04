import SelectedBook from "../components/For-you/SelectedBook";
import RecommendedBooks from "../components/For-you/RecommendedBooks";
import SuggestedBooks from "../components/For-you/SuggestedBooks";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
    <Navbar />
    <div className="row">
      <div className="container__no-cap">
        <SelectedBook />
        <RecommendedBooks />
        <SuggestedBooks />
      </div>
    </div>
    </>
  );
};

export default page;
