import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({setFormIsClose, setUpdateInfoUser, getAllUsers, createNewUser, updateInfoUser}) => {
    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
        if(updateInfoUser){
            reset(updateInfoUser)
        }
    }, [updateInfoUser])
    
    const submit = data => {
        if(updateInfoUser){
            const URL = `https://users-crud1.herokuapp.com/users/${updateInfoUser.id}/`
            axios.patch(URL, data)
                .then(res =>{
                    console.log(res.data)
                    getAllUsers()
                })
            .catch(err => console.log(err))
            reset(defaultValue)
            setUpdateInfoUser()
        }else{
            
            createNewUser(data)
            reset(defaultValue)
            
        }
        setFormIsClose(true)
    }
    const defaultValue = {
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        birtday:''
    }

    const handleCloseForm = () => {
        setFormIsClose(true)
    }
  return (
    <form className='form' onSubmit={handleSubmit(submit)} >
        <div className='form__title'>
            <h2>New User</h2>
            <i  onClick={handleCloseForm} className='bx bxs-x-circle'></i>
        </div>
        <div className='form__input'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email"/>
        </div>
        <div className='form__input'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password"/>
        </div>
        <div className='form__input'>
            <label htmlFor="first_name">First name</label>
            <input {...register('first_name')} type="text" id="first_name"/>
        </div>
        <div className='form__input'>
            <label htmlFor="last_name">Last name</label>
            <input {...register('last_name')} type="text" id="last_name"/>
        </div>
        <div className='form__input'>
            <label htmlFor="birtday">Birtday</label>
            <input {...register('birtday')} type="date" id="birtday"/>
        </div>
        <button className='form__btn'>{updateInfoUser ? 'Update' : 'Create'}</button>

    </form>
  )
}

export default FormUsers