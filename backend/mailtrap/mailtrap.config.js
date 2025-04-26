import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN

export const client = new MailtrapClient({
    token: TOKEN,
});

export const sender = {
    email: "hello@demomailtrap.co",
    name: "Mailtrap Test",
};
const recipients = [
    {
        email: "smitsumori@hotmail.com",
    }
];

// Testing the email for Mailtrap. node .backend/mailtrap/mailtrap.config.js
// client.send({
//         from: sender,
//         to: recipients,
//         subject: "Testing Client on Mailtrap!",
//         text: "Congrats for sending test email with Mailtrap!",
//         category: "Integration Test",
//     })
//     .then(console.log, console.error);
//
