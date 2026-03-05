import { FaHeadphones, FaRegLightbulb, FaRegStar } from "react-icons/fa"
import Skeleton from "../Skeleton"
import { RxStopwatch } from "react-icons/rx"
export const BookSkeleton = () => {
  return (
    <div className="book__wrapper flex-col">
      <div className="book--img-wrapper flex justify-center mb-8">
        <Skeleton width="300px" height="300px" />
      </div>
      <div className="book__inner-wrapper">
        <div className="book__title text-[24px] md:text-[32px] text-[#032b41] mb-4 font-semibold">
            <Skeleton width="70%" />
        </div>
        <div className="book__author md:text-[14px] text-[#032b41] mb-4 font-semibold">
            <Skeleton width="50%" />
        </div>
        <div className="book__sub--title text-[18px] md:text-[20px] text-[#032b41] mb-4 font-light">
            <Skeleton width="60%" />
        </div>
        <div className="book__wrapper border-t border-b border-[#e1e7ea]">
          <div className="book__description--wrapper flex flex-wrap max-w-[400px] p-3">
            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px] mr-1">
                <FaRegStar />
              </div>
              <div className="book__overall--rating mx-1">
                <Skeleton width="30px" />
              </div>
              <div className="book__total--rating">
                <Skeleton width="30px" />
              </div>
            </div>

            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px]">
                <RxStopwatch />
              </div>
              <div className="book__duration mx-1">
                <Skeleton width="50px" />
              </div>
            </div>
            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px] mb-3">
              <div className="book__icon text-[24px]">
                <FaHeadphones />
              </div>
              <div className="book__type mx-1">
                <Skeleton width="50px" />
              </div>
            </div>

            <div className="book__description flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
              <div className="book__icon text-[24px]">
                <FaRegLightbulb />
              </div>
              <div className="book__key--ideas mx-1">
                <Skeleton width="100px" />
              </div>
            </div>
          </div>
        </div>

        <Skeleton width="30px" height="30px" className="mb-4" />

        <Skeleton width="100%" height="20px" className="mb-2" />

        <h2 className="book__secondary--title text-[18px] text-[#032b41] mb-4 font-semibold">
          What's it about?
        </h2>

        <div className="book__tags--wrapper flex flex-wrap gap-4 mb-4">
            <Skeleton width="60px" height="20px" />
        </div>

        <div className="book__book--description text-[14px] text-[#032b41] mb-4 leading-normal">
          <Skeleton width="100%" height="20px" className="mb-2" />
        </div>

        <h2 className="book__secondary--title text-[18px] text-[#032b41] mb-4 font-semibold">
          About the author
        </h2>

        <div className="book__author--description  text-[14px] text-[#032b41] mb-4 leading-normal">
            <Skeleton width="100%" height="20px" className="mb-2" />
        </div>
      </div>
    </div>
  )
}