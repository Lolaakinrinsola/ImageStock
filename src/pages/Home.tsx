import { useEffect } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import useAuth from "../Utils/AuthStore";
import useStore from "../Utils/Store";

const Home = () => {
  const { items,setItem,setLoading,loading} = useStore();
  const{getUser} =useAuth()

  async function settingItem() {
    setLoading(true); // Start loading
    try {
      await Promise.all([setItem(), getUser()]); // Wait for both to finish
    } catch (error) {
      console.error('Error in setting items or getting user:', error);
    } finally {
      setLoading(false); // End loading
    }
  }
  useEffect(() => {
    // setItem()
    // getUser()
    settingItem()
  }, [])
  return (
    loading?<Spinner/>:

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
