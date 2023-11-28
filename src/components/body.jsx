import React from "react";

const Body = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          src="./assets/Blue-Shape.svg"
          alt=""
          className="-rotate-[45deg] h-64"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt=""
          className="absolute -rotate-[30deg] h-64"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt=""
          className="absolute -rotate-[15deg] h-64"
        />
        <img src="./assets/Hero-Model.png" alt="" className="absolute h-64" />
      </div>
      <div>
        <h1 className="text-5xl leading-tight">
          Host Your Website in less than 5 minutes
        </h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          repellat!
        </p>
        <form action="" className="flex flex-col gap-4 my-4">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-3 rounded-2xl border-[#ccc] border-2"
          />
          <button>Join Wait List</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Body;
