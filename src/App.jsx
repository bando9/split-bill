import { useState } from "react";
import FriendList from "./Components/FriendList";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";

const InitializeFriend = [
  {
    id: 1,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=1",
    balance: 10,
  },
  {
    id: 2,
    name: "Jojo",
    image: "https://i.pravatar.cc/48?u=2",
    balance: -10,
  },
  {
    id: 3,
    name: "Keysa",
    image: "https://i.pravatar.cc/48?u=3",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [friends, setFriends] = useState(InitializeFriend);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleSplitBill = () => {
    setIsSelected(!isSelected);
  };

  function handleNewFriend(friend) {
    setFriends([...friends, friend]);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            handleSplitBill={handleSplitBill}
            isSelected={isSelected}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleNewFriend} />}
          <button className="button" onClick={handleShowAddFriend}>
            {showAddFriend ? "Tutup" : "Tambah Teman"}
          </button>
        </div>

        <div>{isSelected && <FormSplitBill friends={InitializeFriend} />}</div>
      </div>
    </>
  );
}

export default App;
