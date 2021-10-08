import { Fragment } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import Spinner from "../UI/Spinner";
import ContactForm from "../forms/ContactForm";
import Header from "../layouts/Header";
import classes from "./Contact.module.css";
import hillary from "../assets/hillary-passport.png";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addSenderDataHandler = async (senderData) => {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/api/sendEmail`,
      {
        method: "POST",
        body: JSON.stringify(senderData),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const data = await response.json();

    console.log(data);
    if (data.sent === true) {
      setIsLoading(false);
      toast.success("Thank you. Email sent successfully");
    } else {
      setIsLoading(false);
      toast.error("Error sending email!");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.control}>
        {isLoading && <Spinner />}
        <h1>Contact</h1>
        <p>Want to say hello or have a question/proposal? Go ahead.</p>
        <ContactForm onAddSenderData={addSenderDataHandler} />
      </div>
      <div className={classes.control2}>
        <div className={classes.hillary}>
          <img
            className={classes["hillary-image"]}
            src={hillary}
            alt="Hillary"
          />
          <h3>Hillary Oyaro Mongare</h3>
          <p>Bsc. Computer Science</p>
          <p>Freelancer</p>
          <p>+254707113238</p>
          <p>Nairobi, Kenya.</p>
          <div className={classes.icon}>
            <a
              href="https://www.linkedin.com/in/hillary-mongare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            &nbsp; &nbsp;
            <a
              href="https://github.com/mongare70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <p>Designed and coded by Hillary Mongare &copy; 2021</p>
      </div>
    </Fragment>
  );
};

export default Contact;
