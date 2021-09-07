import './App.css';
import Header from "./Components/Header"
import RegisterForm from "./Components/RegisterForm/RegisterForm"
import LoginForm from "./Components/LoginForm/LoginForm"
import "./App.css"

function App() {
  return (
    <div class="App">
      <Header />

      <div class="container d-flex align-items-center flex-row">
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
