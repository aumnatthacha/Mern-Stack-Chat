/* eslint-disable no-unused-vars */
import RegisterAndLoginForm from "./components/RegisterAndLoginForm";
import Chat from "./components/Chat";
import { UserContext } from "./context/UseContext";
import { useContext } from "react";

import React from "react";

const Routes = () => {
    const { username } = useContext(UserContext)
    if (username) {
        return <Chat />;
    }
    return <RegisterAndLoginForm />
    
}

export default Routes