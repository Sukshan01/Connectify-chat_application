import { useState } from "react"
import axios from 'axios'
import './LoginForm.css'

const LoginForm = () => {

    const handleClick = () => {
        window.location.href = "/";
    }

    const project_id = process.env.REACT_APP_PROJECT_ID;
    const logo = process.env.REACT_APP_LOGO;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': project_id, 'User-Name': username, 'User-Secret': password}

        try {
         await axios.get('https://api.chatengine.io/chats', { headers: authObject }); 

         localStorage.setItem('username', username);
         localStorage.setItem('password', password);

         window.location.reload();
        } catch (error) {

            setError('Oops!, Incorrect Credentials.')
            
        }
    }

    

    return (



        <div className="wrapper">

<img src={logo} className="logo" onClick={handleClick} alt="" />



        
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type = "text" value={username} onChange= {(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type = "password" value={password} onChange= {(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />

                    <div align="center">
                        <button type="submit" className="button">
                            <span className="start-chatting"> Start Chatting</span>
                        </button>
                    </div>

                    <h2 className="error">{error}</h2>

                </form>
            </div>
        </div>
        
    )
}

export default LoginForm;