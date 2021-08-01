import { useRef, useState, Fragment } from "react";

import { Prompt } from "react-router-dom";

// components
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

// classes
import classes from "./QuoteForm.module.css";

// constants
const promptMessage = "Are you sure you wanna leave?";

const QuoteForm = (props) => {
  const [isEnteringForm, setIsEnteringForm] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formIsFocusedHandler = () => {
    console.log("focused");
    setIsEnteringForm(true);
  };

  const isFinishedEnteringHandler = () => {
    setIsEnteringForm(false);
  };

  return (
    <Fragment>
      <Prompt when={isEnteringForm} message={promptMessage} />
      <Card>
        <form
          onFocus={formIsFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={isFinishedEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
