const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { sendWelcomeEmail } = require("./midleware/welcome mail");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("faile");
    }
  });
});
const processEmailQueue = () => {
  const sql = "SELECT * FROM email_log WHERE email_sent = FALSE";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching email queue:", err);
      return;
    }
    results.forEach((row) => {
      const recipientEmail = row.recipient_email;
      sendWelcomeEmail(recipientEmail)
        .then(() => {
          console.log("Email sent successfully to:", recipientEmail);
          // Update the email_sent flag in the database
          const updateSql =
            "UPDATE email_log SET email_sent = TRUE WHERE id = ?";
          db.query(updateSql, [row.id], (updateErr) => {
            if (updateErr) {
              console.error("Error updating email log:", updateErr);
            }
          });
        })
        .catch((error) => {
          console.error("Error sending email to:", recipientEmail, error);
        });
    });
  });
};

// Check the email queue every 1 minutes
setInterval(processEmailQueue, 60 * 1000);

app.post("/signup", async (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  console.log(values);
  // await sendWelcomeEmail(values[1]); // this no ndeed to send mail when user is signup (using triggers email log taible update and we can send mail checking evry 1 min)
  // console.log("mail was send!");
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("err");
    }
    return res.json(data);
  });
});

processEmailQueue();

app.listen(8081, () => {
  console.log("listening!");
});
