import './App.css'
import Dropdown from './components/Dropdown.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className='bg'>
      <Dropdown/>
      <div className='box_wrapper'>
        <div className='display_box'><p>student</p></div>
        <div className='display_box'><p>course</p></div>
        <div className='display_box'><p>course-section</p></div>
      </div>
      <div className='wrapper'>
        <div className='box'>
          <input type="text" placeholder='student_id'/> 
          <button>summit</button>
        </div>
        <div className='box'>
          <input type="text" placeholder='course_id'/> 
          <button>summit</button>
        </div>
        <div className='box'>
          <input type="text" placeholder='course-section'/> 
          <button>summit</button>
        </div>
      </div>
      <Footer/>
    </div>
      
  )
}

export default App
