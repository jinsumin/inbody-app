import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const BoardItems = ({ data }) => {
  const router = useRouter();

  const refreshServerSide = () => {
    router.replace(router.asPath);
  };

  const title = data.properties.Title.title[0].plain_text;
  const contents = data.properties.Contents.rich_text[0].plain_text;
  const start = data.properties.Date.date.start;

  const [visible, setVisible] = useState(false);
  const [state, setState] = useState("1");

  const deleteItem = async (e) => {
    e.preventDefault();
    setState("9999");
    const res = await fetch("https://inbody-board.vercel.app/api/update-state", {
      method: "POST",
      body: JSON.stringify({ state }),
    });

    if (res.status === 201) {
      refreshServerSide();
      toast("공지사항이 성공적으로 삭제되었습니다!", { type: "success" });
      router.push("/");
    } else {
      toast("삭제 실패!", { type: "error" });
    }
  };

  return (
    <div className="w-full justify-items-center items-center object-center">
      <ToastContainer />
      <div className="w-full h-10 bg-white flex flex-row justify-items-center place-items-center border-2 border-rose-400 rounded-full shadow-lg">
        <div className="w-full text-center">{title}</div>
        <div className="w-1/3 text-center">{start}</div>
        <div className="mr-3 ml-3">
          <Image
            // className="object-cover object-center rounded"
            alt="trash-icon"
            src="/trash-icon.png"
            width={30}
            height={30}
            onClick={() => deleteItem()}
          />
        </div>
        <div className="mr-3">
          <Image
            // className="object-cover object-center rounded"
            alt="arrow-down"
            src="/arrow-down.png"
            width={30}
            height={30}
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <div className="text-center justify-items-center items-center bg-slate-100 rounded-b-2xl mx-1">
        {visible && <div className="h-60 p-20 mt-2">{contents}</div>}
      </div>
    </div>
  );
};

export default BoardItems;
