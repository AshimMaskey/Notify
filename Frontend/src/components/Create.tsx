import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

export const Create = () => {
	const [formData, setFormData]=useState<{title: string, description: string}>({
		title:'',
		description: ''
	});

	const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		console.log(formData);
	};

	const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
		const {name,value}= e.target;
		setFormData((prevData)=>({
			...prevData,
			[name]:value
		}))
	}
  return (
	<div className='bg-slate-700 h-screen p-10'>
		<div className='bg-white rounded-2xl p-7'>
			<div className='text-center mb-10'>
				<h1 className='font-bold text-2xl'>Write a New Note</h1>
			</div>
			<form className='flex flex-col' action="" method='post' onSubmit={handleSubmit}>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl' htmlFor="title">Title</label>
					<input onChange={handleChange} required type="text" className='border rounded-md p-2' id='title' name='title' placeholder='Enter your title' />
				</div>
				<div className='flex flex-col mb-7'>
					<label className='font-semibold text-xl' htmlFor="description">Description</label>
					<textarea onChange={handleChange} required name="description" className=" h-40 resize-none border rounded-md p-2" id="description" placeholder='Enter the description'></textarea>
				</div>
				<div>
					<Button type='submit' className='hover:cursor-pointer'>Add Note</Button>
				</div>
			</form>
		</div>
	</div>
  )
}
