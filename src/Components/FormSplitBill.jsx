import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState("");
  const friendBill = amount ? amount - expense : "";

  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !expense) return;

    onSplitBill(whoIsPaying === "user" ? friendBill : -expense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng {selectedFriend.name} </h2>
      <label htmlFor="cost">💵Total Biaya</label>
      <input
        type="number"
        min={0}
        id="cost"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="your-expense">🙋‍♂️Pengeluaran Kamu</label>
      <input
        type="number"
        min={0}
        id="your-expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />

      <label htmlFor="friend-expense">
        🙋Pengeluaran {selectedFriend.name}
      </label>
      <input type="text" id="friend-expense" disabled value={friendBill} />

      <label htmlFor="pay-with">🤑Ditalangin Sama</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
