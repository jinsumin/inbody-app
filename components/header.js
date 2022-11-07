import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 text-gray-600 body-font shadow-2xl bg-slate-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              // className="object-cover object-center rounded"
              alt="hero"
              src="/logo.png"
              width={100}
              height={100}
            />
            <span className="ml-3 text-xl">InBody TEST</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent hover:border-orange-700 focus:border-orange-700 no-underline"
            >
              공지사항
            </Link>
            <Link
              href="/register"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent hover:border-orange-700 focus:border-orange-700 no-underline"
            >
              등록
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
