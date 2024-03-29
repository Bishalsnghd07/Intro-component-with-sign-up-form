import { useRef, useState } from "react";

export default function Form() { 
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    
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
      
      if (validateFirstName(firstNameInput.value)){
        setFirstNameError('');
      } else {
        setFirstNameError('First Name cannot be empty');
      }
  
      if (validateLastName(lastNameInput.value)){
        setLastNameError('');
      } else {
        setLastNameError('Last Name cannot be empty');
      }
  
      if(validateEmail(emailInput.value)) {
        setEmailError('');
      } else {
        setEmailError('Email cannot be empty');
      }
      
      if (validatePassword(passwordInput.value))
      {
        setSuccessMessage('Thanks for signing up!')
        setFormSubmitted(true);
        console.log("Form submitted state:", formSubmitted);
      } else {
        return;
      }
    }
  
    const thanksForm = () => {
      setFormSubmitted(false);
    }  

 return (
    <div className="bg-white p-6 md:p-0 md:pl-8 md:pr-8 md:pt-4 md:pb-10 w-full rounded-lg shadow-card">
  {!formSubmitted && (

<form className="w-full mx-auto" onSubmit={handleSubmit}>
<div className="mb-5 mt-5 relative">
    <input type="firstName" id="firstName" className={`peer-invalid:text-red-500 bg-gray-50 border border-gray-300 text-lg font-bold text-black rounded-lg focus:ring-purple-700 placeholder:font-bold focus:border-purple-700 block w-full p-2.5 py-[0.84rem] px-8 dark:focus:border-purple-700 focus-visible:outline-purple-700 focus-visible:outline-1 focus-visible:outline`} placeholder="First Name" />
    {firstNameError && (
    <img src="/images/icon-error.svg" alt="" className="absolute top-2 right-0 mt-2 mr-2" />
  )}
  {firstNameError && <p className="text-red-500 text-sm mt-2 text-right italic">{firstNameError}</p>}
</div>
  <div className="mb-5 mt-5 relative">
    <input type="lastName" id="lastName" className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-purple-700 focus:border-purple-700 placeholder:font-bold font-bold block w-full p-2.5 py-[0.84rem] px-8 dark:focus:ring-purple-700 dark:focus:border-purple-700  focus-visible:outline-purple-700 focus-visible:outline-1 focus-visible:outline" placeholder="Last Name" />
    {lastNameError && (
    <img src="/images/icon-error.svg" alt="" className="absolute top-2 right-0 mt-2 mr-2" />
  )}
  {lastNameError && <p className="text-red-500 text-sm mt-2 text-right italic">{lastNameError}</p>}
  </div>
  <div className="mb-5 mt-5 relative">
    <input type="email" id="email" className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-purple-700 focus:border-purple-700 placeholder:font-bold font-bold block w-full p-2.5 py-[0.84rem] px-8 dark:focus:ring-purple-700 dark:focus:border-purple-700  focus-visible:outline-purple-700 focus-visible:outline-1 focus-visible:outline" placeholder="Email" />
    {emailError && (
    <img src="/images/icon-error.svg" alt="" className="absolute top-2 right-0 mt-2 mr-2" />
  )}
  {emailError && <p className="text-red-500 text-sm mt-2 text-right italic">{emailError}</p>}
  </div>

  <div className="mb-5 relative">
  <input 
    type="password" 
    id="password" 
    className="bg-gray-50 border border-gray-300 text-lg rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-full p-2.5 py-[0.84rem] px-8 dark:focus:ring-purple-700 dark:focus:border-purple-700 placeholder:font-bold focus-visible:outline-purple-700 focus-visible:outline-1 focus-visible:outline" 
    placeholder="Password"
  />
  {passwordError && (
    <img src="/images/icon-error.svg" alt="" className="absolute top-2 right-0 mt-2 mr-2" />
  )}
  {passwordError && <p className="text-red-500 text-sm mt-2 text-right italic">{passwordError}</p>}
</div>

  <button type="submit" className="text-white bg-green-700 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg md:text-xl w-full py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  transition duration-500 shadow-card hover:translate-y-1 ease-linear ">CLAIM YOUR FREE TRIAL</button>
  <p className="mt-4 w-full text-gray-600 tracking-tight text-sm text-center">By clicking the button, you are agreeing to our{" "}
  <a href="https://github.com/Bishalsnghd07?tab=repositories" className="text-amber-800 font-semibold text-sm group">Terms and Services
  </a>
  </p>
</form>
  )} {formSubmitted && (
    <div className={`text-gray-600 tracking-tight flex flex-col p-2`}>
      <h2 className="text-xl font-bold mb-2 text-center md:text-left"><span className='text-purple-700'>Thanks</span> for signing up!</h2>
    <p className="text-base font-poppins mt-4 text-center md:text-left">Please check your email <span className="font-medium text-black">{(document.getElementById('email') as HTMLInputElement).value}</span> to confirm your registration.</p>
      <button type="button" onClick={thanksForm} id="dismiss" className={`md:max-w-[22rem] font-medium text-lg mt-4 py-3 text-center bg-amber-600 rounded-lg text-white cursor-pointer hover:bg-amber-800 duration-500`}> Dismiss message
      </button>
    </div>
  )}
</div>
 );
}
