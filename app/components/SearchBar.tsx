import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const SearchBar = () => {
  return (
    <div className="search__background bg-white border-b border-[#e1e7ea] h-20 w-full z-10 sticky top-0">
      <div className="search__wrapper relative flex items-center px-16 h-full justify-end">
        <div className="search__content flex items-center gap-6 max-w-[340px] w-full">
          <div className="search flex items-center w-full">
            <div className="search__input--wrapper relative gap-2 flex items-center w-full">
              <input
                className="search__input h-10 w-full px-4 outline-none bg-[#f1f6f4] rounded-lg text-[#042330] text-[14px] border-2 border-[#e1e7ea]"
                placeholder="Search for books"
                type="text"
                value=""
              />
              <div className="search__icon flex items-center absolute h-full right-2 px-2 justify-content-flex-end gap-2 border-l-2 border-[#e1e7ea]">
                <IoIosSearch className="text-[#03314b] text-[24px]" />
              </div>
            </div>
          </div>
          <div className="sidebar__toggle--btn md:hidden flex items-center justify-center cursor-pointer">
           <RxHamburgerMenu className="text-[24px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
