import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar.jsx";

const GuestLayout = () =>{
    return (<div className="bg-slate-800 min-h-screen">
    <TheNavbar />
    <main className="p-10">
        <Outlet/>

    </main>
  </div>);
};

export default GuestLayout;