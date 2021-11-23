import express from "express";
import { usersRoutes,carsRoutes } from "./routes/index.js";
import { userctr, carctr } from "./controllers/index.js";
import cors from "cors";

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

app.use("/",carsRoutes);


//Launch server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log("Initialized server...");
});
