import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faPenToSquare, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
	const websiteName:String="Notify";

	interface navI{
		id: number,
		title: string,
		path: string,
		icon: IconDefinition,
	}

	const navLinks:navI[]=[
		{
			id:1,
			title:"Create",
			path:"/create",
			icon:faPenToSquare
		},
		{
			id:2,
			title:"Search",
			path:"/search",
			icon:faMagnifyingGlass
		},
	]
  return (
	<>
	<div  className='bg-slate-800 py-4 px-5 md:px-10 flex justify-between'>
		<div>
			<Link to='/'>
				<h1 className='text-white font-bold text-3xl italic'>{websiteName}</h1>
			</Link>
		</div>
		<div>
			<ul className="flex">
				{
					navLinks.map((item)=>{
						return <li className="text-lg hover:text-emerald-400 duration-200 sm:text-xl ml-6 sm:ml-10 mt-2 text-white" key={item.id}>
							<NavLink className={({isActive})=>isActive?"text-emerald-300":"text-white"} to={item.path}>
							<FontAwesomeIcon className="mr-3" icon={item.icon} />{item.title}
							</NavLink>
						</li>
						
					})
				}
			</ul>

		</div>
		<div>
			<Link to='/profile'>
				<Avatar className="w-11 h-11">
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>AM</AvatarFallback>
				</Avatar>
			</Link>
		</div>
	</div>
	</>
  )
}

export default Header