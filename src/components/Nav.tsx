import React, { useContext } from 'react';
import Logo from '../assets/rickmortylogo.png';
import { Store } from '../Store';

const Nav = () => {
	const { state: { favorites } } = useContext(Store);
	return (
		<nav className="flex items-center justify-between flex-wrap mb-0 bg-purple-dark sticky p-6">
			<div className="flex items-center flex-no-shrink text-white mr-6 sticky">
				<span className="tracking-tight">
					<img src={Logo} height={130} width={220} alt="" />
				</span>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4" />
					<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4" />
				</div>
				<div>
					<a
						href="#"
						className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-green mt-4 lg:mt-0"
					>
						Favorites: {favorites.length}
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
