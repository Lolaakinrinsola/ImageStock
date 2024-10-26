import { useMemo } from "react";
import useAuth from "../Utils/AuthStore";
import Firestore from "../Utils/firebase";
import { toast } from 'react-toastify';
import Storage from "../Utils/Storage";
import useStore from "../Utils/Store";
import Button from "./Button";
import Card from "./Card";
import DefaultInput from "./DefaultInput";

const UploadForm = () => {
  const {
    handleInputChange,
    state,
    setIscollapse,
    setItem,
    setLoading,
    loading,
  } = useStore();
  const { currentUser } = useAuth();
  const username =
    currentUser && currentUser.displayName.split(" ").join("").toLowerCase();
  const { writeDoc } = Firestore;
  const { uploadeFile, downloadFile } = Storage;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    handleInputChange(name, value, files);
  };
  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      const media = await uploadeFile(state);
      const downloadURL = await downloadFile(media);

      await writeDoc({ ...state, path: downloadURL, user: username }, "stocks");

      setItem(); // Update items as needed
      setIscollapse(false); // Collapse the UI if necessary
    } catch (error: any) {
      console.error(error); // Log error for debugging
    } finally {
      setLoading(false); // Ensure loading is set to false
      toast.success('Item added successfully!')
    }
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
              loading={loading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadForm;
