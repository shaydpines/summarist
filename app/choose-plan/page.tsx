import Image from "next/image";
import React from "react";
import { AiFillFileText } from "react-icons/ai";
import { FaHandshake, FaSeedling } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiFileTextFill, RiPlantFill } from "react-icons/ri";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="plan w-full">
      <div className="plan__header--wrapper relative text-center w-full pt-12 mb-6 before:content[''] before:rounded-b-none md:before:rounded-b-full before:absolute before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full before:bg-[#032b41]">
        <div className="plan__header max-w-[1000px] my-0 mx-auto text-white px-6">
          <div className="plan__title text-[26px] md:text-[48px] mb-8 md:mb-10 font-bold ">
            Get unlimited access to many amazing books to read
          </div>
          <div className="plan__sub--title text-[16px] md:text-[20px] mb-8">
            Turn ordinary moments into amazing learning opportunities
          </div>
          <figure className="plan__img--mask flex justify-center max-w-[340px] my-0 mx-auto rounded-t-full overflow-hidden">
            <Image
              src="/images/pricing-top.png"
              alt="pricing"
              width={860}
              height={722}
            />
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="container__no-cap">
          <div className="plan__features--wrapper grid-cols-1 md:grid-cols-3 justify-center text-center gap-6 max-w-[800px] mt-0 mx-auto mb-14">
            <div className="plan__features mb-6">
              <figure className="plan__features--icon flex justify-center text-[#032b41] mb-3">
                <AiFillFileText className="text-[60px]" />
              </figure>
              <div className="plan__features--text text-[#032b41] leading-normal">
                <b>Key ideas in just a few minutes</b> with many books to read
              </div>
            </div>
            <div className="plan__features mb-6">
              <figure className="plan__features--icon flex justify-center text-[#032b41] mb-3">
                <RiPlantFill className="text-[60px]" />
              </figure>
              <div className="plan__features--text  text-[#032b41] leading-normal">
                <b>3 million</b> people growing with Summarist everyday
              </div>
            </div>
            <div className="plan__features">
              <figure className="plan__features--icon flex justify-center text-[#032b41] mb-3">
                <FaHandshake className="text-[60px]" />
              </figure>
              <div className="plan__features--text text-[#032b41] leading-normal">
                <b>Precise recommendations</b> collections curated by experts
              </div>
            </div>
          </div>
          <div className="section__title">Choose the plan that fits you</div>
          <div className="plan__card flex gap-6 p-6 bg-[#f1f6f4] border-4 border-[#bac8ce] rounded-sm cursor-pointer max-w-[680px] my-0 mx-auto">
            <div className="plan__card--circle relative w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
              <div className="plan__card--dot absolute w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
            <div className="plan__card--content">
              <div className="plan__card--title text-[16px] md:text-[18px] font-semibold text-[#032b41] mb-2">
                Premium Plus Yearly
              </div>
              <div className="plan__card--price text-[20px] md:text-[24px] font-bold text-[#032b41] mb-2">
                $99.99/year
              </div>
              <div className="plan__card--text text-[12px] md:text-[14px] text-[#6b757b]">
                7-day free trial included
              </div>
            </div>
          </div>
          <div className="plan__card--separator text-[14px] text-[#6b757b] flex items-center gap-2 max-w-60 my-6 mx-auto before:content-[''] before:grow before:h-px before:bg-[#bac8ce] after:content-[''] after:grow after:h-px after:bg-[#bac8ce]">
            <div className="plan__separator">or</div>
          </div>
          <div className="plan__card flex gap-6 p-6 bg-[#f1f6f4] border-4 border-[#bac8ce] rounded-sm cursor-pointer max-w-[680px] my-0 mx-auto">
            <div className="plan__card--circle plan__card--circle relative w-6 h-6 rounded-full border-2 border-black flex items-center justify-center"></div>
            <div className="plan__card--content">
              <div className="plan__card--title text-[16px] md:text-[18px] font-semibold text-[#032b41] mb-2">
                Premium Monthly
              </div>
              <div className="plan__card--price text-[20px] md:text-[24px] font-bold text-[#032b41] mb-2">
                $9.99/month
              </div>
              <div className="plan__card--text text-[12px] md:text-[14px] text-[#6b757b]">
                No trial included
              </div>
            </div>
          </div>
          <div className="plan__card--cta bg-white sticky bottom-0 z-10 py-8 px-0 flex flex-col items-center gap-4">
            <span className="btn--wrapper">
              <button className="btn btn__green px-15">
                <span>Start your free 7-day trial</span>
              </button>
            </span>
            <div className="plan__disclaimer text-[12px] text-[#6b757b] text-center">
              Cancel your trial at any time before it ends, and you won’t be
              charged.
            </div>
          </div>
          <div className="faq__wrapper ">
            <div className="accordion__card border-b-[#ddd] mb-2 overflow-hidden">
              <div className="accordion__header flex justify-between items-center cursor-pointer py-6 gap-2">
                <div className="accordion__title text-[20px] md:text-[24px] relative mb-0 text-[#032b41] transition-all duration-300">
                  How does the free 7-day trial work?
                </div>
                <IoIosArrowDown className="accordion__icon text-[24px] min-w-6 transition-transform duration-300" />
              </div>
              <div
                className="collapse relative h-0 overflow-hidden transition-all ease-in-out duration-350" /*style="height: 108px;"*/
              >
                <div className="accordion__body md:text-[14px] min-h-px pb-6 text-[#394547] leading-normal">
                  Begin your complimentary 7-day trial with a Summarist annual
                  membership. You are under no obligation to continue your
                  subscription, and you will only be billed when the trial
                  period expires. With Premium access, you can learn at your own
                  pace and as frequently as you desire, and you may terminate
                  your subscription prior to the conclusion of the 7-day free
                  trial.
                </div>
              </div>
            </div>
            <div className="accordion__card border-b-[#ddd] mb-2 overflow-hidden">
              <div className="accordion__header flex justify-between items-center cursor-pointer py-6 gap-2">
                <div className="accordion__title text-[20px] md:text-[24px] relative mb-0 text-[#032b41] transition-all duration-300">
                  Can I switch subscriptions from monthly to yearly, or yearly
                  to monthly?
                </div>
                <IoIosArrowDown className="accordion__icon text-[24px] min-w-6 transition-transform duration-300" />
              </div>
              <div
                className="collapse relative h-0 overflow-hidden transition-all ease-in-out duration-350" /*style="height: 108px;"*/
              >
                <div className="accordion__body md:text-[14px] min-h-px pb-6 text-[#394547] leading-normal">
                  While an annual plan is active, it is not feasible to switch
                  to a monthly plan. However, once the current month ends,
                  transitioning from a monthly plan to an annual plan is an
                  option.
                </div>
              </div>
            </div>
            <div className="accordion__card border-b-[#ddd] mb-2 overflow-hidden">
              <div className="accordion__header flex justify-between items-center cursor-pointer py-6 gap-2">
                <div className="accordion__title text-[20px] md:text-[24px] relative mb-0 text-[#032b41] transition-all duration-300">
                  What's included in the Premium plan?
                </div>
                <IoIosArrowDown className="accordion__icon text-[24px]  min-w-6  transition-transform duration-300" />
              </div>
              <div
                className="collapse relative h-0 overflow-hidden transition-all ease-in-out duration-350" /*style="height: 108px;"*/
              >
                <div className="accordion__body md:text-[14px] min-h-px pb-6 text-[#394547] leading-normal">
                  Premium membership provides you with the ultimate Summarist
                  experience, including unrestricted entry to many best-selling
                  books high-quality audio, the ability to download titles for
                  offline reading, and the option to send your reads to your
                  Kindle.
                </div>
              </div>
            </div>
            <div className="accordion__card border-b-[#ddd] mb-2 overflow-hidden">
              <div className="accordion__header flex justify-between items-center cursor-pointer py-6 gap-2">
                <div className="accordion__title text-[20px] md:text-[24px] relative mb-0 text-[#032b41] transition-all duration-300">
                  Can I cancel during my trial or subscription?
                </div>
                <IoIosArrowDown className="accordion__icon text-[24px] min-w-6  transition-transform duration-300" />
              </div>
              <div
                className="collapse relative h-0 overflow-hidden transition-all ease-in-out duration-350" /*style="height: 108px;"*/
              >
                <div className="accordion__body md:text-[14px] min-h-px pb-6 text-[#394547] leading-normal">
                  You will not be charged if you cancel your trial before its
                  conclusion. While you will not have complete access to the
                  entire Summarist library, you can still expand your knowledge
                  with one curated book per day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
