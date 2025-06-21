export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id == friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3 className="capitalize">{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp {Math.abs(friend.balance)} pada{" "}
          <span className="capitalize">{friend.name}</span>
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          <span className="capitalize">{friend.name}</span> berhutang Rp{" "}
          {Math.abs(friend.balance)} ke kamu
        </p>
      )}

      {friend.balance == 0 && (
        <p>
          Kamu dan <span className="capitalize">{friend.name}</span> tidak ada
          hutang
        </p>
      )}
      <button className="button" onClick={() => onSelected(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
