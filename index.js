const sendMail = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "momin989ishtiaq@gmail.com",
    Password: "0333Momin0333",
    To: "momin989ishtiaq@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Testing Contact Us Form",
    Body: "Testing by sending fake message",
  }).then((message) => alert("Message sent successfully"));
};
