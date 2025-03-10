import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl text-gray-700 mt-4 font-playfair">Oops! Page Not Found</p>
      <p className="text-gray-500 mt-2 font-playfair">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 bg-textcolor text-white px-6 py-2 rounded-md shadow-md hover:bg-textcolor"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Notfound;
