import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 text-gray-600 body-font shadow-2xl">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">inbody test</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent hover:border-teal-600 focus:border-teal-600 no-underline">
                공지사항
            </Link>
            <Link href="/register" className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent hover:border-teal-600 focus:border-teal-600 no-underline">
                등록
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
