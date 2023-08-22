import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,Navigate } from 'react-router-dom';
import { useAuth } from '../components/PageContext';

interface ObCat{
    id:number;
    url:string;
    width:number;
    height:number;
}

function random() {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  console.log(isAuthenticated);
    const navigate = useNavigate();
    const [isLoading,setIsloading] = useState<boolean>(false)
    const [datacat,setdatacat] = useState<ObCat[]>([]);

    useEffect(() =>{
        FechRandom();
    },[]);

    const FechRandom = () =>{
        setIsloading(true)
        const apiUri ='https://api.thecatapi.com/v1/images/search?format=json';
        axios.get(apiUri)
        .then(Response => {
            setdatacat(Response.data);
            console.log(Response.data);
            setIsloading(false)
        })
        .catch(e =>{
            console.error("Fect Error: ",e);
            setIsloading(false)
        });
    }
    const logouts = () =>{
      logout();
      navigate('/');
    }

  return (
    <>
        {isAuthenticated === true ? (
        <div className="Card-content">
          <div className="Card-Logout">
            <button className="Cat-btn-logout" onClick={logouts}>
              Logout
            </button>
          </div>
          <div className="Card">
            <h1>
              {isLoading ? <p>loading</p> : <p>Random Cat</p>}
            </h1>
            {datacat.map((item, index) => (
              <li key={index}>
                <div className="Cat-img">
                  <img src={item.url} alt={`Cat ${index}`} />
                </div>
              </li>
            ))}
            <div className="Cat-Button">
              <button onClick={FechRandom}>Random</button>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
   
  )
}

export default random;
