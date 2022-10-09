import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import FormUsers from './components/FormUsers'
import CardUser from './components/CardUser'

const baseURL = 'https://users-crud1.herokuapp.com'
function App() {
  const [users, setUsers] = useState()
  const [updateInfoUser, setUpdateInfoUser] = useState()
  const [formIsClose, setFormIsClose] = useState(true)

  // console.log(updateInfoUser);

  useEffect(() => {

    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])
// console.log(users);
const getAllUsers = () => {
  const URL = `${baseURL}/users/`
  axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
}

const createNewUser = data => {
  const URL = `${baseURL}/users/`
  
  axios.post(URL, data)
    .then(res => getAllUsers())
    .catch(err => console.log(err))
}
const handleOpenForm = () => {
    setFormIsClose(false)
}
  return (
    <div className="App">
      <h1>CRUD USERS</h1>
      <button onClick={handleOpenForm}>Create a New User</button>
      <div className={`form__container ${formIsClose && 'disable__form'}`}>

        <FormUsers 
            setFormIsClose={setFormIsClose}
            setUpdateInfoUser={setUpdateInfoUser} 
            getAllUsers={getAllUsers} 
            updateInfoUser={updateInfoUser} 
            createNewUser={createNewUser}/>
      </div>
      <div className='users__container'>
        {
          users?.map(user =>(
            <CardUser 
                setFormIsClose={setFormIsClose}
                getAllUsers={getAllUsers} 
                setUpdateInfoUser={setUpdateInfoUser} 
                key={user.id} user={user}/>
            
          ))
        }
      </div>
      
    </div>
  )
}

export default App
