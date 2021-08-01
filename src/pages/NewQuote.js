import React, { useEffect } from "react";

// react-router
import { useHistory } from "react-router-dom";

// components
import QuoteForm from "../components/quotes/QuoteForm";

// hooks || lib
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const history = useHistory();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const onAddQuoteHandler = (quoteData) => {
    console.log(sendRequest);
    sendRequest(quoteData);
    console.log(quoteData);
  };

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={onAddQuoteHandler}
    />
  );
};

export default NewQuote;
