import FriendList from "./Components/FriendList";

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
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList friends={InitializeFriend} />
        </div>
      </div>
    </>
  );
}

export default App;
