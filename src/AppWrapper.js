import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Access from './pages/Access';
import Landing from './pages/Landing';
import Documentation from './components/Documentation';
import MessagesDemo from './components/MessagesDemo';
import ControlArticulos from './components/ControlArticulos';
import AprobarArticulos from './components/AprobarArticulos';
import EstadosCuenta from './components/EstadosCuenta';
import VentasTargetas from './components/VentasTargetas';

const AppWrapper = ({ userData, usuarioUppercase }) => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <Routes>
            <Route path="/rsap/*">
                <Route path="login" element={<Login />} />
                <Route path="error" element={<Error />} />
                <Route path="notfound" element={<NotFound />} />
                <Route path="access" element={<Access usuarioUppercase={usuarioUppercase}/>}/>
                <Route path="landing" element={<Landing />} />
                <Route path="go/*" element={<App usuarioUppercase={usuarioUppercase} userData={userData} />}>
                    <Route path="ControlArticulos" element={<ControlArticulos />} />
                    <Route path="AprobarArticulos" element={<AprobarArticulos />} />
                    <Route path="EstadosCuenta" element={<EstadosCuenta />} />
                    <Route path="VentasTarjeta" element={<VentasTargetas />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppWrapper;