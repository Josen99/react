import React, {usestate} from 'react';
import axios from 'axios'

function login( {onLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('https://localhost:3001/login', {username, password});

        } catch (err) {
            setError('Login fallito.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <input
                type='text'
                placeholder='Username'
                value={password}
                onChange={(e) => setUsername(e.target.value)}
            />
<input
                type='text'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
    );
}

export default Login;