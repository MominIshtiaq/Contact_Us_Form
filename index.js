function sendMail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "momin989ishtiaq@gmail.com",
    Password: "CD2D1D9ACBECD71C2C981CA6A7A8826E29C1",
    To: "momin989ishtiaq@gmail.com",
    From: "momin989ishtiaq@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
