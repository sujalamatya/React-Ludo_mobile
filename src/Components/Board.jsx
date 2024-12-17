import React from "react";
import Home from "./Home";
export default function Board() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-600 to-blue-950 p-4">
        <div className="flex flex-wrap content-start h-[45vh] w-[45vh] border border-black bg-white rounded-3xl">
          <div className="h-[40%] w-[40%] p-[1.5rem] bg-red-600 rounded-tl-3xl">
            {/* red home */}
            <Home className={"  bg-red-500"} />
          </div>
          <div className="h-[40%] w-[20%] border border-gray-600 grid grid-cols-3 grid-rows-6">
            {/* red green mid */}
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-green-600"></div>
            <div className="border border-gray-600 bg-green-600"></div>
            <div className="border border-gray-600 bg-gray-400"></div>
            <div className="border border-gray-600 bg-green-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-green-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-green-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-green-600"></div>
            <div className="border border-gray-600"></div>
          </div>
          <div className="h-[40%] w-[40%] p-[1.5rem] bg-green-600 rounded-tr-3xl">
            {/* green home */}
            <Home className={"  bg-green-600"} />
          </div>
          <div className="h-[20%] w-[40%] border border-gray-600 mt-0  grid grid-cols-6 grid-rows-3">
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-red-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-red-600"></div>
            <div className="border border-gray-600 bg-red-600"></div>
            <div className="border border-gray-600 bg-red-600"></div>
            <div className="border border-gray-600 bg-red-600"></div>
            <div className="border border-gray-600 bg-red-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-gray-400"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
          </div>
          <div className="h-[20%] w-[20%] mt-0 relative bg-gray-200 border border-black">
            {/* FINISH all triangles in between*/}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[2.2rem] border-l-transparent border-r-[2.2rem] border-r-transparent border-t-[2.2rem] border-t-green-600"></div>

            {/* Right triangle */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-t-[2.2rem] border-t-transparent border-b-[2.2rem] border-b-transparent border-r-[2.2rem] border-r-yellow-400"></div>

            {/* Bottom triangle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[2.2rem] border-l-transparent border-r-[2.2rem] border-r-transparent border-b-[2.2rem] border-b-blue-600"></div>

            {/* Left triangle */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-0 border-t-[2.2rem] border-t-transparent border-b-[2.2rem] border-b-transparent border-l-[2.2rem] border-l-red-600"></div>
          </div>
          <div className="h-[20%] w-[40%] border border-gray-600 mt-0  grid grid-cols-6 grid-rows-3">
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-gray-400"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-yellow-400"></div>
            <div className="border border-gray-600 bg-yellow-400"></div>
            <div className="border border-gray-600 bg-yellow-400"></div>
            <div className="border border-gray-600 bg-yellow-400"></div>
            <div className="border border-gray-600 bg-yellow-400"></div>
            <div className="border border-gray-600 "></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-yellow-400    "></div>
            <div className="border border-gray-600"></div>
          </div>
          {/* Bottom */}
          <div className="h-[40%] w-[40%] p-[1.5rem] bg-blue-600 rounded-bl-3xl">
            <Home className={"  bg-blue-600"} />
          </div>
          <div className="h-[40%] w-[20%] border border-gray-600 grid grid-cols-3 grid-rows-6">
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-blue-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-blue-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-blue-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600 bg-blue-600"></div>
            <div className="border border-gray-600 bg-gray-400"></div>
            <div className="border border-gray-600 bg-blue-600"></div>
            <div className="border border-gray-600 bg-blue-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
            <div className="border border-gray-600"></div>
          </div>
          <div className="h-[40%] w-[40%] p-[1.5rem] bg-yellow-400 rounded-br-3xl">
            <Home className={"  bg-yellow-400"} />
          </div>
        </div>
      </div>
    </>
  );
}
