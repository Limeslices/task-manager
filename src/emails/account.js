const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'kohlbyrdpay333@gmail.com',
    from: 'kohlbyrdpay333@gmail.com',
    subject: 'This is a test',
    text: 'I hope this works!'
})

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kohlbyrdpay333@gmail.com',
        subject: "Thank's for signing up!",
        text: `Welcome to the my task manager app, ${name}! Let me know how you like the app.`,
    })
}

const sendDeletionEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kohlbyrdpay333@gmail.com',
        subject: "Are you sure you want to delete your account?",
        text: `We saw you just deleted your account. Very sorry to see you go ${name}. Mind telling us why you made this decision? Would be much appriciated! Hope we can help.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeletionEmail
}