import {Router, request} from "express";
import {methods as usuarioController} from "./../controllers/usuarios.controller.js";

const router = Router();
//Busquedas
router.get("/", usuarioController.getUsuarios);
router.get("/:id", usuarioController.getUsuario);

//Inserciones
router.post("/", usuarioController.addUsuarios);

//Eliminacion
router.delete("/:id", usuarioController.deleteUsuario);

//Actualizaciones
router.put("/:id", usuarioController.updateUsuario);

//Login
router.post("/login", usuarioController.loginUser);

export default router;