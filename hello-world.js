//Task1:
console.log("HELLO WORLD");

//Task3:
//a:create a file

var fs = require("fs");
/*fs.appendFile("welcome.txt", "hello node!!!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});*/

//Task4
const generator = require("generate-password");

const password = generator.generate({
  length: 8,
  numbers: true,
  symbols: true,
  uppercase: false,
  excludeSimilarCharacters: true,
  strict: true,
});
console.log(password);

//b:read a file
fs.readFile("welcome.txt", "utf8", function (err, data) {
    console.log(data);
  });
  
//Task2:
const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Hello node!!!</h1>");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Task5:

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: { name: "Davy", adress: "crocodilemethe@gmail.com" }, // sender address
    to: "nkomenganeyaminvoul@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

