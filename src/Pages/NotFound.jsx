import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-slate-800 flex items-center justify-center">
      <div className="w-[300px] h-[300px] flex flex-col space-y-4 items-center justify-center">
        <div className="text-3xl font-bold">Page Not Found</div>

        <Link to="/" className="bg-red-700 px-3 py-1 hover:bg-sky-700">
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
