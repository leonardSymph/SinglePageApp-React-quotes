import React, { Fragment, useEffect } from "react";

//Components
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

//React-Router
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

//hooks || lib
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

//Dummy-data
// const DUMMY_DATA = [
//   { id: "p1", author: "Boggart", text: "An example quote" },
//   { id: "p2", author: "Boggartina", text: "A second quote" },
// ];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;

  const {
    sendRequest,
    data: loadedSingleQuote,
    status,
    error,
  } = useHttp(getSingleQuote, true);

  console.log(loadedSingleQuote);

  // const quoteId = params.quoteId;
  // const quote = DUMMY_DATA.find((dummyQuote) => dummyQuote.id === quoteId);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedSingleQuote.text) {
    return <h1>No quotes found</h1>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={loadedSingleQuote.text}
        author={loadedSingleQuote.author}
      />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
