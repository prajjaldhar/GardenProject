import React, { useState } from "react";

const ContactForm = () => {
  const [formdata, setFormData] = useState({
    firstname: "",
    email: "",
    subject: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <div>
      <h1 className="text-center mt-5">Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <label for="fname">Name:</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            onChange={handleInputChange}
            placeholder="Your first name.."
          />
          <br />

          <label for="lname">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your email.."
          />
          <br />
          <textarea
            id="subject"
            name="subject"
            onChange={handleInputChange}
            placeholder="Write something about yourself..."
          ></textarea>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
