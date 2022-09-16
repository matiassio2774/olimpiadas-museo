import axios from 'axios'
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../context/authContext";
import { Card, Button, TextInput, Select } from "flowbite-react";
import {useRouter} from 'next/router'

const URL = "http://localhost:3000/api/usuarios";

function Register() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [disc, setDisc] = useState(0);
    const [message, setMessage] = useState("");

    const { isAuthenticated } = useAuthContext();
    const router = useRouter()

    useEffect(() => {
      isAuthenticated && router.back()
    }, [])

    function handleInputUserChange(e) {
        setUserName(e.target.value);
    }

    function handleInputPassChange(e) {
        setPassword(e.target.value);
    }

    function handleInputDiscChange(e) {
        setDisc(e.target.value);

    }

    async function handleSubmit(e) {
        e.preventDefault();
        // El usuario ya existe? SI: Error.  NO: Navigate(login)
        try {
            await axios.get(`${URL}/${userName}`);
            setMessage("user already exist");
            console.log('NO CREA')
          } catch (error) {
            try {
                await axios.post(`${URL}/new`, {
                  nombre: userName,
                  pass: password,
                  id_rol: 2,
                  discapacidad: disc
                });
                setMessage("The user has been successfully registered!");
                setTimeout(() => {
                  router.push('/login');
                }, 1500);
              } catch (error) {
                console.error(error);
                setMessage("error");
              }
          }
    }

    return (
        <div className="max-w-sm w-3/4 h-3/4 my-20 flex flex-col justify-center mx-auto">
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
                    <div>
                        <div className="mb-2 block">
                            <p className="font-semibold">Discapacidad visual</p>
                        </div>
                        <div id="select">
                            <Select id="disc" required={true} onChange={handleInputDiscChange}>
                                <option value='0' defaultValue>No</option>
                                <option value='1'>Si</option>
                            </Select>
                        </div>
                    </div>
                    <Button type="submit">Registrarse</Button>
                </form>
            </Card>
        </div>
    );
}

export default Register;
