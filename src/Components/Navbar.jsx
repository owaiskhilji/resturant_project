import { Link } from 'react-router-dom'



export default function Navbar() {

  
function openModal(){
  const modal = document.getElementById('my_modal_3')
  if (modal) {
    modal.showModal(); 
  } else {
    console.error("Modal not found!");
  }
}

  

  return (
      <div className="fixed z-10 navbar px-8 bg-white/80 shadow-md text-black h-[80px] sm:h-[80px] md:h-[80px] lg:h-[90px] border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm sm:menu-md md:menu-lg dropdown-content text-black bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="hover:text-textcolor hover:underline">
              <Link
              to="/"
              onClick={() => document.activeElement.blur()}
              >Home</Link>
            </li>
              <li className="hover:text-textcolor hover:underline">
              <Link
              
              onClick={() =>{ document.activeElement.blur()
                openModal()
              }}
              >Opening Hours</Link>
            </li>
            
            <li className="hover:text-textcolor hover:underline">
              <Link
              to="/prices"
              onClick={() => document.activeElement.blur()}
              >Prices</Link>
            </li>
            
            <li className="hover:text-textcolor hover:underline">
              <Link
              to="/menu"
              onClick={() => document.activeElement.blur()}
              >Menu</Link>
            </li>
            
            <li className="hover:text-textcolor hover:underline">
              <Link
              to="/about"
              onClick={() => document.activeElement.blur()}
              >About us</Link>
            </li>

            </ul>
          </div>
          <a className="text-textcolor font-bold font-merriweather text-lg sm:text-2xl md:text-3xl lg:text-4xl">PERTH RETREAT</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu-horizontal px-1 lg:gap-x-8">
          <li className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >
              <Link
              to="/"
              >Home</Link>
            </li>          
            
          <li className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >
              <Link
              onClick={openModal}
              >Opening Hours</Link>
            </li>          
            
            <li className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >
              <Link
              to="/prices"
              >Prices</Link>
            </li>          
            
            <li className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >
              <Link
              to="/menu"
              >Menu</Link>
            </li>          
            
            <li className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >
              <Link
              to="/about"
              >About us</Link>
            </li>          

          
          </ul>
        </div>
        <div className="navbar-end">
          <h2 className="text-textcolor font-bold text-sm sm:text-lg md:text-xl lg:text-3xl">0141 611 3159</h2>
        </div>
      </div>
    );
  }
  