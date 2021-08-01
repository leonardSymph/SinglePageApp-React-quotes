import React, { useEffect } from "react";

// components
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

// hooks || lib
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

// dummy-data
// const DUMMY_DATA = [
//   { id: "p1", author: "Boggart", text: "An example quote" },
//   { id: "p2", author: "Boggartina", text: "A second quote" },
// ];

const AllQuote = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotesData,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedQuotesData || loadedQuotesData.length === 0)
  ) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotesData} />;
};

export default AllQuote;
