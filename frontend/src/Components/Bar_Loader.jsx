import { Bars } from "react-loader-spinner";

const Bar_Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Bars
        height="80"
        width="80"
        color="#12B8D5"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Bar_Loader;
