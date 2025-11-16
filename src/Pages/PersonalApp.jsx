import React from "react";

const PersonalApp = () => {
  return (
    <div className="p-40 flex flex-col gap-20">
      <div className=" h-40 w-full p-10 bg-black/20 backdrop-blur-sm rounded-xl">
        <h1>Todo App</h1>
        <p>Đây là mô tả về App</p>
      </div>

      <div className=" h-40 w-full p-10 bg-black/20 backdrop-blur-sm rounded-xl">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default PersonalApp;
