import logo2 from "../assets/logo2.png";
import OIP from "../assets/OIP.jpeg";

const Test = () => {
  return (
    <div className=" bg-gray-100">
      <div className=" px-8 py-12 max-w-md mx-auto">
        <img src={logo2} alt="logo" className="h-10" />
        <img
          src={OIP}
          alt="japanese temple"
          className="mt-6 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover "
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
          You can fund from anywhere
          <br />
          <span className=" text-indigo-500">
            Let us help you unlock your cash!
          </span>
        </h1>
        <p className="mt-2 text-gray-600">
          Create a contingiousy cash flow for your bussiuss in your shcdule
        </p>
        <div>
          <button className=" mt-4">
            <a
              href="#"
              className=" inline-block rounded-lg bg-indigo-500 hover:bg-indigo-400 focus:outline-none  text-white px-5 py-3 shadow-lg uppercase tracking-wider font-semibold text-sm"
            >
              start funding!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
