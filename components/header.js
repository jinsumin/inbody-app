import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  return (
    <>
      <header className="sticky top-0 z-50 text-gray-600 body-font shadow-2xl">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="#main-section"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">inbody test</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#main-section" className="mr-5 hover:text-gray-900">
              공지사항
            </a>
            <a href="#about-section" className="mr-5 hover:text-gray-900">
              등록
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
