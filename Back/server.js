import express from "express";
import { usersRoutes,carsRoutes,rentalRoutes} from "./routes/index.js";
import { userctr } from "./controllers/index.js";
import cors from "cors";


// import multer from 'multer';
import path from 'path';
import { fileURLToPath } from "url"; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Create app
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>mi API</h1>");
});

//Routes
app.get(usersRoutes.GET, userctr.getAll);
app.get(usersRoutes.GETONE,userctr.getOneUser);
app.post(usersRoutes.LOGIN,userctr.login);
app.post(usersRoutes.CREATE, userctr.create);
app.put(usersRoutes.UPDATE, userctr.update); 
app.delete(usersRoutes.DELETE,userctr.deleteOne);

app.use("/",carsRoutes,rentalRoutes);

// function dirname(meta) {
//   return fileURLToPath(meta.url);
// }


// //configure multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "/public"));
//   },
//   filename: function (req, file, cb) {
//     console.log("Filename", req.body);
//     cb(null, `${req.body.name}.${file.mimetype.split("/")[1]}`);
//   },
// });
// const upload = multer({ storage: storage });


// Configure static files
//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
//console.log(path.join(__dirname,"/public"));

//configure upload rute
// app.post("/upload", upload.single("file"), function (req, res, next) {
//   console.log("/upload", req.file);
//   res.send("imagen subida");
// });



//Launch server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log("Initialized server...");
});

