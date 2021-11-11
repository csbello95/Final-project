import express from "express";
import { usersRoutes,carsRoutes } from "./routes/index.js";
import { userctr, carctr } from "./controllers/index.js";


//Create app
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>mi API</h1>");
});

//Routes
app.get(usersRoutes.GET, userctr.getAll);
app.get(usersRoutes.GETONE,userctr.getOne);
app.post(usersRoutes.CREATE, userctr.create);
app.put(usersRoutes.UPDATE, userctr.update); 
app.delete(usersRoutes.DELETE,userctr.deleteOne);

app.get(carsRoutes.GET, carctr.getAll);
app.get(carsRoutes.GETONE,carctr.getOne);
app.post(carsRoutes.CREATE, carctr.create);
app.put(carsRoutes.UPDATE, carctr.update); 
app.delete(carsRoutes.DELETE,carctr.deleteOne);


//Launch server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log("Initialized server...");
});
