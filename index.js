const sendMail = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "momin989ishtiaq@gmail.com",
    Password: "0333Momin0333",
    To: "momin989ishtiaq@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Testing Contact Us Form",
    Body: `Name: ${document.getElementById("name").value}
       <br> Email: ${document.getElementById("email").value}
       <br> Password: ${document.getElementById("password").value}
       <br> Message: ${document.getElementById("message").value}`,
  }).then((message) => alert("Message Sent successfully"));
};
// Host: "smtp.gmail.com",
// Username: "momin989ishtiaq@gmail.com",
// Password: "0333Momin0333",
// To: "momin989ishtiaq@gmail.com",
// From: document.getElementById("email").value,
// Subject: "Testing Contact Us Form",
// Body: `Name: ${document.getElementById("name").value}
//        <br> Email: ${document.getElementById("email").value}
//        <br> Password: ${document.getElementById("password").value}
//        <br> Message: ${document.getElementById("message").value}`,
// }).then((message) => alert("Message Sent Successfully"));
