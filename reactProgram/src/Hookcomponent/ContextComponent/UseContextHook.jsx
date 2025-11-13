// Usecontext is a react hook which allow us to access data from any component without explicity passing it down through props at every level
// usecontext hook is use to manage global data in the raect app
import Profile from "./Profile";
import Footer from "./Footer";

const UseContextHook = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseContextHook</h1>
      <Profile />
      <Footer />
    </div>
  );
};

export default UseContextHook;
