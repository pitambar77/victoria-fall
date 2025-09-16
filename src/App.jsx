import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" text-[24px] text-amber-600 font-semibold text-center mt-5">
        <h1 className=" ">
          Hello welcome{" "}
        </h1>
        <h1 className=" ">to </h1>
        <h1 className=" ">
          Victoria falls Bed and Breakfast
        </h1>
      </div>
    </>
  );
}

export default App;
