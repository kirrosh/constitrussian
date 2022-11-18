import "./globals.css";
import Providers from "../utils/providers";
import Sidebar from "./sidebar";
import Nav from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen w-screen">
        <Providers>
          <Nav />
          <main className="mx-auto px-6 max-w-7xl">
            <div className="pt-1 w-full flex items-start justify-start flex-nowrap">
              <div className="w-[32%] ml-0 md:block hidden">
                <div className="top-[92px] fixed pb-[112px] h-[calc(100vh-4rem)] overflow-auto no-scrollbar">
                  <Sidebar />
                </div>
              </div>
              <div className="w-full max-w-full mt-[76px] ">{children}</div>
              <div className="w-[28%] h-full ml-0 bg-slate-800 xl:block hidden"></div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
