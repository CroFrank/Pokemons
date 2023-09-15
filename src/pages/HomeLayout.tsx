import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export function HomeLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}