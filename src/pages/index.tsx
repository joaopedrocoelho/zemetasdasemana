import AdminBtns from "./component/AdminBtns";
import Goal from "./component/Goal";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import ProgressBar from "./component/ProgressBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-full flex flex-col px-[5%] items-center pt-[5%] pb-20">
        <Header />
        <ProgressBar />
        <Goal />
        <AdminBtns />
      </main>
    </>
  );
}
