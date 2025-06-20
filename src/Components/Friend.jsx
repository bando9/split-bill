export default function Friend({ friends, handleSplitBill, isSelected }) {
  return (
    <li>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>
      {friends.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp {Math.abs(friends.balance)} pada {friends.name}
        </p>
      )}

      {friends.balance > 0 && (
        <p className="green">
          {friends.name} berhutang Rp {Math.abs(friends.balance)} ke kamu
        </p>
      )}

      {friends.balance == 0 && <p>Kamu dan {friends.name} tidak ada hutang</p>}
      <button className="button" onClick={handleSplitBill}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
