import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, TextInput } from "flowbite-react";
import { useAuthContext } from "../../context/authContext";
import { useRouter } from "next/router";

const URL = "http://localhost:3000/api/usuarios";

function Login() {
  /*   const { login, saveInfo } = useAuthContext(); */
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const { login, isAuthenticated, saveInfo } = useAuthContext();

  useEffect(() => {
    isAuthenticated && router.back();
  }, []);

  function handleInputUserChange(e) {
    setUserName(e.target.value);
  }

  function handleInputPassChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${URL}/${userName}/${password}`);
      const { nombre, id_rol } = data[0];
      saveInfo(id_rol, nombre);
      login();
      router.push("/");
    } catch (error) {
      console.log(error);
      setMessage("user or password doesn`t exist");
    }
  }

  return (
    <div className="max-w-sm w-3/4 h-4/5 flex flex-col justify-center mx-auto">
      <Card>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <p className="error">{message}</p>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Usuario</p>
            </div>
            <TextInput
              id="user1"
              type="text"
              required={true}
              value={userName}
              onChange={handleInputUserChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Contraseña</p>
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
              value={password}
              onChange={handleInputPassChange}
            />
          </div>
          <div className="flex justify-between">
            <Button type="submit">Ingresar</Button>o
            <Button color='failure' type="button" onClick={()=>router.push('/register')}>Registrarse</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
