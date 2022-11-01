import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { FiEdit, AiOutlineDelete } from "react-icons/all"

export default function Axios() {

    // state
    const [posts, setPosts] = useState([])

    // get post data
    const getPostsData = async () => {
        try {
            // perbedaan antar fetch dengan axios terletak cara memanggil api, secara default udah Method : GET
            const result = await axios("https://jsonplaceholder.typicode.com/todos?_limit=50")
            return result

        } catch (error) {
            console.error(error)
        }
    }

    // componen did mount
    useEffect(() => {
        getPostsData()
            .then((res) => {
                // console.info(res)
                setPosts(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])


    return (
        <div>
            <h1 className='text-center'>Halaman Axios</h1>
            <table className='w-full mt-6'>

                <thead className='h-12 bg-slate-100 font-medium text-center px-2'>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {posts.map((q, t) => (
                        <tr key={q.id} className='h-12 bg-slate-200 text-center hover:bg-slate-300'>
                            <td>{t + 1}</td>
                            <td>{q.title}</td>
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
