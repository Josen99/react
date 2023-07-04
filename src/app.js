import React, {usestate, useEffect} from 'react';
import axios from 'axios';
import axios from 'axios';
import header from './components/Header';
import Bio from './components/Bio';
import Contatti from './components/Bio';
import Progetti from './components/Progetti';
import Competenze from './components/Competenze';
import Login from 'Login';

function app(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const[token, setToken] = useState(null);

    const handleLogin = (token) => {
        setToken(token);
        setIsAuthenticated(true);
    };

    useEffect(() => {
        if (token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }

    }, [token]);

    return (
        <div>
            <Header />
            <Bio />
            {isAuthenticated ? (
                <React.Fragment>
                    <Progetti />
                    <Competenze />
                </React.Fragment>
            ) : (
                <Login onLogin = {handleLogin} />
            )}
            <Contatti />
        </div>
    );
}
