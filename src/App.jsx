import { useState } from "react";
import FriendList from "./Components/FriendList";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";

const InitializeFriend = [
  {
    id: 1,
    name: "Budi",
    image: "https://i.pravatar.cc/150?u=1",
    balance: 10,
  },
  {
    id: 2,
    name: "Jojo",
    image: "https://i.pravatar.cc/150?u=2",
    balance: -10,
  },
  {
    id: 3,
    name: "Keysa",
    image: "https://i.pravatar.cc/150?u=3",
    balance: 0,
  },
];

function App() {
  const [addFriend, setAddFriend] = useState(false);
  const handleAddFriend = () => {
    setAddFriend(!addFriend);
  };

  const [isSelected, setIsSelected] = useState(false);
  const handleSplitBill = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={InitializeFriend}
            handleSplitBill={handleSplitBill}
            isSelected={isSelected}
          />
          {addFriend && <FormAddFriend />}
          <button className="button" onClick={handleAddFriend}>
            {addFriend ? "Tutup" : "Tambah Teman"}
          </button>
        </div>

        <div>{isSelected && <FormSplitBill friends={InitializeFriend} />}</div>
      </div>
    </>
  );
}

export default App;
