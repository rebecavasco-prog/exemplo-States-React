import Label from "./Label.jsx";
import Labelln from "./Labelln.jsx";
import Button from "./Button.jsx";
import InputText from "./InputText.jsx";
import InputPassword from "./InputPassword.jsx";

export default function Login() {
  return (<>
    <Labelln texto="Login"/>
    <Label texto="Usuário: "/>
    <InputText placeholder="user..."/> <br/>
    <Label texto="Senha: "/>
    <InputPassword placeholder="password..."/> <br/>
    <Button valor="Logar"/>
  </>);
}
