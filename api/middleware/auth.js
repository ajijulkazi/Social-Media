import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        
        let token = req.header("Authorization");

        if(!token) {
            return res.status(403).send("Access Denied");
        }

        if(token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
        );
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        next();

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}