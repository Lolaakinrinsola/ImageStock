import { useMemo } from "react";
import useAuth from "../Utils/AuthStore";
import Firestore from "../Utils/firebase";
import Storage from "../Utils/Storage";
import useStore from "../Utils/Store";
import Button from "./Button";
import Card from "./Card";
import DefaultInput from "./DefaultInput";

const UploadForm = () => {
    const {handleInputChange,state,setIscollapse,setItem}=useStore()
  const { currentUser } = useAuth();
console.log(currentUser,'the user')
const username= currentUser&& currentUser.displayName.split(' ').join('').toLowerCase()
    const {writeDoc} =Firestore
    const {uploadeFile,downloadFile} =Storage
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        handleInputChange(name, value, files)
      };
    
      function handleSubmit(e: any) {
        e.preventDefault();
        uploadeFile(state).then(downloadFile).then(media =>{
            // debugger
            writeDoc({...state,path:media,user:username},'stocks').then(()=>{
              setItem()
                setIscollapse(false);
            })

        })
      }
  const isDisabled = useMemo(() => {
    return !!Object.values(state).some((input) => !input);
  }, [state]);
  return (
    <>
      <p className=" text-[30px] text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 flex flex-wrap items-center justify-center gap-5">
        {state.path && <Card image={state.path} username={username} />}
        <form className="mb-2 text-left" onSubmit={handleSubmit}>
          <div className="mb-3">
            <DefaultInput
              type="text"
              name="title"
              placeholder="Title"
              className="w-full"
              onchange={handleChange}
            />
          </div>
          <div className="mb-3">
            <DefaultInput
              type="file"
              name="file"
              placeholder="file"
              onchange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <Button
              text="Save and Upload"
              className="bg-green-600 text-white hover:!bg-gray-400"
              type="submit"
              disabled={isDisabled}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadForm;
