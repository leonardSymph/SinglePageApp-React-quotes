import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import AllQuote from "./pages/AllQuote";
// import NewQuote from "./pages/NewQuote";
// import QuoteDetail from "./pages/QuoteDetail";
// import NotFound from "./pages/NotFound";

// lazy-loading components
const AllQuote = React.lazy(() => import("./pages/AllQuote.js"));
const NewQuote = React.lazy(() => import("./pages/NewQuote.js"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail.js"));
const NotFound = React.lazy(() => import("./pages/NotFound.js"));

// practice component
// import Something from "./pages/Something";
const Something = React.lazy(() => {
  return import("./pages/Something.js");
});

const Spinner = (
  <div>
    <LoadingSpinner />
  </div>
);

function App() {
  return (
    <Layout>
      <Suspense fallback={Spinner}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote" component={NewQuote} />
          <Route path="/something" component={Something} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
