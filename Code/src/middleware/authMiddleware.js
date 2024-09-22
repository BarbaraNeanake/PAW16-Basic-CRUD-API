// authMiddleware.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.cookies.token || req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send({ message: 'Access denied.' });

    try {
        const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send({ message: 'Invalid token.' });
    }
};

// Use this middleware for the books route
app.use("/books", auth, require("./src/routes/BookRoutes"));
