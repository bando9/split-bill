export default function FormSplitBill({ friends }) {
  return (
    <form className="form-split-bill">
      <h2>Patungan Bareng {friends.name} </h2>
      <label htmlFor="cost">💵Total Biaya</label>
      <input type="text" id="cost" />
      <label htmlFor="your-expense">🙋‍♂️Pengeluaran Kamu</label>
      <input type="text" id="your-expense" />
      <label htmlFor="friend-expense">🙋Pengeluaran {friends.name}</label>
      <input type="text" id="friend-expense" disabled />
      <label htmlFor="pay-with">🤑Ditalangin Sama</label>
      <select name="pay-with" id="pay-with">
        <option value="Kamu">Kamu</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
