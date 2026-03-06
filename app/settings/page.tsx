import React from "react";

const page = () => {
  return (
    <div className="container__no-cap">
      <div className="row">
        <div className="section__title border-b border-[#e1e7ea] pb-4 mb-8">Settings</div>
        <div className="setting__content flex flex-col items-start gap-2 pb-4 mb-8 border-b border-[#e1e7ea]">
          <div className="settings__sub--title text-[18px] font-bold text-[#032b41]">Your Subscription plan</div>
          <div className="settings__text text-[#032b41]">Basic</div>
          <a className="btn btn__green btn__upgrade w-[180px]" href="/choose-plan">
            Upgrade to Premium
          </a>
        </div>
        <div className="setting__content flex flex-col items-start gap-2 pb-4 mb-8 border-b border-[#e1e7ea]">
          <div className="settings__sub--title text-[18px] font-bold text-[#032b41]">Email</div>
          <div className="settings__text text-[#032b41]">oceanrooster@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default page;
