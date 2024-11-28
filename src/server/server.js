const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Gönderen e-posta adresi
    pass: "your-email-password", // E-posta şifresi (güvenlik için uygulama şifresi kullanabilirsiniz)
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "taksan97@gmail.com", // Alıcı e-posta adresi
    subject: `İletişim Formu Mesajı - ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("E-posta gönderilirken hata oluştu.");
    } else {
      console.log("E-posta gönderildi: " + info.response);
      res.status(200).send("Mesaj başarıyla gönderildi.");
    }
  });
});

app.listen(5000, () => {
  console.log("Sunucu 5000 portunda çalışıyor.");
});
