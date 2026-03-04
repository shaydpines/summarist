import Image from "next/image";
import { AiFillFileText } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import ChoosePlan from "../components/Choose-plan/ChoosePlan";
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
          <ChoosePlan />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
