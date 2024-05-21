import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#FF6347"
      ariaLabel="three-circles-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      wrapperClass=""
    />
  );
};

export default Loader;
