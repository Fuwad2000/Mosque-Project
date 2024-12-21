import React from "react";

const page = () => {
  return (
    <div className="grid place-items-center h-[600px]">
      <div className="g shadow-lg shadow-green-800">
        <iframe
          className="w-[100%] h-[430px]  border border-solid text-zinc-700;"
          src="https://www.islamicfinder.org/specialislamicdays"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
