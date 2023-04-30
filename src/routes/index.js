import  express  from "express";
import usuarios from "./usuariosRoutes.js"

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).json({message: "Olá seja Bem Vinde a Minha API"})
  })

  app.use(
    express.json(),
    usuarios
  )
}

export default routes;