import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: Number }] // Tableau d'IDs de Pokémon
});

// CORRECTION : Utilise "function" classique pour avoir accès à "this"
userSchema.pre('save', async function() {
    // Si le mot de passe n'est pas modifié, on s'arrête là
    if (!this.isModified('password')) return;

    try {
        // On hashe directement
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        throw error; // Mongoose attrapera l'erreur
    }
});

export default mongoose.model('User', userSchema);