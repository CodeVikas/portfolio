import React, { useState } from "react";
// import Navbar from "../Navbar/navbar";
import "./contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    number: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    const formErrors = validate(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      console.log(formData);
      // Make a POST request to your backend API endpoint
      const response = await fetch('your-backend-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Log the response from the backend
        console.log("Response:", await response.json());

        // Set submitted state to true
        setSubmitted(true);

        // Reset the form after successful submission
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            email: "",
            number: "",
            message: ""
          });
        }, 2000);
      } else {
        // Handle error: show error message to the user or log it
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error: show error message to the user or log it
    }
  };

  const validate = (formData) => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.number) {
      errors.number = "Mobile No. is required";
    } else if (!/^\d+$/.test(formData.number)) {
      errors.number = "Mobile No. is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <React.Fragment>
      <div>
        <p className="h2 text-center my-5">Contact Me</p>
      </div>
      <div className="container justify-content-center my-5">
        <form onSubmit={handleSubmit}>
          {submitted ? (
            <div className="alert alert-success row mb-3 justify-content-center" role="alert">
              Successfully sent the enquiry!
            </div>
          ) : null}
          <div className="row mb-3 justify-content-center">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-5 justify-content-center">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <label htmlFor="number" className="col-sm-2 col-form-label">
              Mobile No.
            </label>
            <div className="col-sm-5 justify-content-center">
              <input
                type="text"
                className={`form-control ${errors.number ? "is-invalid" : ""}`}
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && <div className="invalid-feedback">{errors.number}</div>}
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <label htmlFor="message" className="col-sm-2 col-form-label">
              Message
            </label>
            <div className="form-floating col-sm-5 justify-content-center">
              <textarea
                className={`form-control h-100 ${errors.message ? "is-invalid" : ""}`}
                placeholder="Leave a comment here"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
          </div>
          <div className="row mb-3 mt-5 justify-content-center">
            <button type="submit" className="btn btn-info col-sm-6">
              Send
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Contact;
