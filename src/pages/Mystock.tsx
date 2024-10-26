import { useMemo } from 'react';
import Card from '../components/Card';
import useAuth from '../Utils/AuthStore';
import useStore from '../Utils/Store';

const Mystock = () => {
  const { items} = useStore();
  const { currentUser } = useAuth();


  const state=useMemo(() =>{
    const username= currentUser.displayName.split(' ').join('').toLowerCase()
    const filtered=items.filter((item:any)=>item.user===username)
    return currentUser ? filtered :[]
  } , [items,currentUser])


  return (
    <>
        <p className="text-center text-[30px] ">My Stock Images</p>
        <div className="mt-[2em] flex flex-wrap gap-5 justify-center ">
          {state.map((val: any, index: any) => (
            <Card image={val.path} key={index} title={val.title} createdAt={val.createdAt} username={val.user} id={val.id}/>
          ))}
        </div>
     
    </>
  )
}

export default Mystock