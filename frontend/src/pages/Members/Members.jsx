import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const Members = () => {
    const { handleSearch, search } = useContext(SearchContext)
    const [members, setMembers] = useState([]);

    async function GetMembers() {
        try {
            await fetch("http://localhost:3200/members")
                .then(res => res.json())
                .then(data => setMembers(data))
        } catch (error) {
            console.log(error.message);
        }
    }

    async function DeleteMembers(id) {
        await fetch("http://localhost:3200/members/" + id, { method: 'DELETE' });
        await GetMembers()
    }

    useEffect(() => {
        GetMembers();
    }, []);

    return (
        <>
            <section className='w-[70%] mx-auto my-[50px] mr-[50px]'>
                <div className="">
                    <div className='flex items-center justify-between mb-[10px]'>
                        <h1 className='font-poppins text-[42px] font-[600]'>Members</h1>
                        <button className=' font-inter  h-10 rounded-xl bg-[#874CCC] text-white leading-6 px-[24px] text-[16px] font-semibold shadow-[rgba(10,11,12,0.1)_0px_1px_2px] hover:bg-[#86469C] transition-[all] duration-[0.5s] ease'><Link to={"/addmember"}>Add Member</Link></button>
                    </div>
                    <div className='flex items-center gap-[10px] mb-[10px]'>
                        <input type="text" className=" py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Search Name" onChange={handleSearch} />
                    </div>
                    <div className="text-right">
                        <table className='shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] w-full border-collapse rounded-[10px]'>
                            <thead>
                                <tr className=' text-left h-2.5 '>
                                    <th className='text-[black] border text-center px-[10px] py-[10px] '>Name</th>
                                    <th className='text-[black] border text-center px-[10px] py-[10px] '>Surname</th>
                                    <th className='text-[black] border text-center px-[10px] py-[10px] '>University</th>
                                    <th className='text-[black] border text-center px-[10px] py-[10px] '>Course</th>
                                    <th className='text-[black] border text-center px-[10px] py-[10px] '>Field</th>
                                    <th className='text-[black] border text-center px-[10px] py-[10px] '>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members && members
                                    .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                                    .map((members) => (
                                        <tr key={members._id}>
                                            <td className='text-[black] border text-center px-[10px] py-[10px] '>{members.name}</td>
                                            <td className='text-[black] border text-center px-[10px] py-[10px] '>{members.surname}</td>
                                            <td className='text-[black] border text-center px-[10px] py-[10px] '>{members.university}</td>
                                            <td className='text-[black] border text-center px-[10px] py-[10px] '>{members.course}</td>
                                            <td className='text-[black] border text-center px-[10px] py-[10px] '>{members.field}</td>
                                            <td className='text-[black] border text-center px-[10px] py-[10px] '>
                                                <button className='text-white font-poppins bg-[#4C43CD] bg-[radial-gradient(93%_87%_at_87%_89%,rgba(0,0,0,0.23)_0%,transparent_86.18%),radial-gradient(66%_87%_at_26%_20%,rgba(255,255,255,0.41)_0%,rgba(255,255,255,0)_69.79%,rgba(255,255,255,0)_100%)] shadow-[2px_19px_31px_rgba(0,0,0,0.2)] font-[bold] text-base select-none touch-manipulation cursor-pointer px-[25px] py-[12px] rounded-[100px] border-0' onClick={() => DeleteMembers(members._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Members