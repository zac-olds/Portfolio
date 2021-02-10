// DEPENDENCIES
import React, {useState} from "react";
// import {useHistory} from "react-router-dom";
import * as emailjs from "emailjs-com";
import {animateScroll as scroll} from "react-scroll";

// MATERIAL UI IMPORTS
import {TextField, Button} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// STYLES
import "../styles/Contact.css";

const Contact = () => {
  // Set up history variable to redirect after email is sent
  // const history = useHistory();

  // Creating state variables to keep track of state for name, email and message from the form.
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // Setting variables from state so that they can be updated by the handle change function.
  const {from_name, from_email, message} = formData;
  // const {name, email, message} = formData;

  // Generic handle change function to handle the updating of the form data.
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle submit function that pushes the data to the emailjs API to send the email.
  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: from_name,
      from_email: from_email,
      message: message,
    };
    emailjs
      .send(
        "default_service",
        "template_epu8w7i",
        templateParams,
        "user_H5NzxnJ93mtGcRjsOyffT"
      )
      .then(handleSent());
  };

  const handleSent = () => {
    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
    scroll.scrollToTop();
  };

  const renderError = () => {
    const toggleForm = formData.isError ? "danger" : "";
    if (formData.isError) {
      return (
        <Button
          type="submit"
          className={toggleForm}
          variant="outlined"
          fullWidth
          endIcon={<CheckCircleOutlineIcon />}
        >
          {formData.errorMsg}
        </Button>
      );
    } else {
      return (
        <Button
          type="submit"
          className="contact-button"
          variant="outlined"
          fullWidth
          endIcon={<CheckCircleOutlineIcon />}
        >
          Submit
        </Button>
      );
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-text" id="contact">
          Contact
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <TextField
              name="from_name"
              value={from_name}
              label="Name: "
              type="text"
              variant="standard"
              fullWidth
              required
              onChange={handleChange}
            />
            <TextField
              name="from_email"
              value={from_email}
              label="Email: "
              type="email"
              variant="standard"
              fullWidth
              required
              onChange={handleChange}
            />
            <TextField
              name="message"
              label="Message: "
              type="text"
              variant="standard"
              fullWidth
              required
              value={message}
              onChange={handleChange}
              multiline
              rowsMax={6}
            />
            {/* <Button
              variant="outlined"
              type="submit"
              endIcon={<CheckCircleOutlineIcon />}
            >
              Submit
            </Button> */}
            {renderError()}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
