import  { useState } from 'react'
import LogoAcc from '../assets/cat-symbol.svg'
import Userico from '../assets/user-svgrepo.svg'
import Passico from '../assets/password.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/PageContext';

function login() {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    
  const handleLogin = () => {
    if(username ==="cat")
    {
        if(password ==="cat1234") {
            alert("login successful");
            login();
            navigate('/random');
        }
        else{
            alert("Password not correct!");
        }
    }else{
        alert("Username not correct!");
    }

  };


  return (
    <div className="Login-Main">
        <div className="Login-logo">
            <img src={LogoAcc}></img>
        </div>
        <div className="Login-Input">
            <div className="Input-Item">
                <img src={Userico}></img>
                <input type="text" onChange={e =>setUsername(e.target.value)}></input>
            </div>
            <div className="Input-Item">
                <img src={Passico}></img>
                <input type="password" onChange={e =>setPassword(e.target.value)}></input>
            </div>
            <div className="Input-Button">
                <button onClick={handleLogin}>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default login