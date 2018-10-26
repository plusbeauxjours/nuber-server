import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
    apiKey: process.env.Mailgun_API_KEY || "",
    domain: "sandboxf4ae731f542b44a786ee23bfab8dc714.mailgun.org"
});