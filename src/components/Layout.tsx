import useAuth from "../Utils/AuthStore";
import useStore from "../Utils/Store";
import Button from "./Button";
import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

const Layout = ({ children }: any) => {
  const { isCollapsed, setIscollapse } = useStore();
  const { currentUser } = useAuth();

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
            className="bg-green-600 text-white"
          />
        </div>
    : <p className="text-orange-400 text-left w-full">Login to upload more images!</p>
        }
        {isCollapsed && <UploadForm />}
      </div>
      {children}
    </>
  );
};

export default Layout;
