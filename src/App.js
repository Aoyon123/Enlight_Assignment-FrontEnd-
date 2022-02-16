import "./App.css";
import UserProvider from "./store/use-Provider";
import Dashboard from "./components/Dashboard/Dashboard";
const App = () => {
  return (
    <UserProvider>
      <Dashboard/>
      
    </UserProvider>
  );
};

export default App;
