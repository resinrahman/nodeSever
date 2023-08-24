const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { request } = require("https");
const port = 5000;
const fs = require("fs");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`sever running in ${port}`);
});
app.get("/test", (req, res) => {
  res.send("hello");
});

// app.post("/test", (req, res) => {
//   let name = req.body.name;
//   if (req.body.name) {
//     fs.appendFile("file.txt",name+ " \n", (err) => {
//       if (err) {
//         res.send(err);
//         return;
//       }
//       fs.readFile("file.txt",(err, data) =>{
//         if(err){
//             res.send(err)
//             return
//         }
//         res.send(data.toString())
//       })
//     });
//   } else {
//     res.send("Failed");
//   }
// });

//   fs.appendFile('file.txt', ' i am  here', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Data appended to file!');
//   });

// fs.readFile('file.txt', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data.toString());
//   });

//   fs.rename('file.txt', 'new-file.txt', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File renamed successfully!');
//   });
