import basicSearch from '../../assets/BasicSearch.png';
import advancedSearch from '../../assets/AdvancedSearch.png';
import { Link } from 'react-router-dom';
const Search = () => {
    return (
    <div>


     <div className="md:flex items-center justify-center mt-20 gap-10 ">


    <div className=" rounded-md shadow-md bg-white text-gray-800 mb-4">
	<img src={basicSearch} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Basic Search</h2>
			<p className="text-gray-800">For searching in basic way click bellow.</p>
		</div>
		<Link to="/basicsearch">
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#E22232] hover:bg-[#f23343] text-gray-50">Basic Search</button>
		</Link>
	</div>
    </div>



    <div className=" rounded-md shadow-md bg-white text-gray-800 mb-4">
	<img src={advancedSearch} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Advanced Search</h2>
			<p className="text-gray-800">For searching in advanced way click bellow.</p>
		</div>

		<Link to="/advancedsearch">
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#E22232] hover:bg-[#f23343] text-gray-50">Advanced Search</button>
		</Link>
	</div>
    </div>
    </div>      

    </div>
    );
};

export default Search;