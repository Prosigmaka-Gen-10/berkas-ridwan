import React, { useState } from "react";


const Absensi = () => {
    const [nama, setNama] = useState();
    const [hari, setHari] = useState(Date.now);
    const [gender, setGender] = useState();
    const [spirit, setSpirit] = useState();

    function handleInputNama (event) {
        setNama(event.target.value)
    }

    function handleSubmit () {
        const data = {
            nama: nama,
            hari: hari,
            gender: gender,
            spirit: spirit,
        };
        console.log(data);
    }

    return (
        <>
            <h1>ABSENSI</h1>
            <label>
                NAMA : <br />
                <input type="text" onChange={handleInputNama} value={nama} />
            </label>

            <br />
            <br />

            <label>
                HARI : <br />
                <select onChange={(event) => setHari(event.target.value)} value={hari}>
                    <option value="senin">SENIN</option>
                    <option value="selasa">SELASA</option>
                    <option value="rabu">RABU</option>
                    <option value="kamis">KAMIS</option>
                    <option value="jumat">JUM'AT</option>
                    <option value="sabtu">SABTU</option>
                    <option value="minggu">MINGGU</option>
                </select>
            </label>

            <br />
            <br />
            Jenis Kelamin : <br />
            <label>
                <input
                type = "radio"
                value = "L"
                name="gender"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "L" ? true : false}
                />
                LAKI-LAKI
            </label>
            &nbsp;&nbsp;
            <label>
                <input
                type = "radio"
                value = "P"
                name="gender"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "P" ? true : false}
                />
                PEREMPUAN
            </label>

            <br />
            <br />
            SEMANGAT: <br />
            <label for="vol">
                POIN 1 SAMPAI 100:
            </label>
            <input type="range" id="vol" name="vol" min="0" max="50"></input>
            <br />
            <br />
            <button onClick={handleSubmit}>submit</button>           
        </>
    )       
}

export default Absensi;
