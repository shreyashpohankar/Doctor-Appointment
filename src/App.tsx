
import './App.css';
import { RouterProvider } from 'react-router-dom';
import MainRouter from './MainRouter/MainRouter';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setError } from './store/authStore/authReducer';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
 
  const { error, loading } = useSelector((state: any) => state.auth);
  
  
//console.log ('authState', authState)

  return (
    <div>
     {error !=  "" && <p className="bg-red-500"> 
       {error}  <button onClick ={() => dispatch(setError({error:''}))}>X</button>
        </p>}
    {loading != false && <span>   ... loading </span>  }
  
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;



  
