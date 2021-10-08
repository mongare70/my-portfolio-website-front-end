import { useState } from "react";

import useInput from "../../hooks/use-input";
import classes from "./ContactForm.module.css";

const ContactForm = (props) => {
  const [formHasError, setFormHasError] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid || !enteredMessageIsValid) {
      setFormHasError(true);
      return;
    }

    setFormHasError(false);

    const senderData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    props.onAddSenderData(senderData);

    resetNameInput();
    resetEmailInput();
    resetMessageInput();
  };

  const nameInputClasses = nameInputHasError
    ? classes["form-control-invalid"]
    : classes["form-control"];

  const emailInputClasses = emailInputHasError
    ? classes["form-control-invalid"]
    : classes["form-control"];

  const messageInputClasses = messageInputHasError
    ? classes["form-control-invalid"]
    : classes["form-control"];

  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      {formHasError && (
        <p className={classes["error-text"]}>
          Please enter the required data below.
        </p>
      )}
      <div className={nameInputClasses}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputHasError && (
          <p className={classes["error-text"]}>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputHasError && (
          <p className={classes["error-text"]}>
            Please enter a valid email address.
          </p>
        )}
      </div>
      <div className={messageInputClasses}>
        <label htmlFor="message">Message:</label>
        <textarea
          rows="5"
          type="text"
          id="message"
          value={enteredMessage}
          onBlur={messageInputBlurHandler}
          onChange={messageInputChangeHandler}
        />
        {messageInputHasError && (
          <p className={classes["error-text"]}>Message must not be empty.</p>
        )}
      </div>
      <div className={classes["form-actions"]}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
