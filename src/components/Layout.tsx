import useAuth from "../Utils/AuthStore";
import useStore from "../Utils/Store";
import Button from "./Button";
import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

const Layout = ({ children }: any) => {
  const { isCollapsed, setIscollapse } = useStore();
  const { currentUser, logIn } = useAuth();


  return (
    <>
      {" "}
      <Navbar />
      <div className="my-[2rem] mx-[3rem] mt-[5rem]">
        {currentUser?
        <div className="flex justify-end ">
          <Button
            text="+ Add"
            color="red-700"
            onClick={()=>setIscollapse(!isCollapsed)}
            className="bg-green-600 text-white hover:text-black hover:border-green-600"
          />
        </div>
    : <p className="text-orange-400 cursor-pointer text-left w-full" onClick={()=>logIn()}>Login to upload more images to the cloud!</p>
        }
        {isCollapsed && <UploadForm />}
      </div>
      {children}
    </>
  );
};

export default Layout;
