import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { FiEdit, AiOutlineDelete } from "react-icons/all"

export default function Query() {

    // function Fetch
    const getUserData = async () => {
        // mengambil API 
        try {
            const result = await fetch("https://jsonplaceholder.typicode.com/albums",
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

    // react query, perbedaan antara fetch dengan axios bisa liat di bawah ini, serta tidak perlu memakai state untuk menginisialisasikan
    const { data, isLoading, isError, refetch } = useQuery(['use_data'], getUserData, {
        staleTime: 60000
    })

    // jika fetch melakukan proses loading
    if (isLoading) {
        return (
            <div>Loading Please Wait...</div>
        )
    }

    // jika fetch mengalami kendala
    if (isError) {
        return (
            <div>Terjadi Kendala Saat Mengambil Data</div>
        )
    }

    return (
        <div>
            <h1 className='text-center'>Halaman Query</h1>

            <table className='w-full mt-6'>

                <thead className='h-12 bg-slate-100 font-medium text-center px-2'>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {data.map((s, y) => (
                        <tr key={s.id} className='h-12 bg-slate-200 text-center hover:bg-slate-300'>
                            <td>{y + 1}</td>
                            <td>{s.title}</td>
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
