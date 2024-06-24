import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FrequentlyAsk = ({ faqs: { item, title, text } }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12">
      <div className="app-container">
        <h1 className="text-center text-4xl lg:text-3xl md:text-2xl sm:text-xl py-4 font-semibold">
          {title}
        </h1>
        <p className="text-center md:text-sm ">{text}</p>
        {item?.map((v, index) => (
          <div key={index} className="bg-slate-100/80 rounded-xl mt-3">
            <button
              className="flex w-full justify-between rounded-lg  px-4 py-3 mb-2 font-medium text-black md:text-sm sm:text-xs"
              onClick={() => toggleAnswer(index)}
            >
              {v.question}
              {openIndex === index ? (
                <ChevronUpIcon className="w-7 h-7 bg-lime-400 rounded-full p-1" />
              ) : (
                <ChevronDownIcon className="w-7 h-7 bg-lime-400 rounded-full p-1" />
              )}
            </button>
            {openIndex === index && (
              <p className="text-gray-700 flex w-full justify-between  px-4 mb-2  text-sm pb-2 border-t-2 border-white md:text-sm sm:text-xs">
                {v.answer}
              </p>
            )}
          </div>
        ))}
        <div className="flex items-center sm:flex-col justify-center gap-3 mt-6">
          <h3 className="text-xs">Can't find Your Question?</h3>
          <button type="button" className="text-xs button-theme border-2">
            Contact Customor Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
