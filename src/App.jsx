// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Account from "./Components/Account";
import Bill from "./Components/bill";

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [addUser, setAddUser] = useState(false);

  function handleBill() {
    setIsSelected(!isSelected);
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Budi",
    },
    {
      id: 2,
      name: "Luna",
    },
  ]);

  function handleAddUser(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const newUser = {
      id: Date.now(),
      name: name,
    };
    setUsers([...users, newUser]);
    setAddUser(!addUser);

    e.target[0].value = "";
  }

  function handleBtnAddUser() {
    setAddUser(!addUser);
  }

  return (
    <>
      <div className="container w-[80vw] mx-auto mt-10 flex justify-center gap-10">
        <div className="p-2 flex flex-col gap-4">
          {users.map((user, index) => {
            return (
              <div key={user.id}>
                <Account user={user.name} id={index} handleBill={handleBill} />
              </div>
            );
          })}

          <button
            className="bg-slate-500 text-white w-40 px-2 py-1 mx-auto mt-3 rounded-md hover:bg-slate-400 cursor-pointer"
            onClick={handleBtnAddUser}
          >
            Tambah Teman
          </button>
          {/* <p>d</p> */}

          {addUser && (
            <form
              className="flex flex-col bg-amber-200 rounded-md p-3 w-80 mx-auto"
              onSubmit={handleAddUser}
            >
              <label className=" flex gap-2 justify-evenly">
                <span>Nama</span>
                <input type="text" className="bg-amber-100 rounded-md px-1" />
              </label>

              <button className="mt-4 bg-amber-100 w-1/2 mx-auto rounded-md">
                Tambah
              </button>
            </form>
          )}
        </div>

        <div className="w-1/2">{isSelected && <Bill />}</div>
      </div>
    </>
  );
}

export default App;
