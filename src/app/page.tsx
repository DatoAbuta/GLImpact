"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Map from "../../public/images/map.svg";
import Globe from "../../public/images/globe.svg";
import Ground from "../../public/images/ground.svg";
import Entire from "../../public/images/entiremap.svg";
import Cloud from "../../public/images/cloud.png";
import Success from "../../public/images/success.svg";
import { useState } from "react";

export default function Home() {
  const CO2_VALUES = [10000, 12000, 15000, 20000, 25000, 30000, 35000];
  const SATISFACTION_VALUES = [80, 85, 88, 90, 95, 98, 100];

  const [co2Value, setCO2Value] = useState(CO2_VALUES[0]);
  const [satisfactionValue, setSatisfactionValue] = useState(
    SATISFACTION_VALUES[0]
  );

  let co2Interval: NodeJS.Timeout;
  let satisfactionInterval: NodeJS.Timeout;

  const handleHover = () => {
    let co2Index = 0;
    let satisfactionIndex = 0;

    co2Interval = setInterval(() => {
      setCO2Value(CO2_VALUES[co2Index]);
      co2Index++;
      if (co2Index === CO2_VALUES.length) clearInterval(co2Interval);
    }, 200);

    satisfactionInterval = setInterval(() => {
      setSatisfactionValue(SATISFACTION_VALUES[satisfactionIndex]);
      satisfactionIndex++;
      if (satisfactionIndex === SATISFACTION_VALUES.length)
        clearInterval(satisfactionInterval);
    }, 200);
  };

  const handleLeave = () => {
    clearInterval(co2Interval);
    clearInterval(satisfactionInterval);
    setCO2Value(CO2_VALUES[0]);
    setSatisfactionValue(SATISFACTION_VALUES[0]);
  };
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <section className="relative">
        <div
          className="relative cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <Image
            className="w-full h-auto opacity-70"
            src={Entire}
            alt="Background Image"
          />

          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-center text-green-700">
            <div className="flex justify-around w-3/4 mx-auto">
              <div className="flex flex-col items-center">
                <Image className="mb-2" src={Cloud} alt="CO2 Icon" />
                <p className="text-[#023300] font-poppins text-2xl font-normal leading-normal">
                  Tons Of CO2 Reduced
                </p>
                <p className="text-[#023300] font-poppins text-4xl font-semibold leading-normal">
                  {co2Value.toLocaleString()} +
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image className="mb-2" src={Success} alt="Success Icon" />
                <p className="text-[#023300] font-poppins text-2xl font-normal leading-normal">
                  Customer Satisfaction
                </p>
                <p className="text-[#023300] font-poppins text-4xl font-semibold leading-normal">
                  {satisfactionValue} %
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex gap-8 justify-center items-center">
        <h1 className="text-black font-poppins text-4xl font-normal leading-normal">
          Our Impact Worldwide
        </h1>
        <div className="h-[1px] w-[888px] bg-green-600"></div>
      </div>

      <div>
        <Image src={Map} alt="Map" className="bg-blend-darken" />
      </div>

      <div className="flex gap-8 justify-center items-center">
        <h1 className="text-black font-poppins text-4xl font-normal leading-normal">
          Key Impact Areas
        </h1>
        <div className="h-[1px] w-[888px] bg-green-600"></div>
      </div>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -1200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-200 flex items-start flex-col justify-center greendiv mt-[77px] relative"
        >
          <Image src={Globe} alt="Globe" className="absolute left-[-70px]" />
          <div className="w-[781px]">
            <h1 className="text-[#0C4E0A] font-poppins text-2xl font-normal leading-normal mb-5">
              Comprehensive Regulatory Compliance
            </h1>
            <p className="text-black font-poppins text-base font-normal leading-normal">
              Proactively cover international, national, and state-wide
              regulations and protocols in real-time, ensuring alignment with
              the latest standards and fostering global, national, and local
              regulatory adherence.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 1200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-200 flex items-start flex-col justify-center greendiv mt-[77px] relative"
        >
          <div className="w-[781px]">
            <h1 className="text-[#0C4E0A] font-poppins text-2xl font-normal leading-normal text-right mb-5">
              Carbon Footprint Reduction
            </h1>
            <p className="text-black font-poppins text-base font-normal leading-normal">
              Implement strategies to lower carbon emissions across all
              production processes, prioritizing low-impact practices,
              sustainable energy use, and emission-reducing technologies to
              support a cleaner environment.
            </p>
          </div>
          <Image src={Ground} alt="Globe" className="absolute right-[-70px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -1200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-200 flex items-start flex-col justify-center greendiv mt-[77px] relative"
        >
          <Image src={Globe} alt="Globe" className="absolute left-[-70px]" />
          <div className="w-[781px]">
            <h1 className="text-[#0C4E0A] font-poppins text-2xl font-normal leading-normal mb-5">
              Cost Efficiency through Sustainability:
            </h1>
            <p className="text-black font-poppins text-base font-normal leading-normal">
              Drive cost savings by optimizing resource usage, reducing waste,
              and adopting sustainable practices that streamline production,
              leading to long-term financial benefits.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 1200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-200 flex items-start flex-col justify-center greendiv mt-[77px] relative"
        >
          <div className="w-[781px]">
            <h1 className="text-[#0C4E0A] font-poppins text-2xl font-normal leading-normal text-right mb-5">
              Innovation-Driven Sustainability:
            </h1>
            <p className="text-black font-poppins text-base font-normal leading-normal">
              Foster a culture of continuous improvement and innovation,
              adopting cutting-edge sustainable technologies and practices that
              set a new industry standard for environmentally responsible
              production.
            </p>
          </div>
          <Image src={Ground} alt="Globe" className="absolute right-[-70px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -1200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-200 flex items-start flex-col justify-center greendiv mt-[77px] relative"
        >
          <Image src={Globe} alt="Globe" className="absolute left-[-70px]" />
          <div className="w-[781px]">
            <h1 className="text-[#0C4E0A] font-poppins text-2xl font-normal leading-normal mb-5">
              Positive Environmental Stewardship:
            </h1>
            <p className="text-black font-poppins text-base font-normal leading-normal">
              Actively demonstrate environmental responsibility, enhancing the
              organization’s reputation as a leader in sustainability and
              contributing positively to the communities and ecosystems involved
              in production.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 1200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-200 flex items-start flex-col justify-center greendiv mt-[77px] relative"
        >
          <div className="w-[781px]">
            <h1 className="text-[#0C4E0A] font-poppins text-2xl font-normal leading-normal text-right mb-5">
              Enhanced Long-Term Brand Value:
            </h1>
            <p className="text-black font-poppins text-base font-normal leading-normal">
              Build a resilient and trusted brand by prioritizing sustainable
              practices that resonate with consumers, partners, and
              stakeholders, establishing long-term value and credibility.
            </p>
          </div>
          <Image src={Ground} alt="Globe" className="absolute right-[-70px]" />
        </motion.div>
      </section>

      <footer className="w-screen h-[464px] bg-green-700 mt-[140px]"></footer>
    </div>
  );
}
