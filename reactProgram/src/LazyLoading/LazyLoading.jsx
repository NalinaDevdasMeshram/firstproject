// import NewLazyLoading from "./NewLazyLoading";
import React, { Suspense } from "react";
const NewLazyLoading = React.lazy(() => import("./NewLazyLoading"));
const LazyLoading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Learning Lazy Loading Concept</h1>
      <Suspense fallback={<div>Loading Data...</div>}>
        <NewLazyLoading />
      </Suspense>
    </div>
  );
};

export default LazyLoading;
