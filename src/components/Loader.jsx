import PropagateLoader from "react-spinners/PropagateLoader";
import CircleLoader from "react-spinners/CircleLoader";

export function Loader() {
  return (
    <div className="py-2.5 h-12">
      <PropagateLoader
        color="#3e85f3"
        size={28}
        speedMultiplier={1}
        cssOverride={{
          margin: "0 auto",
        }}
      />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="absolute left-1/2 top-[calc(100vh/2)] transform -translate-x-1/2 -translate-y-1/2">
      <CircleLoader
        color="#3e85f3"
        size={100}
        speedMultiplier={1}
        cssOverride={{
          margin: "0 auto",
        }}
      />
    </div>
  );
}
