import React from 'react'
import { useState, useEffect } from 'react'
import { FiEdit, AiOutlineDelete } from "react-icons/all"

export default function FetchApi() {

    // state
    const [users, setUser] = useState([]);

    // function Fetch
    const getUserData = async () => {
        // mengambil API 
        try {
            const result = await fetch("https://jsonplaceholder.typicode.com/users",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            const data = await result.json()
            return data

            // menangkap error
        } catch (error) {
            return error
        }
    }

    // component did mount
    useEffect(() => {
        getUserData()
            .then((res) => {
                // console.info(res)
                setUser(res)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    if (!users) {
        return (
            <div>
                Loading Please wait...
            </div>
        )

    }

    return (
        <div>

            <h1 className='text-center'>Halaman Fetch API</h1>
            <table className='w-full mt-6'>

                <thead className='h-12 bg-slate-100 font-medium text-center px-2'>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map((e, i) => (
                        <tr key={e.id} className='h-12 bg-slate-200 text-center hover:bg-slate-300'>
                            <td>{i + 1}</td>
                            <td>{e.username}</td>
                            <td>{e.email}</td>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>
                                <div className='w-full flex gap-2 justify-center'>
                                    <button className='h-10 text-green-600 justify-between'><FiEdit /></button>
                                    <button className='h-10 text-red-600 justify-between'><AiOutlineDelete /></button>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
