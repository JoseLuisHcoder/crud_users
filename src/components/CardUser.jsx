import axios from 'axios';
import React from 'react'
import '../App.css'

const CardUser = ({setFormIsClose, user, setUpdateInfoUser, getAllUsers}) => {
    // console.log(user);
    

const getUpdateUser = () => {
        setUpdateInfoUser(user)
        setFormIsClose(false)
    }

const deleteUserId = id => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    axios.delete(URL)
        .then(res => getAllUsers())
        .catch(err => console.log(err))
}
  return (
    <div className='user'>
        <ul className='user__list'>
            <li><span>Name: </span>{user.first_name} {user.last_name}</li>
            <li><span>Email: </span>{user.email}</li>
        </ul>
        <button onClick={getUpdateUser}>Update</button>
        <button onClick={() => deleteUserId(user.id)}>delete</button>
    </div>
  )
}

export default CardUser