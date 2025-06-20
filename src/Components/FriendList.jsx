import Friend from "./Friend";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => {
          return (
            <Friend
              friend={friend}
              key={friend.id}
              onSelected={onSelected}
              selectedFriend={selectedFriend}
            />
          );
        })}
      </ul>
    </div>
  );
}
