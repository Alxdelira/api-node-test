import Usuario from "../models/Usuario.js"

class UsuarioController {
  static cadastrarUsuario = async (req, res) => {
    try {
      const usuario = new Usuario(req.body);

      if (req.body.nome.length < 3) {
        return res.status(400).json({ code: 400, message: "Nome deve ter menos que 3 caracteres!" })
      }

      await usuario.save();
      return res.status(201).json({ code: 201, message: "Usuario Cadastrado com Sucesso!" })

    } catch {
      return res.status(500).json({ code: 500, message: "Erro Interno Servidor!" })

    }
  }

  static listarUsuarios = async (req, res) => {

    try {
      const email = req.query.email;
      const page = req.query.page;
      const perPage = req.query.perPage;
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(perPage) > 10 ? 10 : parseInt(perPage) || 10
      }

      if (email) {
        const usuario = await Usuario.paginate({ $and: [{ email: new RegExp(email, "i") }] }, options)
        return res.status(200).json(usuario);
      }

      const usuario = await Usuario.paginate({}, options)
      return res.status(200).json(usuario);
    
      
    } catch {
  res.status(500).json({ message: "Erro Interno Servidor!" })
}}

}

export default UsuarioController;