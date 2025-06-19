// import { useState } from "react";

import Bill from "./bill";

export default function Account(props) {
  let showBill = Boolean;
  // const [showBill, setShowBill] = useState(false);

  function handleBill() {
    // console.log(showBill);
    props.handleBill(showBill);
  }

  return (
    <>
      <div className="card flex gap-7 items-center p-2">
        <div>
          <img
            src={`https://i.pravatar.cc/150?img=${props.id}`}
            className="rounded-full w-[50px]"
            alt="d"
          />
        </div>
        <div>
          <h3 className="font-semibold capitalize">{props.user}</h3>
          <p>Kamu berhutang Rp 7 ke {props.user}</p>
        </div>
        <button
          className="px-2 py-1 bg-slate-500 rounded-md text-white cursor-pointer hover:bg-slate-400"
          onClick={handleBill}
        >
          Pilih
        </button>
      </div>
    </>
  );
}
