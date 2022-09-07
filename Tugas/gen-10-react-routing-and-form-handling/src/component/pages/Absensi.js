import React, { useState } from "react";
import { Link } from "react-router-dom";

const Absensi = () => {
  const [nama, setNama] = useState();
  const [hari, setHari] = useState(Date.now);
  const [gender, setGender] = useState();
  const [review, setReview] = useState();

  function handleInputNama(e) {
    setNama(e.target.value);
  }

  function handleSubmit() {
    const data = {
      nama: nama,
      hari: hari,
      gender: gender,
      review: review,
    };
    console.log(data);
  }
  return (
    <>
      <h1>Absensi</h1>
      <label>
        Nama Anda: <br />
        <input type="text" onChange={handleInputNama} value={nama} />
      </label>
      <br />
      <br />
      <label>
        Hari: <br />
        <select onChange={(event) => setHari(event.target.value)} value={hari}>
          <option value="senin">Senin</option>
          <option value="selasa">Selasa</option>
          <option value="rabu">Rabu</option>
          <option value="kamis">Kamis</option>
          <option value="jumat">Jumat</option>
          <option value="sabtu">Sabtu</option>
          <option value="minggu">Minggu</option>
        </select>
      </label>
      <br />
      <br />
      Jenis Kelamin: <br />
      <label>
        <input
          type="radio"
          value="l"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
          checked={gender === "l" ? true : false}
        />
        Laki laki
      </label>
      &nbsp;&nbsp;
      <label>
        <input
          type="radio"
          value="p"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
          checked={gender === "p" ? true : false}
        />
        Perempuan
      </label>
      <br />
      <br />

      <br />
            <br />
            SEMANGAT: <br />
            <label for="vol">
                POIN 1 SAMPAI 100:
            </label>
            <input 
            type="range" 
            id="vol" 
            name="vol" 
            min="0" max="50"
            onChange={(event) => setReview(event.target.value)}></input>
            <br />
            <br />
      <button onClick={handleSubmit}>submit</button>
      {/* <button onClick={() => navigate(-1)}>
        <Link to="/"></Link> go to homePage
      </button> */}
    </>
  );
};

export default Absensi;