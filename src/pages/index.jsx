import mainlogo from "../assets/upanzi.svg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <header className="w-full bg-green-500 text-white py-6">
        <h1 className="text-3xl text-center">Welcome to Upanzi Dashboard</h1>
      </header>
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src={mainlogo} alt="mainlogo" className="h-64 w-auto" />
      </div>
    </div>
  );
};

export default HomePage;