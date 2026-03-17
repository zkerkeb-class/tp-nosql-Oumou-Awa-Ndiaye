import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../schemas/users.js';

const router = express.Router();

// Inscription
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await User.create({ username, password });
        res.status(201).json({ message: "Utilisateur créé !", user: newUser });
    } catch (error) {
        // ICI : on demande au serveur de nous dire exactement quel est le problème
        console.log("Erreur Register:", error); 
        res.status(400).json({ 
            error: "Erreur lors de l'inscription", 
            details: error.message // <--- C'est ça qui va nous sauver
        });
    }
});

// Connexion
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        // COMPARAISON DU MOT DE PASSE
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Identifiants invalides" });
        }

        // GÉNÉRATION DU TOKEN
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET || 'secret_par_defaut', 
            { expiresIn: '24h' }
        );

        // Réponse avec le token
        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CETTE LIGNE EST ESSENTIELLE POUR CORRIGER TON ERREUR
export default router;