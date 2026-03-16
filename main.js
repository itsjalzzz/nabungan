const express = require("express");
const mysql = require("mysql2");
const bodyPerser = require("body-parser");
const app = express();
const log = console.log();

app.use(bodyPerser.urlencoded({ extended:true }))

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database:"MyTabunganGuweh"
    }
);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/simpan', (req,res) => {
    const { NamaPenabung,nominal } = req.body;
    const sql =  "INSERT INTO Tabungan (Nama,Nominal) VALUES (?,?)"

    db.query(sql,[NamaPenabung,nominal], (err,result) => {
        if(err) throw err;
        res.send("giluyyy berhasil cuyy");
    });
});

app.listen(67, () => console.log("berjalan di localhost:67"));