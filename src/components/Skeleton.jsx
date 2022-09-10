import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={450}
    viewBox="0 0 300 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="111" cy="110" r="104" />
    <rect x="180" y="218" rx="0" ry="0" width="6" height="11" />
    <rect x="7" y="240" rx="0" ry="0" width="110" height="50" />
    <rect x="137" y="242" rx="0" ry="0" width="106" height="52" />
    <rect x="15" y="307" rx="0" ry="0" width="226" height="20" />
    <rect x="19" y="354" rx="0" ry="0" width="216" height="23" />
  </ContentLoader>
);

export default Skeleton;
