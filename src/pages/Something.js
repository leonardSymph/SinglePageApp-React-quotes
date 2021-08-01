import React, { Fragment, Suspense } from "react";

import { Link, Route } from "react-router-dom";

// import Comments from "../components/comments/Comments";

const Comments = React.lazy(() => import("../components/comments/Comments"));

const Something = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="centered">
            <p>Loading...</p>
          </div>
        }
      >
        <li className="centered">
          <Link className="btn--flat" to="/something/commenting">
            Test-button
          </Link>
        </li>
        <Route path="/something/commenting" component={Comments} exact />
      </Suspense>
    </Fragment>
  );
};

export default Something;
