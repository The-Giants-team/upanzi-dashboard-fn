import { Search } from '@mui/icons-material';
import cornersvg from "../../../assets/cornersvg.svg";

const Welcome = () => {
  return (
    <div className="relative bg-white text-white p-4 bg-white ">
      <div className="flex items-center">
        <img src={cornersvg} alt="Corner SVG" className="absolute top-0 left-0" />
        <h1 className="text-2xl text-black font-bold ml-6">Welcome back Manzi,</h1>
        <div className="ml-auto relative border rounded flex items-center">
          <Search className="absolute left-0 ml-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-gray-800 px-8 py-2 focus:outline-none"
          />
        </div>
      </div>
      <p className="mt-2 text-gray-400 ml-6">Check the analytics of the platform</p>
    </div>
  );
};

export default Welcome;
