import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, createdAt ,username,id}: any) => {
  const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/images/${id}`, { state : { id } })
    }
  const timestamp = useMemo(() => {
    if (createdAt) {
      const date = `${new Date(createdAt.seconds * 1000)}`.split(" ");
      return `${date[1]} ${date[2]} ${date[3]}`;
    }
    return;
  }, [createdAt]);
  return (
    <div className="border-[1px] grid gap-3 border-gray-600 rounded-lg text-center shadow-lg" onClick={handleOnClick}>
      <div className="w-[300px] h-[300px]">
        <img src={image} alt={title} className="w-full h-full rounded-t-lg" />
      </div>
      <h5 className="text-center ">{title}</h5>

      <div className="flex justify-between m-2">
        <p>{timestamp}</p>
        <p>@{username||'username'}</p>
      </div>
    </div>
  );
};

export default Card;
