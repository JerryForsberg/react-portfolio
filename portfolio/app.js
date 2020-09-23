// require('dotenv').config()
const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path");

const PORT = process.env.PORT || 3001;

// let corsOptions = {
//     origin: "http://localhost:3000"
// }

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
// app.use(cors(corsOptions));

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.post('/api/contact', (req, res) => {
    let data = req.body;
    console.log(data);
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        secure: true,
        auth: {
            user: "proj3group@gmail.com",
            pass: "Thegooniestest"
        }
    })

    let mailOptions = {
        from: data.email,
        to: "proj3group@gmail.com",
        subject: `Message from ${data.name}`,


        html: `
        <h3> Information </h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Phone number: ${data.email}</li>
                <li>Email: ${data.message}</li>
            </ul>

            <h3>Message</h3>
            <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send("Success" + response)
        }
    });

    smtpTransport.close();

})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})