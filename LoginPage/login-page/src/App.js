import './App.css'
import { RiUser5Fill } from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";

function App() {
  return (
    <div className='background'>

      <div className='wrapper'>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
          <form action="">
              <h1>Code4Dad</h1>
              <div className='input-box'>
                  <input type="text" placeholder='Username' required/>
                  <RiUser5Fill className='icon' />
              </div>
              <div className='input-box'>
                  <input type="password" placeholder='Password' required/>
                  <FaUnlockAlt className='icon' />
              </div>
              
              <button type="submit">Login</button>
          </form>
      </div>

    </div>
  );
}

export default App;
