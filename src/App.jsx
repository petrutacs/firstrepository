import { Fragment } from 'react';
import './App.css';
import ButtonSBD from "./components/button/ButtonSBD";
import Input from './components/input/Input';


const App = () => {
  return (
    <Fragment>
      <h1>Test</h1>
      <ButtonSBD textButton={"Miu"} />
      <ButtonSBD textButton={"Adi"} />
      <ButtonSBD textButton={"Test"} />
      <Input type={"email"} placeholder={"type your email"} />
      <Input type={"password"} placeholder={"type your password"} />
    </Fragment>
  );
}

export default App;
