export default function Friend({ friends }) {
  return (
    <li>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>
      {friends.balance < 0 && (
        <p className="text-red-600">
          Kamu berhutang Rp {Math.abs(friends.balance)} pada {friends.name}{" "}
        </p>
      )}

      {friends.balance > 0 && (
        <p className="text-green-600">
          {friends.name} berhutang Rp {Math.abs(friends.balance)} ke kamu{" "}
        </p>
      )}

      {friends.balance == 0 && <p>Kamu dan {friends.name} tidak ada hutang</p>}
      <button className="button">Pilih</button>
    </li>
  );
}
