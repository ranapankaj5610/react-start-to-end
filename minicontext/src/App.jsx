import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    //UserContextProvider is the context provider we have created in the context folder. Now we can use the props we have passed from the provider in each children component we have wrappped inside this provider.
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
