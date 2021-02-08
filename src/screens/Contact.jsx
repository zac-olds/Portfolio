// DEPENDENCIES
import React, {useState} from "react";

// MATERIAL UI IMPORTS
import {TextField, Button} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// STYLES
import "../styles/Contact.css";

const Contact = () => {
  // Creating state variables to keep track of state for name, email and message from the form.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Setting variables from state so that they can be updated by the handle change function.
  const {name, email, message} = formData;

  // Generic handle change function to handle the updating of the form data.
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-text">Contact</div>
        <div className="form-container">
          <form>
            <TextField
              name="name"
              label="Name: "
              type="text"
              variant="standard"
              fullWidth="true"
              required="true"
              value={name}
              onChange={handleChange}
              autoFocus="true"
            />
            <TextField
              name="email"
              label="Email: "
              type="email"
              variant="standard"
              fullWidth="true"
              required="true"
              value={email}
              onChange={handleChange}
            />
            <TextField
              name="message"
              label="Message: "
              type="text"
              variant="standard"
              fullWidth="true"
              required="true"
              value={message}
              onChange={handleChange}
              multiline
              rowsMax={6}
            />
            <Button
              variant="outlined"
              type="submit"
              endIcon={<CheckCircleOutlineIcon />}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
