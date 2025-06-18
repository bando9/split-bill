import "./App.css";

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    return console.log("dari button");
  }
  return (
    <>
      <div className="container w-[80vw] mx-auto mt-10 flex gap-15">
        <div className="w-[50vw] p-2 flex flex-col gap-4">
          <div className="card flex gap-5 justify-evenly items-center p-2">
            <div>
              <img
                src="https://picsum.photos/id/74/100/"
                className="rounded-full w-[50px]"
                alt="d"
              />
            </div>
            <div>
              <h3 className="font-semibold">Budi</h3>
              <p>Kamu berhutang Rp 7 ke Budi</p>
            </div>
            <button className="px-2 py-1 bg-slate-500 rounded-md text-white cursor-pointer">
              Pilih
            </button>
          </div>

          <div className="card flex gap-5 justify-evenly items-center p-2">
            <div>
              <img
                src="https://picsum.photos/id/25/100/"
                className="rounded-full w-[50px]"
                alt="d"
              />
            </div>
            <div>
              <h3 className="font-semibold">Budi</h3>
              <p>Kamu berhutang Rp 7 ke Budi</p>
            </div>
            <button className="px-2 py-1 bg-slate-500 rounded-md text-white cursor-pointer">
              Pilih
            </button>
          </div>

          <div className="card flex gap-5 justify-evenly items-center p-2">
            <div>
              <img
                src="https://picsum.photos/id/10/100/"
                className="rounded-full w-[50px]"
                alt="d"
              />
            </div>
            <div>
              <h3 className="font-semibold">Budi</h3>
              <p>Kamu berhutang Rp 7 ke Budi</p>
            </div>
            <button className="px-2 py-1 bg-slate-500 rounded-md text-white cursor-pointer">
              Pilih
            </button>
          </div>
        </div>

        <div className="w-1/2 p-6 bg-slate-200 rounded-xl">
          <h1 className="uppercase font-semibold mb-7 text-xl">
            Patungan Bareng parjo
          </h1>
          <form className="flex flex-col justify-center gap-1">
            <label className="flex justify-between">
              💵 Total Biaya
              <input type="number" className="bg-slate-50 p-1 rounded-sm" />
            </label>
            <label className=" flex justify-between">
              <span>🙋‍♂️ Pengeluaran Kamu</span>
              <input type="number" className="bg-slate-50 p-1 rounded-sm" />
            </label>

            <label className=" flex justify-between">
              🙋 Pengeluaran Parjo
              <input type="number" className="bg-slate-50 p-1 rounded-sm" />
            </label>

            <label className="p-1 rounded-xl  flex justify-between">
              🤑 Ditalangin sama
              <select className="bg-slate-50">
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
    </>
  );
}

export default App;
