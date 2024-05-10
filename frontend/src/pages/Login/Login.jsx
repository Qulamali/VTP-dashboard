import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';

const Login = () => {
    const navigate = useNavigate()
    const { addToken, decode, token } = useContext(UserContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    function handleChange(e, stateChanger) {
        stateChanger(e.target.value)
    }
    const handleSubmit = async evt => {
        evt.preventDefault();
        await fetch("http://localhost:3200/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                addToken(data);
                console.log(data);
            })
        token ? navigate("") : navigate("/members")
    };
    return (
        <>
            <section className=" h-screen py-[50px]">
                <div className=" h-full  flex flex-col justify-between items-center">
                    <h1 className="text-[#874CCC] text-5xl font-[bold] uppercase font-poppins">Buta Group</h1>
                    <div className="max-w-[384px] w-full m-auto p-[12px] flex flex-col gap-[16px]">
                        <p className="font-work text-[24px] font-semibold text-center font-['Work Sans, sans-serif']">Welcome back</p>
                        <form className="flex flex-col gap-[12px]" onSubmit={handleSubmit} >
                            <input value={email} onChange={(e) => handleChange(e, setEmail)} type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Email address" />
                            <input value={password} onChange={(e) => handleChange(e, setPassword)} type="password" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Password" />
                            <button className=' font-inter w-full h-10 rounded-xl bg-[#874CCC] text-white leading-6 px-[24px] text-[16px] font-semibold shadow-[rgba(10,11,12,0.1)_0px_1px_2px] hover:bg-[#86469C] transition-[all] duration-[0.5s] ease'>Continue with Email</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login