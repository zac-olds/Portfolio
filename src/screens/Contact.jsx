// DEPENDENCIES
import React from "react";

// MATERIAL UI IMPORTS
import {TextField, Button} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// STYLES
import "../styles/Contact.css";

const Contact = () => {
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
              autoFocus="true"
              fullWidth="true"
            />
            <TextField
              name="email"
              label="Email: "
              type="email"
              variant="standard"
              fullWidth="true"
            />
            <TextField
              name="message"
              label="Message: "
              type="text"
              variant="standard"
              fullWidth="true"
              multiline
              rowsMax={6}
            />
            <Button variant="outlined" endIcon={<CheckCircleOutlineIcon />}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
