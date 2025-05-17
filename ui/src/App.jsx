import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import ButtomToTop from "./Components/HomePage/ButtomToTop";
import CopyBoard from "./Components/HomePage/LockWeb/CopyBoard";
import Home from "./Components/HomePage/Home";
import About from "./Components/HomePage/pages/About/About";
import OurCourses from "./Components/HomePage/pages/Course/OurCourses";
import Branch from "./Components/HomePage/pages/Branch/Branch";
import Gallery from "./Components/HomePage/pages/Gallery";
import AdmissionForm from "./Components/HomePage/pages/AdmissionForm";
import Verification from "./Components/HomePage/pages/Verification/Verification";
import QueryForm from "./Components/HomePage/pages/QueryFrom";
import Offers from "./Components/HomePage/Offers";
import PageNotFound from "./Components/HomePage/pages/PageNotFound";
import CRepairing from "./Components/HomePage/pages/Course/CRepairing";
import Certificate from "./Components/HomePage/pages/Course/Ceritificate";
import ComputerLanguage from "./Components/HomePage/pages/Course/ComputerLanguage";
import Designing from "./Components/HomePage/pages/Course/Designing";
import WebDev from "./Components/HomePage/pages/Course/WebDev";
import Nielet from "./Components/HomePage/pages/Course/Nielet";
import Banking from "./Components/HomePage/pages/Course/Banking";
import Discription from "./Components/HomePage/pages/Course/Discription";
import StudentHomePage from "./Components/StudentComponent/StudentHomePage";
import Greating from "./Components/StudentComponent/Greating";
import Default from "./Components/StudentComponent/Default";
import Exam from "./Components/StudentComponent/Exam";
import Library from "./Components/HomePage/pages/Library/Library";
import AdminPannel from "./Components/Admin/MainAdminPage/AdminPannel";

export default function App() {
    return (
        <div>
            <CopyBoard />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/OurCourses" element={<OurCourses />} />
                <Route path="/Branch" element={<Branch />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/AdmissionForm" element={<AdmissionForm />} />
                <Route path="/Download-Certificate" element={<Verification />} />
                <Route path="/Contact-us" element={<QueryForm />} />
                <Route path="/Offers" element={<Offers />} />
                <Route path="/CRepairing" element={<CRepairing />} />
                <Route path="/Certificate" element={<Certificate />} />
                <Route path="/ComputerLanguage" element={<ComputerLanguage />} />
                <Route path="/Designing" element={<Designing />} />
                <Route path="/WebDev" element={<WebDev />} />
                <Route path="/Nielet" element={<Nielet />} />
                <Route path="/Banking" element={<Banking />} />
                <Route path="/Discription" element={<Discription />} />
                <Route path="/Library" element={<Library />} />
                <Route path="/Student-Portal/*" element={<StudentHomePage />} />
                <Route path="/Greating" element={<Greating />} />
                <Route path="/Exam" element={<Exam />} />
                <Route path="/Default" element={<Default />} />
                <Route path="/Admin-Pannel/*" element={<AdminPannel />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <ButtomToTop />
        </div>
    );
}
