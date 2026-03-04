"use client";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const ChoosePlan = () => {
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "monthly">(
    "yearly"
  );

  const faqs = [
    {
      title: "How does the free 7-day trial work?",
      body: `Begin your complimentary 7-day trial with a Summarist annual
    membership. You are under no obligation to continue your subscription, and
    you will only be billed when the trial period expires. With Premium access,
    you can learn at your own pace and as frequently as you desire, and you may
    terminate your subscription prior to the conclusion of the 7-day free trial.`,
    },
    {
      title:
        "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
      body: `While an annual plan is active, it is not feasible to switch to a
    monthly plan. However, once the current month ends, transitioning from a
    monthly plan to an annual plan is an option.`,
    },
    {
      title: "What's included in the Premium plan?",
      body: `Premium membership provides you with the ultimate Summarist experience,
    including unrestricted entry to many best-selling books, high-quality audio,
    the ability to download titles for offline reading, and the option to send
    your reads to your Kindle.`,
    },
    {
      title: "Can I cancel during my trial or subscription?",
      body: `You will not be charged if you cancel your trial before its conclusion.
    While you will not have complete access to the entire Summarist library, you
    can still expand your knowledge with one curated book per day.`,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const selectPlan = (plan: "yearly" | "monthly") => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <div className="section__title">Choose the plan that fits you</div>
      <div
        onClick={() => selectPlan("yearly")}
        className={`plan__card flex gap-6 p-6 bg-[#f1f6f4] border-4 rounded-sm cursor-pointer max-w-[680px] my-0 mx-auto ${
          selectedPlan === "yearly" ? "border-[#2be080]" : "border-[#bac8ce]"
        }`}
      >
        <div className="plan__card--circle relative w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
          {selectedPlan === "yearly" && (
            <div className="plan__card--dot absolute w-1.5 h-1.5 bg-black rounded-full"></div>
          )}
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
      <div
        onClick={() => selectPlan("monthly")}
        className={`plan__card flex gap-6 p-6 bg-[#f1f6f4] border-4 rounded-sm cursor-pointer max-w-[680px] my-0 mx-auto ${
          selectedPlan === "monthly" ? "border-[#2be080]" : "border-[#bac8ce]"
        }`}
      >
        <div className="plan__card--circle plan__card--circle relative w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
          {selectedPlan === "monthly" && (
            <div className="plan__card--dot absolute w-1.5 h-1.5 bg-black rounded-full"></div>
          )}
        </div>
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
      <div className="faq__wrapper">
        {faqs.map((faq, index) => {
          const isOpen = openAccordions.includes(index);

          return (
            <div
              key={index}
              className="accordion__card border-b border-b-[#ddd] mb-2"
            >
              <div
                onClick={() => toggleAccordion(index)}
                className="accordion__header flex justify-between items-center cursor-pointer py-6 gap-2"
              >
                <div className="accordion__title text-[20px] md:text-[24px] text-[#032b41] transition-all duration-300">
                  {faq.title}
                </div>

                <IoIosArrowDown
                  className={`accordion__icon text-[24px] min-w-6 transition-transform duration-300
              ${isOpen ? "rotate-180" : ""}`}
                />
              </div>

              <div
                ref={(el) => {
                  if (!el) return;
                  el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : "0px";
                }}
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              >
                <div className="accordion__body md:text-[14px] pb-6 text-[#394547] leading-normal">
                  {faq.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChoosePlan;
