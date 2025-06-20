export default function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Patungan Bareng {selectedFriend.name} </h2>
      <label htmlFor="cost">💵Total Biaya</label>
      <input type="text" id="cost" />

      <label htmlFor="your-expense">🙋‍♂️Pengeluaran Kamu</label>
      <input type="text" id="your-expense" />

      <label htmlFor="friend-expense">
        🙋Pengeluaran {selectedFriend.name}
      </label>
      <input type="text" id="friend-expense" disabled />

      <label htmlFor="pay-with">🤑Ditalangin Sama</label>
      <select name="pay-with" id="pay-with">
        <option value="Kamu">Kamu</option>
        {/* {selectedFriend.map(({ friend }) => {
          return (
            <option value={friend.name} key={friend.id}>
              {friend.name}
            </option>
          );
        })} */}
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
