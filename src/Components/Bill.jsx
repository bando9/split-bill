export default function Bill(props) {
  const sumCost = 20000;
  const urExpense = 7000;
  const friendsExpense = sumCost - urExpense;

  function handleSubmit(e) {
    e.preventDefault();
    return console.log("dari button");
  }
  return (
    <div>
      <div className="p-6 bg-slate-200 rounded-xl w-[350px]">
        <h1 className="uppercase font-semibold mb-7 text-xl">
          Patungan Bareng {props.user}
        </h1>
        <form className="flex flex-col justify-center gap-2">
          <label className="flex justify-between">
            <span>💵 Total Biaya</span>
            <input
              type="number"
              className="bg-slate-50 p-1 rounded-sm  w-1/3 text-center "
              placeholder={sumCost}
            />
          </label>
          <label className=" flex justify-between">
            <span>🙋‍♂️ Pengeluaran Kamu</span>
            <input
              type="number"
              className="bg-slate-50 p-1 rounded-sm   w-1/3 text-center "
              placeholder={urExpense}
            />
          </label>

          <label className=" flex justify-between">
            🙋 Pengeluaran {props.user}
            <input
              type="number"
              className="border-2 border-slate-50 p-1 rounded-md w-1/3 text-center placeholder:text-slate-800"
              disabled
              placeholder={friendsExpense}
            />
          </label>

          <label className="flex justify-between">
            🤑 Ditalangin sama
            <select className="bg-slate-50 p-1 rounded-sm w-1/3 text-center ">
              <option value="Kamu">Kamu</option>
              <option value="Budi">Budi</option>
              <option value="Sukma">Sukma</option>
              <option value="Parjo">Parjo</option>
            </select>
          </label>

          <button
            onClick={handleSubmit}
            className="mt-2 px-2 py-1 bg-slate-600 text-white w-30 mx-auto rounded-md cursor-pointer hover:bg-slate-500 font-semibold"
          >
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
}
