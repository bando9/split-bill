// import { useState } from "react";
import "./App.css";
import Account from "./Components/Account";
import Bill from "./Components/bill";

function App() {
  // const [isSelected, setIsSelected] = useState(false);

  // function handleBill() {
  //   setIsSelected(!isSelected);
  // }

  return (
    <>
      <div className="container w-[80vw] mx-auto mt-10 flex justify-center gap-10">
        <div className="p-2 flex flex-col gap-4">
          <Account user="Budi" gender="boy" />

          <Account user="Luna" gender="girl" />
        </div>

        <div className="w-1/2">
          {/* {isSelected && <Bill />} */}
          <Bill />
        </div>
      </div>
    </>
  );
}

export default App;
