const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Génération du JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Inscription
exports.register = async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber, address, position } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }

        const user = await User.create({ firstName, lastName, email, password, phoneNumber, address, position });
        const token = generateToken(user._id);
        res.status(201).json({ token, user });
    } catch (error) {
        console.error('Erreur d\'inscription:', error);
        res.status(500).json({ message: "Erreur lors de l'inscription. Veuillez réessayer." });
    }
};

// Connexion
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Utilisateur non trouvé." });
        }

        // Vérifiez le mot de passe
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Mot de passe incorrect." });
        }

        const token = generateToken(user._id);
        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({ message: "Erreur lors de la connexion." });
    }
};
