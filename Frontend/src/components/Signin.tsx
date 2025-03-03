import React, { useState } from 'react'
import { Button } from './ui/button';

const Signin = () => {
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
		if(name==='photes' && files)
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
		console.log(formData);
	}


  return (
	<>
	<div className='h-screen bg-slate-700 flex items-center justify-center'>
		<div className='bg-white rounded-2xl p-5'>
			<div className='text-center mb-2'>
				<h1 className='text-3xl font-semibold'>Sign In</h1>
			</div>
			<form className='flex flex-col' method='post' encType='multipart/form-data' onSubmit={handleSubmit}>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl mb-2' htmlFor="userame">Username:</label>
					<input className='border border-gray-400 rounded-md p-2' onChange={handleChange} value={formData.username} type="text" id="username" name='username' placeholder='Enter Username...' required />
				</div>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl mb-2' htmlFor="email">Email:</label>
					<input className='border border-gray-400 rounded-md p-2' onChange={handleChange} value={formData.email} type="email" id='email' name='email' placeholder='Enter your email...'/>
				</div>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl mb-2' htmlFor="password">Password:</label>
					<input className='border border-gray-400 rounded-md p-2' onChange={handleChange} value={formData.password} type="password" id='password' name='password' placeholder='Enter your password...'/>
				</div>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl mb-2' htmlFor="photo">Upload Photo:</label>
					<input className='border border-gray-400 rounded-md p-2' onChange={handleChange} type="file" required id='photo' name='photo' placeholder='Upload your photo...' />
				</div>
				<div>
				<Button type='submit' className='hover:cursor-pointer w-full'>Sign In</Button>
				</div>
			</form>
		</div>

	</div>
	</>
  )
}

export default Signin