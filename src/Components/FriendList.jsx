import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => {
          return <Friend friends={friend} key={friend.id} />;
        })}
      </ul>
    </div>
  );
}
