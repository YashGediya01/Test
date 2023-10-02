import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PiDotsThreeOutlineVerticalDuotone } from 'react-icons/pi'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { delData, editData, setData } from '../Redux/Actions/userAction'

const Card = () => {
    const [valID, setValID] = useState()
    const [updateData, setUpdateData] = useState()


    const dataValue = useSelector(state => state.data.user)
    const dispatch = useDispatch()

    const handleDelete = (val) => {
        dispatch(delData(val))
    }

    const handleShowUpdate = (id, val) => {
        setValID(id)
        setUpdateData(val)
        dispatch(setData(id))
    }

    const handleChangeUpdate = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }

    const handleUpdate = () => {
        dispatch(editData(updateData))
        setValID('')
    }


    return (
        <div className='my-20 px-10'>
            <div className="grid grid-cols-3 gap-5">
                {dataValue && dataValue.map((val, i) => {
                    return (
                        <div key={i} className='shadow-xl rounded-xl p-5 border-2 border-blue-200 relative'>
                            <div className='flex gap-3 justify-end items-center h-[30px]'>
                                {val.id === valID &&
                                    <button onClick={handleUpdate} className='border-blue-400 border text-blue-400 text-sm px-4 py-1 font-semibold rounded-lg'>Save</button>
                                }
                                <Menu placement='bottom-end'>
                                    <MenuHandler>
                                        <button className='focus:outline-none'><PiDotsThreeOutlineVerticalDuotone /></button>
                                    </MenuHandler>
                                    <MenuList className='py-[8px] px-0 min-w-[150px]'>
                                        <MenuItem className='rounded-none py-[4px] font-semibold text-gray-800' onClick={() => handleShowUpdate(val.id, val)}>Update</MenuItem>
                                        <MenuItem className='rounded-none py-[4px] font-semibold text-red-600' onClick={() => handleDelete(val.id)}>Delete</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <div className='h-[30px] flex gap-3 items-center mt-2'>
                                <h3 className='w-[70px]'>Name:</h3>
                                {val.id === valID ?
                                    <input type="text" name='name' value={updateData.name} onChange={handleChangeUpdate} className='h-[28px] border border-blue-gray-100 w-[80%] focus:outline-none py-1 px-2 rounded-md' /> :
                                    <span className='font-semibold'>{val.name}</span>
                                }
                            </div>
                            <div className='h-[30px] items-center flex gap-3'>
                                <h3 className='w-[70px]'>School:</h3>
                                {val.id === valID ?
                                    <input type="text" name='school' value={updateData.school} onChange={handleChangeUpdate} className='h-[28px] border border-blue-gray-100 w-[80%] focus:outline-none py-1 px-2 rounded-md' /> :
                                    <span className='font-semibold'>{val.school}</span>
                                }
                            </div>
                            <div className='h-[30px] items-center flex gap-3'>
                                <h3 className='w-[70px]'>Email:</h3>
                                {val.id === valID ?
                                    <input type="text" name='email' value={updateData.email} onChange={handleChangeUpdate} className='h-[28px] border border-blue-gray-100 w-[80%] focus:outline-none py-1 px-2 rounded-md' /> :
                                    <span className='font-semibold'>{val.email}</span>
                                }
                            </div>
                            <div className='h-[30px] items-center flex gap-3'>
                                <h3 className='w-[70px]'>Number:</h3>
                                {val.id === valID ?
                                    <input type="number" name='number' value={updateData.number} onChange={handleChangeUpdate} className='h-[28px] border border-blue-gray-100 w-[80%] focus:outline-none py-1 px-2 rounded-md' /> :
                                    <span className='font-semibold'>{val.number}</span>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card