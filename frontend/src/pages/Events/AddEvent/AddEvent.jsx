import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const navigate = useNavigate()
    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")
    const [name, setName] = useState("")
    const [mentor, setMentor] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3200/events", {
            method: "POST",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ day: day, hour: hour, name: name, mentor: mentor })
        })
            .then(x => navigate("/events"))

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
                        <p className="font-work text-[24px] font-semibold text-center font-['Work Sans, sans-serif']">Add Event</p>
                        <form className="flex flex-col gap-[12px]" onSubmit={handleSubmit}>
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Gün" value={day} onChange={(e) => handleChange(e, setDay)} />
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Saat" value={hour} onChange={(e) => handleChange(e, setHour)} />
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Mövzü" value={name} onChange={(e) => handleChange(e, setName)} />
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Mentor" value={mentor} onChange={(e) => handleChange(e, setMentor)} />
                            <button className=' font-inter w-full h-10 rounded-xl bg-[#874CCC] text-white leading-6 px-[24px] text-[16px] font-semibold shadow-[rgba(10,11,12,0.1)_0px_1px_2px] hover:bg-[#86469C] transition-[all] duration-[0.5s] ease'>Add Event</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddEvent