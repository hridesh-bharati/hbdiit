import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import ButtomToTop from "./Components/HomePage/ButtomToTop";
import NetworkStatus from "./Components/HomePage/LockWeb/NetworkStatus";
import HelmetManager from "./Components/HomePage/pages/HelmetManager";
import Lock from "./Components/HomePage/LockWeb/Lock";
import UserSelectNone from "./Components/HomePage/LockWeb/UserSelectNone";

// Import all pages in one place for easier mapping
import Home from "./Components/HomePage/Home";
import About from "./Components/HomePage/pages/About/About";
import OurCourses from "./Components/HomePage/pages/Course/OurCourses";
import Branch from "./Components/HomePage/pages/Branch/Branch";
import Gallery from "./Components/HomePage/pages/Gallery";
import AdmissionForm from "./Components/HomePage/pages/AdmissionForm";
import Verification from "./Components/HomePage/pages/Verification/Verification";
import QueryForm from "./Components/HomePage/pages/QueryFrom";
import Offers from "./Components/HomePage/Offers";
import CRepairing from "./Components/HomePage/pages/Course/CRepairing";
import Certificate from "./Components/HomePage/pages/Course/Ceritificate";
import ComputerLanguage from "./Components/HomePage/pages/Course/ComputerLanguage";
import Designing from "./Components/HomePage/pages/Course/Designing";
import WebDev from "./Components/HomePage/pages/Course/WebDev";
import Nielet from "./Components/HomePage/pages/Course/Nielet";
import Banking from "./Components/HomePage/pages/Course/Banking";
import Discription from "./Components/HomePage/pages/Course/Discription";
import Library from "./Components/HomePage/pages/Library/Library";
import StudentHomePage from "./Components/StudentComponent/StudentHomePage";
import Greating from "./Components/StudentComponent/Greating";
import Default from "./Components/StudentComponent/Default";
import Exam from "./Components/StudentComponent/Exam";
import AdminPannel from "./Components/Admin/MainAdminPage/AdminPannel";
import PageNotFound from "./Components/HomePage/pages/PageNotFound";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/About", element: <About /> },
    { path: "/OurCourses", element: <OurCourses /> },
    { path: "/Branch", element: <Branch /> },
    { path: "/Gallery", element: <Gallery /> },
    { path: "/AdmissionForm", element: <AdmissionForm /> },
    { path: "/Download-Certificate", element: <Verification /> },
    { path: "/Contact-us", element: <QueryForm /> },
    { path: "/Offers", element: <Offers /> },
    { path: "/CRepairing", element: <CRepairing /> },
    { path: "/Certificate", element: <Certificate /> },
    { path: "/ComputerLanguage", element: <ComputerLanguage /> },
    { path: "/Designing", element: <Designing /> },
    { path: "/WebDev", element: <WebDev /> },
    { path: "/Nielet", element: <Nielet /> },
    { path: "/Banking", element: <Banking /> },
    { path: "/Discription", element: <Discription /> },
    { path: "/Library", element: <Library /> },
    { path: "/Student-Portal/*", element: <StudentHomePage /> },
    { path: "/Greating", element: <Greating /> },
    { path: "/Exam", element: <Exam /> },
    { path: "/Default", element: <Default /> },
    { path: "/Admin-Pannel/*", element: <AdminPannel /> },
    { path: "*", element: <PageNotFound /> },
];

export default function App() {
    return (
        <div>
            <Lock />
            <UserSelectNone />
            <NetworkStatus />
            <Header />
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<HelmetManager>{element}</HelmetManager>}
                    />
                ))}
            </Routes>
            <ButtomToTop />
        </div>
    );
}