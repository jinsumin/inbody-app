import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Register = () => {
  const router = useRouter();

  const refreshServerSide = () => {
    router.replace(router.asPath);
  };

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [date, setDate] = useState("2022-11-02");

  const submitForm = async (e) => {
    const currentTime = new Date().toJSON();
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();
    console.log(
      `${year}-${month >= 10 ? month : "0" + month}-${
        day >= 10 ? day : "0" + day
      }`
    );
    setDate(
      `${year}-${month >= 10 ? month : "0" + month}-${
        day >= 10 ? day : "0" + day
      }`
    );
    e.preventDefault();
    const res = await fetch("https://inbody-board.vercel.app/api/submit-form", {
      method: "POST",
      body: JSON.stringify({ date, title, contents }),
    });

    if (res.status === 201) {
      refreshServerSide();
      setTitle("");
      setContents("");
      setDate("");
      toast("공지사항이 성공적으로 등록되었습니다!", { type: "success" });
      router.push("/");
    } else {
      toast("등록 실패 : 입력창을 확인하세요!", { type: "error" });
    }
  };

  return (
    <Layout>
      <Head>
        <title>InBody Board</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/inbody-favicon.ico" />
      </Head>
      <div id="submit-section">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-10">
                공지사항 작성
              </h1>
              <ToastContainer />
              <form onSubmit={submitForm}>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="title"
                          className="leading-7 text-sm text-gray-600"
                        >
                          title
                        </label>
                        <input
                          type="text"
                          id="title"
                          title="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="contents"
                          className="leading-7 text-sm text-gray-600"
                        >
                          contents
                        </label>
                        <textarea
                          id="contents"
                          name="contents"
                          value={contents}
                          onChange={(e) => setContents(e.target.value)}
                          required
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-48 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full grid place-items-end h-6">
                      <button
                        type="submit"
                        className="flex mx-auto text-white bg-orange-700 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded text-lg"
                      >
                        등 록
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Register;
