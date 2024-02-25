"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState('');

  const validateFirstName = (firstName: string) => {
    return firstName.length>=1;
  }

  const validateLastName = (lastName: string) => {
    return lastName.length>=1
  }

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email)
  }

  const validatePassword = (password: string) => {
    const uppercaseRegex = /[A-Z]/;
    if (password.trim() === '') {
      setPasswordError('Password cannot be empty')
    } else if (!uppercaseRegex.test(password)) {
      setPasswordError('First character of Password should be Capital')
    }
     else if (password.length<=8) {
      setPasswordError('Please enter a valid password(atleast 8 characters)')
    } else {
      setPasswordError('');
      return true;
    }
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const firstNameInput = document.getElementById('firstName') as HTMLInputElement
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement
    const emailInput = document.getElementById('email') as HTMLInputElement
    const passwordInput = document.getElementById('password') as HTMLInputElement

    if (!validateFirstName(firstNameInput.value)){
      setFirstNameError('First Name cannot be empty');
    } else {
      setFirstNameError('');
    }

    if (!validateLastName(lastNameInput.value)){
      setLastNameError('Last Name cannot be empty');
    } else {
      setLastNameError('');
    }

    if(!validateEmail(emailInput.value)) {
      setEmailError('Email cannot be empty');
    } else {
      setEmailError('');
    }

    if (!validatePassword(passwordInput.value))
    {
      return;
    }
    setSuccessMessage('Thanks for signing up!')
    setFormSubmitted('true');
  }
  return (
    <main className="flex font-poppins min-h-screen flex-col items-center justify-center p-8 bg-no-repeat bg-center bg-cover bg-[url('/images/bg-intro-desktop.png')] bg-red-400">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[4rem] w-full">
        <div className="flex flex-col items-end md:items-end md:justify-center rounded-xl text-center md:text-left">
          <div className="bg-amber-800 shadow-card p-6 rounded-lg">
        <h1 className="text-white text-3xl md:text-5xl font-bold w-full max-w-[24.2rem]">Learn to code by watching others</h1>
        <p className="text-white font-medium mt-4 md:mt-8 text-md text-center md:text-left max-w-[23.6rem]">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
        </div>
        <section className="flex flex-col items-center justify-center gap-8 max-w-[32rem]">
          <div className="flex flex-col lg:flex-row bg-purple-700 p-4 rounded-lg text-white w-full items-center justify-center shadow-card gap-2">
          <strong className="font-bold">Try free for 7 days</strong> 
          <p className="text-white"> then $20/mo. thereafter
            </p>
          </div>
          
<div className="bg-white p-6 md:p-8 w-full rounded-lg shadow-card">
  {!formSubmitted && (

<form className="w-full mx-auto" onSubmit={handleSubmit}>
<div className="mb-5 mt-5 relative">
    <input type="firstName" id="firstName" className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-full p-2.5 py-[0.84rem] px-8 dark:focus:ring-purple-700 dark:focus:border-purple-700  focus-visible:outline-purple-700 focus-visible:outline-1 focus-visible:outline" placeholder="First Name" />
    {firstNameError && (
    <img src="/images/icon-error.svg" alt="" className="absolute top-2 right-0 mt-2 mr-2" />
  )}
  {firstNameError && <p className="text-red-500 text-sm mt-2 text-right">{firstNameError}</p>}
</div>
  <div className="mb-5 mt-5 relative">
    <input type="lastName" id="lastName" className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-full p-2.5 py-[0.84rem] px-8 dark:focus:ring-purple-700 dark:focus:border-purple-700  focus-visible:outline-purple-700 focus-visible:outline-1 focus-visible:outline" placeholder="Last Name" />
    {lastNameError && (
    <img src="/images/icon-error.svg" alt="" className="absolute top-2 right-0 mt-2 mr-2" />
  )}
  {lastNameError && <p className="text-red-500 text-sm mt-2 text-right">{lastNameError}</p>}
  </div>
  <div className="mb-5 mt-5 relative">
    <input type="email" id="email" className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-full p-2.5 py-[0.84rem] px-8 dark:focus:ring-purple-700 dark:focus:border-purple-700  focus-visible:outline-purple-700 focus-visible:outline-1 focus-visible:outline" placeholder="Email" />
    {emailError && (
    <img src="/images/icon-error.svg" alt="" className="absolute top-2 right-0 mt-2 mr-2" />
  )}
  {emailError && <p className="text-red-500 text-sm mt-2 text-right">{emailError}</p>}
  </div>

  <div className="mb-5 relative">
  <input 
    type="password" 
    id="password" 
    className="bg-gray-50 border border-gray-300 text-lg rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-full p-2.5 py-[0.84rem] px-8 dark:focus:ring-purple-700 dark:focus:border-purple-700  focus-visible:outline-purple-700 focus-visible:outline-1 focus-visible:outline" 
    placeholder="Password"
  />
  {passwordError && (
    <img src="/images/icon-error.svg" alt="" className="absolute top-2 right-0 mt-2 mr-2" />
  )}
  {passwordError && <p className="text-red-500 text-sm mt-2 text-right">{passwordError}</p>}
</div>

  <button type="submit" className="text-white bg-green-700 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg md:text-xl w-full py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-card">CLAIM YOUR FREE TRIAL</button>
  <p className="mt-4 w-full text-gray-600 tracking-tight text-center md:text-left">By clicking the button, you are agreeing to our{" "}
  <a href="https://github.com/Bishalsnghd07?tab=repositories" className="text-amber-800 font-semibold text-sm group">Terms and Services
  </a>
  </p>
</form>
  )} {formSubmitted && (
    <div className="text-gray-600 tracking-tight text-center md:text-left">
      <h2 className="text-xl font-bold mb-2"><span className='text-purple-700'>Thanks</span> for signing up!</h2>
    <p className="text-base font-poppins mt-4">Please check your email to confirm your registration.</p>
    </div>
  )}
</div>

        </section>
      </section>
    </main>
  );
}

