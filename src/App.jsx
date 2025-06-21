import { useState } from "react";
import FriendList from "./Components/FriendList";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";

const InitializeFriend = [
  {
    id: 1,
    name: "budi",
    image: "https://i.pravatar.cc/48?u=1",
    balance: 10,
  },
  {
    id: 2,
    name: "jojo",
    image: "https://i.pravatar.cc/48?u=2",
    balance: -10,
  },
  {
    id: 3,
    name: "kendall",
    image: "https://i.pravatar.cc/48?u=3",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(InitializeFriend);

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  };
  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id == friend.id ? null : friend
    );

    setShowAddFriend(false);
  }

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id == selectedFriend.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );

    setSelectedFriend(null);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelected={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <button className="button" onClick={handleShowAddFriend}>
            {showAddFriend ? "Tutup" : "Tambah Teman"}
          </button>
        </div>

        <div>
          {selectedFriend && (
            <FormSplitBill
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
