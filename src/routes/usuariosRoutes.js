import  express  from "express";
import UsuarioController from "../controller/UsuarioController.js";

const router = express.Router();

router
  .get("/usuarios", UsuarioController.listarUsuarios)
  .post("/usuarios",UsuarioController.cadastrarUsuario)

export default router;  

