export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">🤠Nama</label>
      <input type="text" id="name" />

      <label htmlFor="image">📷Gambar</label>
      <input type="text" id="image" placeholder="https://i.pravatar.cc/48?u=" />

      <button className="button">Tambah</button>
    </form>
  );
}
