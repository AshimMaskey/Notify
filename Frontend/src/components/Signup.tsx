import React, { useState } from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Signup = () => {
	interface form{
		username: string,
		email: string,
		password: string,
		photo: File | null
	}
	const [formData, setFormData]=useState<form>({
		username: "",
		email: "",
		password: "",
		photo: null
	});

	const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
		const {value,name,files}=e.target;
		if(name==='photo' && files)
		{
			setFormData((prev)=>({
				...prev,
				photo: files[0]
			}))
		}
		else{
			setFormData((prev)=>(
				{
				...prev,
				[name]: value
				}
			)
			)
		}
	}

	const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		const data=new FormData();
		data.append("username", formData.username);
		data.append("email", formData.email);
		data.append("password", formData.password);
		if(formData.photo){
			data.append("photo", formData.photo);
		}
	}


  return (
	<>
	<div className='h-screen bg-slate-700 flex items-center justify-center'>
		<div className='bg-white rounded-2xl p-5'>
			<div className='text-center mb-2'>
				<h1 className='text-3xl font-semibold'>Sign Up</h1>
			</div>
			<form className='flex flex-col' method='post' encType='multipart/form-data' onSubmit={handleSubmit}>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl mb-2' htmlFor="userame">Username:</label>
					<input className='border w-3xs sm:w-sm border-gray-400 rounded-md p-2' onChange={handleChange} value={formData.username} type="text" id="username" name='username' placeholder='Enter Username...' required />
				</div>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl mb-2' htmlFor="email">Email:</label>
					<input className='border w-3xs sm:w-sm border-gray-400 rounded-md p-2' onChange={handleChange} value={formData.email} type="email" id='email' name='email' placeholder='Enter your email...'/>
				</div>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl mb-2' htmlFor="password">Password:</label>
					<input className='border w-3xs sm:w-sm border-gray-400 rounded-md p-2' onChange={handleChange} value={formData.password} type="password" id='password' name='password' placeholder='Enter your password...'/>
				</div>
				<div className='flex flex-col mb-2'>
					<label className='font-semibold text-xl mb-2' htmlFor="photo">Upload Photo:</label>
					<input className='border w-3xs sm:w-sm border-gray-400 rounded-md p-2' onChange={handleChange} type="file" required id='photo' name='photo' placeholder='Upload your photo...' />
				</div>
				<div className='mb-2'>
					Already have an Account? <Link className='text-blue-700 underline hover:text-blue-800' to='/signin'>Sign In</Link>
				</div>
				<div>
				<Button type='submit' className='hover:cursor-pointer w-full'>Sign Up</Button>
				</div>
			</form>
		</div>

	</div>
	</>
  )
}

export default Signup