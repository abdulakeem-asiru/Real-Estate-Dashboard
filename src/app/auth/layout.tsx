import Banner from "../parts/authui/Banner";
import Header from "../parts/authui/Header";
import DarkModeBtn from "../parts/authui/DarkModeBtn";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center lg:items-center items-start min-h-screen lg:p-4 p-2 ">
      <div className="flex w-full max-w-[1440px] gap-2 justify-center items-start">
        <div className="lg:w-[50%] w-full min-h-full md:px-8 px-2 py-12 flex flex-col justify-center gap-6 ">
         <Header />
          {children}
          </div>
        <aside className="bg-[var(--banner-bg)] w-[50%] rounded-xl 
         min-h-full px-8 pt-12 pb-25 max-lg:hidden" aria-label="auth banner">
          <Banner />
          
        </aside>
            <div className="fixed bottom-2 lg:bottom-6 p-2 bg-black dark:bg-white rounded-full right-0 lg:right-6 z-50  shadow-lg hover:shadow-xl transition">
  <DarkModeBtn />
</div>
      </div>

    </div>
  );
}