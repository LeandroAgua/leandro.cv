import TopMenu from "./menus/top";
import {Route, Routes} from "react-router-dom";
import Quote from "../pages/projects/quote";
import Weather from "../pages/projects/weather";
import ToDoList from "../pages/projects/to_do_list"
import Home from "../pages/home"
import About from "../pages/about";
import "./layout.css";

function Layout(){
    return (
            <div style={{ backgroundColor: '#0F3325'}}>
                <TopMenu/>
                <div className="container-fluid vh-100">
                    <div className="row h-100">
                        <div className="col-12">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/quote" element={<Quote />} />
                                <Route path="/weather" element={<Weather />} />
                                <Route path="/todo" element={<ToDoList />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Layout;