import React, { useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './AdminPannel.css';

import Analysis from './pages/Analysis';
import AdmissionStatus from './pages/students/AdmissionStatus';
import StudentDataBs from '../../Admission/StudentDataBs';
import Profile from './pages/Admin/Profile';
import AddAdmin from './pages/Admin/AddAdmin';
import AdminList from './pages/Admin/AdminList';
import AdmissionForm from '../../HomePage/pages/AdmissionForm';
import CreateNewCourse from './pages/Course/CreateNewCourse';
import CourseList from './pages/Course/CourseList';
import NoticeForm from './pages/Notice/NoticeForm';
import AllNotice from './pages/Notice/AllNotice';
import AppliedExamForms from './pages/Exam/AppliedExamForms';
import IssuedExamsForms from './pages/Exam/IssuedExamsForms';
import IssueExamForm from './pages/Exam/IssueExamForm';
import ProgramPictures from './pages/Gallery/ProgramPictures';
import SendProgramPicture from './pages/Gallery/SendProgramPicture';
import StudentQuery from '../Charts/StdQuery';
import QueryNotify from '../Charts/QueryNotify';
import AdmNotify from './pages/students/AdmNotify';
import AdminPic from './pages/Admin/AdminPic';
import PageNotFound from '../../HomePage/pages/PageNotFound';

const routes = [
  { path: '', element: <Analysis /> },
  { path: 'Admission-Form', element: <AdmissionForm /> },
  { path: 'Admission-Status', element: <AdmissionStatus /> },
  { path: 'Student-Data-Bs', element: <StudentDataBs /> },
  { path: 'Profile', element: <Profile /> },
  { path: 'Add-Admin', element: <AddAdmin /> },
  { path: 'Admin-List', element: <AdminList /> },
  { path: 'Create-Course', element: <CreateNewCourse /> },
  { path: 'Course-List', element: <CourseList /> },
  { path: 'Notice-Form', element: <NoticeForm /> },
  { path: 'All-Notice', element: <AllNotice /> },
  { path: 'Applied-Exam-Forms', element: <AppliedExamForms /> },
  { path: 'Issued-Exam-Forms', element: <IssuedExamsForms /> },
  { path: 'Issue-Exam-Form', element: <IssueExamForm /> },
  { path: 'Program-Pictures', element: <ProgramPictures /> },
  { path: 'Upload-New-Picture', element: <SendProgramPicture /> },
  { path: 'StudentQuery', element: <StudentQuery /> },
];

const menuGroups = [
  {
    title: 'Students',
    links: [
      { to: 'Admission-Form', icon: 'file-earmark-person', label: 'New Admission' },
      { to: 'Admission-Status', icon: 'search', label: 'Admission Status' },
      { to: 'Student-Data-Bs', icon: 'people', label: 'All Students' },
    ],
  },
  {
    title: 'Admins',
    links: [
      { to: 'Add-Admin', icon: 'person-plus', label: 'Add Admin' },
      { to: 'Admin-List', icon: 'people-fill', label: 'Admin List' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { to: 'Create-Course', icon: 'file-earmark-plus', label: 'Create Course' },
      { to: 'Course-List', icon: 'card-list', label: 'Course List' },
    ],
  },
  {
    title: 'Notices',
    links: [
      { to: 'Notice-Form', icon: 'file-text', label: 'Add Notice' },
      { to: 'All-Notice', icon: 'bell', label: 'All Notices' },
    ],
  },
  {
    title: 'Exams',
    links: [
      { to: 'Applied-Exam-Forms', icon: 'file-earmark-check', label: 'Applied Forms' },
      { to: 'Issued-Exam-Forms', icon: 'check2-square', label: 'Issued Forms' },
      { to: 'Issue-Exam-Form', icon: 'check2-circle', label: 'Issue Form' },
    ],
  },
  {
    title: 'Gallery',
    links: [
      { to: 'Program-Pictures', icon: 'image', label: 'Gallery' },
      { to: 'Upload-New-Picture', icon: 'cloud-upload', label: 'Upload Photo' },
    ],
  },
];

const MenuLink = ({ to, label, icon }) => {
  const navigate = useNavigate();
  const closeOffcanvas = () => {
    const el = document.getElementById('moreMenu');
    if (el) bootstrap.Offcanvas.getInstance(el)?.hide();
  };
  return (
    <button
      className="btn text-start w-100 d-flex align-items-center px-0 mb-2"
      onClick={() => {
        navigate(`/Admin-Pannel/${to}`);
        closeOffcanvas();
      }}
    >
      <i className={`bi bi-${icon} me-3 fs-5 text-secondary`}></i>
      <span className="fw-normal">{label}</span>
    </button>
  );
};

const AdminPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderedRoutes = useMemo(
    () => routes.map(({ path, element }) => <Route key={path} path={path} element={element} />),
    []
  );

  return (
    <div className="admin-panel bg-light min-vh-100 pb-5 ChartAdmin1">
      <main className="container-fluid mx-0 px-0 pt-3">
        <Routes>
          {renderedRoutes}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <nav className="navbar fixed-bottom justify-content-center px-3 py-2 glass-taskbar" style={{ zIndex: 1030 }}>
        <div className="d-flex rounded-4 px-3 py-2 gap-3 glass-card shadow-lg">
          <NavButton icon="house-door" label="Home" path="/Admin-Pannel" active={location.pathname === '/Admin-Pannel'} onClick={() => navigate('/Admin-Pannel')} />
          <div className="position-relative">
            <NavButton icon="chat-dots" label="Messages" path="/Admin-Pannel/StudentQuery" active={location.pathname === '/Admin-Pannel/StudentQuery'} onClick={() => navigate('/Admin-Pannel/StudentQuery')} />
            <QueryNotify />
          </div>
          <NavButton icon="camera" label="Notice" path="/Admin-Pannel/Upload-New-Picture" active={location.pathname === '/Admin-Pannel/Upload-New-Picture'} onClick={() => navigate('/Admin-Pannel/Upload-New-Picture')} />
          <div className="position-relative">
            <NavButton icon="people" label="Admission" path="/Admin-Pannel/Admission-Status" active={location.pathname === '/Admin-Pannel/Admission-Status'} onClick={() => navigate('/Admin-Pannel/Admission-Status')} />
            <AdmNotify />
          </div>
          <div className="position-relative">
            <button className={`btn btn-sm d-flex flex-column align-items-center px-2 ${location.pathname === '/Admin-Pannel/Profile' ? 'text-primary fw-bold' : 'text-dark'}`} onClick={() => navigate('/Admin-Pannel/Profile')} title="Profile">
              <AdminPic />
              <small className="d-none d-sm-block" style={{ fontSize: '0.7rem' }}>Profile</small>
            </button>
          </div>
          <button className="btn btn-sm d-flex flex-column align-items-center px-2 text-dark" data-bs-toggle="offcanvas" data-bs-target="#moreMenu" title="More">
            <i className="bi bi-list fs-5"></i>
            <small className="d-none d-sm-block" style={{ fontSize: '0.7rem' }}>More</small>
          </button>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end custom-offcanvas rounded-4 overflow-hidden border-light responsive-offcanvas" tabIndex="-1" id="moreMenu">
        <div className="offcanvas-header justify-content-between border-bottom py-2 px-3">
          <button type="button" className="btn p-1" data-bs-dismiss="offcanvas">
            <i className="bi bi-arrow-left fs-5"></i>
          </button>
          <h5 className="offcanvas-title fw-semibold mb-0">More Menu</h5>
        </div>
        <div className="offcanvas-body pt-2 px-3">
          {menuGroups.map(({ title, links }) => (
            <div key={title} className="mb-0 glass-section p-3">
              <p className="text-dark fw-semibold small mb-1 border-bottom pb-1">{title}</p>
              {links.map(link => (
                <MenuLink key={link.to} {...link} />
              ))}
            </div>
          ))}
          <div className="glass-section p-0">
            <button className="btn text-danger text-start w-100 d-flex align-items-center" onClick={() => {
              localStorage.removeItem('aToken');
              setTimeout(() => navigate('/'), 100);
            }}>
              <i className="bi bi-box-arrow-right me-2 fs-5"></i>
              <span className="fw-semibold">Logout</span>
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
  /* Offcanvas Base */
  .responsive-offcanvas {
    width: 75% !important;
  }

  .custom-offcanvas {
    background: #f1f5f9;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.08);
    height: 100vh;
    z-index: 999999;
    margin-right: 10px;
    outline: none;
    transition: transform 0.3s ease-in-out;
  }

  .custom-offcanvas .offcanvas-header {
    background-color: rgb(229, 240, 251);
  }

  .offcanvas-backdrop {
    background: transparent !important;
  }

  .menu-section button:hover {
    background-color: #e9eff5;
  }

  /* Media Queries */
  @media (min-width: 768px) {
    .responsive-offcanvas {
      width: 30% !important;
    }
  }

  @media (max-width: 768px) {
    .custom-offcanvas {
      height: 83vh;
    }
  }
  `}
      </style>
    </div>
  );
};

const NavButton = ({ icon, label, path, active, onClick }) => (
  <button className={`btn btn-sm d-flex flex-column align-items-center px-2 ${active ? 'text-primary fw-bold' : 'text-dark'}`} onClick={onClick} title={label}>
    <i className={`bi bi-${icon} fs-5`}></i>
    <small className="d-none d-sm-block" style={{ fontSize: '0.7rem' }}>{label}</small>
  </button>
);

export default AdminPanel;
