import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f607707-1607-4446-b775-94a5c9109e96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Form">
      <form onSubmit={onSubmit}>
    <label htmlFor="">   Name : <input type="text" name="name" required/></label>
      <label htmlFor="">  Email :<input type="email" name="email" required/></label>
      <label htmlFor="">  subject :<input type="text" name="subject" required/></label>
        Message :<br/>
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}

