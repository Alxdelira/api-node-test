import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
    trim: true,
    index: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    index: true
  },
  senha: {
    type: String,
    require: true,
    trim: true,
  },
  ativo: {type: Boolean, default: false} 
});

usuarioSchema.plugin(mongoosePaginate);

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;