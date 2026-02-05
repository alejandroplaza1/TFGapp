import mongoose, { Schema } from 'mongoose'; // <--- Importación correcta

const UserSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  labData: { type: Schema.Types.Mixed },
});

export const UserModel = mongoose.model("User", UserSchema);