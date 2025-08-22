import MenuMain from "./menu";
import {Route, Routes} from "react-router-dom";
import Quote from "../pages/projects/quote";
import Weather from "../pages/projects/weather";
import ToDoList from "../pages/projects/to_do_list"
import Home from "../pages/Home"
import About from "../pages/abouts/about";
import Contact from "../pages/abouts/contact";
import "./layout.css";

function Layout(){
    return (
        <>
            <div className="animated-background">
                <div className="container-fluid d-flex">
                    <MenuMain/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quote" element={<Quote />} />
                        <Route path="/weather" element={<Weather />} />
                        <Route path="/todo" element={<ToDoList />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Layout;