import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {

    const project_id = process.env.REACT_APP_PROJECT_ID;

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
        height = '100vh'
        projectID = {project_id}
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
        />
    );
}

export default App;