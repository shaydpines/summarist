"use client";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useModal } from "@/app/context/ModalContext";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

type BookmarkProps = {
  id: string;
};

const Bookmark = ({ id }: BookmarkProps) => {
  const [bookmark, setBookmark] = useState(false);
  const { user } = useAuth();
  const { openLogin } = useModal();
  const toggleBookmarked = () => {
    setBookmark(!bookmark)
  }

  return (
    <button
      type="button"
      onClick={user? toggleBookmarked : openLogin }
      className="book__bookmark flex items-center gap-2 text-[#0365f2] font-medium mb-10 text-[16px] md:text-[18px] transition-colors duration-200 hover:text-[#044298]"
    >
      <div className="book__bookmark--icon">
        {bookmark? <FaBookmark /> : <FaRegBookmark />}
      </div>
      <div className="book__bookmark--text">{bookmark? 'Remove title from' : 'Add title to'} My Library</div>
    </button>
  );
};

export default Bookmark;
