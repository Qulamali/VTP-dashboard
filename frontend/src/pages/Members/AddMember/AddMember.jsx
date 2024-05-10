import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddMember = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [university, setUniversity] = useState("")
    const [course, setCourse] = useState("")
    const [field, setField] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3200/members", {
            method: "POST",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ name: name, surname: surname, university: university, course: course,field:field })
        })
            .then(x => navigate("/members"))

    }
    function handleChange(e, stateChanger) {
        stateChanger(e.target.value)
    }
    return (
        <>
            <section className="max-w-[80%] mx-auto my-[50px]">
                <div className=" h-full  flex flex-col justify-between items-center">
                    <h1 className="text-[#874CCC] text-5xl font-[bold] uppercase font-poppins">Buta Group</h1>
                    <div className="max-w-[384px] w-full m-auto p-[12px] flex flex-col gap-[16px]">
                        <p className="font-work text-[24px] font-semibold text-center font-['Work Sans, sans-serif']">Add Member</p>
                        <form className="flex flex-col gap-[12px]" onSubmit={handleSubmit}>
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Name" value={name} onChange={(e) => handleChange(e, setName)} />
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Surname" value={surname} onChange={(e) => handleChange(e, setSurname)} />
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="University" value={university} onChange={(e) => handleChange(e, setUniversity)} />
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Course" value={course} onChange={(e) => handleChange(e, setCourse)} />
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Field" value={field} onChange={(e) => handleChange(e, setField)} />
                            <button className=' font-inter w-full h-10 rounded-xl bg-[#874CCC] text-white leading-6 px-[24px] text-[16px] font-semibold shadow-[rgba(10,11,12,0.1)_0px_1px_2px] hover:bg-[#86469C] transition-[all] duration-[0.5s] ease'>Add Event</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddMember