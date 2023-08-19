const User = require('../models/user');
const jwt = require('../utils/jwtUtils');

const register = async (req, res) => {
    try {
        const { name,email, password } = req.body;
        const role = await determineUserRole(email);
        const user = new User({ name,email, password, role });
        await user.save();
        console.log("User created");
        res.status(201).json({user});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user= await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'No user' });
        }
        if(user.password !== password){
            return res.status(400).json({ error: 'Wrong password' });
        }
        const token = jwt.generateToken(user._id);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
async function determineUserRole(email) {
    const adminEmails = ['admin@ecommerce.com'];
    const role = adminEmails.includes(email) ? 'admin' : 'user';
    return role;
}
module.exports = {
    register,
    login
}
