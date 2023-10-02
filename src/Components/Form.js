import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../Redux/Actions/userAction'

const Form = () => {
    const [data, setData] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, school, email, number } = data
        const allInputData = { id: new Date().getTime().toString(), name, school, email, number }
        dispatch(addData(allInputData))
        e.target.reset()
        setData({ name: '', school: '', email: '', number: '' })
    }
    return (
        <div>
            <div className='max-w-[600px] mx-auto p-5 rounded-lg shadow-lg mt-10'>
                <form onSubmit={handleSubmit}>
                    <div className='flex items-center'>
                        <label className='max-w-[150px] w-full'>Name</label>
                        <input required type="text" name='name' value={data.name} onChange={handleChange} className='border border-blue-gray-100 w-full focus:outline-none py-1 px-2 rounded-md' />
                    </div>
                    <div className='flex items-center mt-2'>
                        <label className='max-w-[150px] w-full'>School</label>
                        <input required type="text" name='school' value={data.school} onChange={handleChange} className='border border-blue-gray-100 w-full focus:outline-none py-1 px-2 rounded-md' />
                    </div>
                    <div className='flex items-center mt-2'>
                        <label className='max-w-[150px] w-full'>Email</label>
                        <input required type="text" name='email' value={data.email} onChange={handleChange} className='border border-blue-gray-100 w-full focus:outline-none py-1 px-2 rounded-md' />
                    </div>
                    <div className='flex items-center mt-2'>
                        <label className='max-w-[150px] w-full'>Number</label>
                        <input required type="number" name='number' value={data.number} onChange={handleChange} className='border border-blue-gray-100 w-full focus:outline-none py-1 px-2 rounded-md appearance-none' />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <button type='submit' className="bg-blue-400 text-white px-8 py-1.5 font-medium rounded-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form