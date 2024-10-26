import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import useAuth from "../Utils/AuthStore";
import useStore from "../Utils/Store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setsearch] = useState('')
  
  const { currentUser, logIn, logOut } = useAuth();
  const { filterItems,setItem} = useStore();
  const navigate=useNavigate()
  const location=useLocation()
  const dropdownRef = useRef<any>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
function handleOnchange(e:any) {
    setsearch(e.target.value)
    filterItems(e.target.value)
}

function handleSubmit(e:any) {
    e.preventDefault()
   filterItems(e.target.value)
}
  function userLogin() {
    if (currentUser === null) logIn();
    else logOut();
  }

  const navItems=currentUser?[{name:'Home',link:'/'},{name:'My Stocks',link:'/my-stocks'}]:[{name:'Home',link:'/'}]

  const handleNavigation = (link:any) => {
    navigate(link);
  };

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  

  return (
    <div className="p-4 px-[3rem] bg-slate-300 flex justify-between items-center fixed w-full top-0" ref={dropdownRef}>
      <div className="flex items-center justify-center gap-5 text-[15px]">
        <p className="font-bold text-[20px] cursor-pointer">Navbar</p>
        {navItems.map((val,key)=>(
        <p className={`cursor-pointer hover:text-blue-400 hidden md:block ${location.pathname===val.link&&'text-blue-700'}`}onClick={()=>handleNavigation(val.link)} key={key}>
          {val.name}
        </p>

        ))}

        <form className="hidden md:flex " onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="border-[1px] border-gray-500 p-2 placeholder:text-gray-500 rounded-md w-3/4"
            onChange={handleOnchange}
          />
          <button className="border-[1px] border-green-500 text-green-500 hover:bg-white rounded-md p-2 ml-2" type='submit'>
            Search
          </button>
        </form>
      </div>

      {/* Mobile menu button (hamburger) */}
      <div className="md:hidden cursor-pointer" onClick={toggleDropdown}>
        <div
          className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? "translate-y-1.5 rotate-45" : "mb-1"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "mb-1"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? "-translate-y-1.5 -rotate-45" : ""
          }`}
        ></div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="fixed top-[3rem] left-0 w-full min-h-[30vh] bg-slate-300 flex flex-col items-center justify-center z-50 md:hidden px-10 " >
          <div className="grid w-full my-5 gap-2">
          {navItems.map((val,key)=>(
            <p
              className={`cursor-pointer hover:bg-blue-400 hover:text-white border-[1px] text-center p-2 w-full rounded-lg ${location.pathname == val.link&&'bg-blue-700 text-white'}`}
              onClick={()=>handleNavigation(val.link)}
            key={key}>
              {val.name}
            </p>

          ))}
            

            <div
              className={`cursor-pointer hover:bg-blue-400 hover:text-white border-[1px] text-center p-2 w-full rounded-lg`}
              onClick={() => userLogin()}
            >
              {currentUser === null ? (
                "Login"
              ) : (
                <div className="grid ">
                  <div className="justify-center grid">
                    <img
                      src={currentUser && currentUser.photoURL}
                      alt={currentUser.displayName}
                      className="w-8 h-8 rounded-full m-auto"
                    />
                    <p className="text-gray-800 ">
                      {currentUser && currentUser.displayName}
                    </p>
                    <p className="text-red-400 text-[9px]">Logout</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <form className="flex items-center w-full justify-center mb-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="border-[1px] border-gray-500 p-2 placeholder:text-gray-500 rounded-md w-3/4"
              onChange={handleOnchange}
            />
            <button className="border-[1px] border-green-500 text-green-500 hover:bg-white rounded-md p-2 ml-2">
              Search
            </button>
          </form>
        </div>
      )}

      <p
        className={`cursor-pointer hover:text-blue-400 hidden md:block`}
        onClick={() => userLogin()}
      >
        {currentUser === null ? (
          "Login"
        ) : (
          <div className="flex gap-2 items-end">
            <img
              src={currentUser && currentUser.photoURL}
              alt={currentUser.displayName}
              className="w-8 h-8 rounded-full "
            />
            <div className="justify-center grid">
              <p className="text-gray-800 ">
                {currentUser && currentUser.displayName}
              </p>
              <p className="text-red-400 text-[9px]">Logout</p>
            </div>
          </div>
        )}
      </p>
    </div>
  );
};

export default Navbar;
