import { useEffect } from "react";
import Card from "../components/Card";
import useAuth from "../Utils/AuthStore";
import useStore from "../Utils/Store";

const Home = () => {
  const { items,setItem} = useStore();
  const{getUser} =useAuth()

  useEffect(() => {
    setItem()
    getUser()
  }, [])
  return (
    <>
      
        <p className="text-center text-[30px] ">Gallery</p>
        <div className="mt-[2em] flex flex-wrap gap-5 justify-center ">
          {items.map((val: any, index: any) => (
            <Card image={val.path} key={index} title={val.title} createdAt={val.createdAt} username={val.user} id={val.id}/>
          ))}
        </div>
     
    </>
  );
};

export default Home;
