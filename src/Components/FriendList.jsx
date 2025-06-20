import Friend from "./Friend";

export default function FriendList({ friends, handleSplitBill, isSelected }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => {
          return (
            <Friend
              friends={friend}
              key={friend.id}
              handleSplitBill={handleSplitBill}
              isSelected={isSelected}
            />
          );
        })}
      </ul>
    </div>
  );
}
