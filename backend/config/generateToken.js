
import jwt from 'jsonwebtoken';

export const generateToken = (res, userId) => {
    const token = jwt.sign({userId: userId}, process.env.JWT_SECRET_TOKEN, {
        expiresIn: "30d"
    });

    // Set JWT as an HTTP-Only Cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",   // Use secure cookies in production
        sameSite: "strict", // Prevents CSSF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000 // Valid for 30 days
    })
}