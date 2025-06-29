import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  getStudentList,
  deleteStudentRegistrationForm,
  takeNewAdmission,
  generateCertificate,
} from '../../../../../api/adminApi/api';
import ScrollDownArrow from '../../../../HelperCmp/Scroller/ScrollDown';
import AdmNotify from './AdmNotify';

export default function AdmissionStatus() {
  const [modal, setModal] = useState({ show: false, type: '', studentId: '' });
  const [form, setForm] = useState({ name: '', regNum: '', percentage: '', date: new Date() });
  const [students, setStudents] = useState([]);
  const [isUnique, setIsUnique] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const rspns = await getStudentList({ name: form.name });
      if (rspns?.message && Array.isArray(rspns.message)) setStudents(rspns.message);
      else toast.error("Unexpected response format.");
    } catch (error) {
      toast.error("Failed to fetch students: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  const closeModal = () => {
    setModal({ show: false, type: '', studentId: '' });
    setForm({ ...form, regNum: '', percentage: '', date: new Date() });
    setIsUnique(true);
  };

  const checkUnique = (reg) => {
    const norm = reg?.split('/').pop().trim();
    return !students.some(s => s.regNum?.split('/').pop().trim() === norm);
  };

  const handleAction = async () => {
    const { studentId, type } = modal;
    try {
      let rspns;
      if (type === 'delete') rspns = await deleteStudentRegistrationForm(studentId);
      else if (type === 'admission') {
        if (!isUnique) return toast.error("Reg. number must be unique");
        rspns = await takeNewAdmission(studentId, form.regNum);
      } else if (type === 'certificate') {
        rspns = await generateCertificate(studentId, form.percentage, form.date);
      }

      if (rspns?.ackbool) {
        toast.success(rspns.message);
        closeModal();
        fetchStudents();
      }
    } catch (error) {
      toast.error("Action failed: " + error.message);
    }
  };

  const leftIcons = (
    <div className="text-white fw-bold d-flex align-items-center gap-3">
      <div className="position-relative">
        <i className="bi bi-people-fill me-1"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>{students.length}</span>
      </div>
      <div className="position-relative">
        <i className="bi bi-person-fill-exclamation"></i>
        <AdmNotify />
      </div>
    </div>
  );

  const searchFields = (
    <>
      <input className="form-control rounded-pill" placeholder="Search by Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="form-control rounded-pill" placeholder="Reg. No" value={form.regNum} onChange={(e) => setForm({ ...form, regNum: e.target.value })} />
      <button className="btn btn-primary rounded-pill" onClick={fetchStudents}><i className="bi bi-search"></i></button>
    </>
  );

  const rightButtons = (
    <div className="d-flex gap-2 align-items-center">
      <Link to="/AdmissionForm" className="btn btn-light btn-sm rounded-circle shadow-sm" title="Add Student">
        <i className="fa fa-plus text-primary"></i>
      </Link>
      <button className="btn btn-light btn-sm rounded-circle shadow-sm" onClick={fetchStudents} title="Refresh">
        <i className="bi bi-arrow-clockwise text-danger"></i>
      </button>
    </div>
  );

  const renderModalContent = () => {
    if (modal.type === 'delete') {
      return <Button variant="danger" onClick={handleAction}>Delete</Button>;
    }
    if (modal.type === 'admission') {
      return (
        <>
          <input
            className="form-control"
            placeholder="Unique Reg. No"
            onChange={(e) => {
              const val = e.target.value;
              setForm({ ...form, regNum: val });
              setIsUnique(checkUnique(val));
            }}
          />
          {!isUnique && <span className="text-danger">Reg. number must be unique</span>}
          <Button variant="primary" onClick={handleAction} disabled={!form.regNum || !isUnique}>
            <i className="bi bi-check2-circle"></i> Done
          </Button>
        </>
      );
    }
    if (modal.type === 'certificate') {
      return (
        <>
          <input className="form-control" type="number" placeholder="Enter percentage" onChange={(e) => setForm({ ...form, percentage: e.target.value })} />
          <input className="form-control" type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <Button variant="secondary" onClick={closeModal}><i className="bi bi-x"></i></Button>
          <Button variant="primary" onClick={handleAction}><i className="fa fa-paper-plane"></i></Button>
        </>
      );
    }
  };

  return (
    <div className="StudentList min-vh-100 mt-3 bg-light">
      {/* Headers */}
      <div className="sticky-top" style={{ zIndex: 2 }}>
        <div className="d-none d-sm-flex header-gradient p-3 justify-content-between align-items-center shadow-sm">
          <div className="d-flex align-items-center gap-4 fs-4 text-white">
            {leftIcons}
            <div className="d-flex gap-2">{searchFields}</div>
          </div>
          {rightButtons}
        </div>
        <div className="d-flex d-sm-none header-gradient p-3 justify-content-between align-items-center shadow-sm">
          <div className="fs-4">{leftIcons}</div>
          {rightButtons}
        </div>
        <div className="d-flex d-sm-none bg-white px-3 py-2 border-bottom shadow-sm flex-column gap-2">
          {searchFields}
        </div>
      </div>

      {/* Students */}
      <div className="container py-4">
        {loading && <div className="text-center text-muted py-3">Loading students...</div>}
        <div className="row g-4">
          {!loading && students.length === 0 && (
            <div className="col-12 text-center text-muted py-5">No students found.</div>
          )}
          {students
            .filter((s) => {
              const searchName = form.name.toLowerCase();
              const searchReg = form.regNum.toLowerCase();
              return (!searchName || s.name.toLowerCase().includes(searchName)) &&
                (!searchReg || s.regNum?.toLowerCase().includes(searchReg));
            })
            .map((s) => (
              <div key={s._id} className="col-12 col-sm-6 col-lg-4">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-header d-flex gap-2 align-items-center bg-gradient-cc">
                    <div className="rounded-circle border border-3 overflow-hidden" style={{ width: 54, height: 54 }}>
                      <img src={s.photo} alt={s.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold text-dark">{s.name}</h6>
                      <span className={`badge rounded-pill ${s.regNum ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {s.regNum ? s.regNum.split('/').slice(1).join('/') : 'Pending'}
                      </span>
                    </div>
                  </div>
                  <div className="card-body py-2 px-3">
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      <span className="badge bg-gradient-cc2 text-white flex-grow-1 d-flex justify-content-between px-3 py-2">
                        <span><i className="bi bi-phone me-1"></i>{s.mobileNumber}</span>
                        <span><i className="bi bi-calendar3 me-1"></i>{new Date(s.dob).toLocaleDateString()}</span>
                      </span>
                      <span className="small bg-light text-dark px-3 py-2">
                        <i className="bi bi-geo-alt me-1"></i>{s.address}
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      {!s.regNum && (
                        <div className="d-flex gap-2">
                          <button className="btn btn-sm btn-outline-primary w-50" onClick={() => setModal({ show: true, type: 'admission', studentId: s._id })}>
                            <i className="bi bi-pencil"></i> Take Admission
                          </button>
                          <button className="btn btn-sm btn-outline-danger w-50" onClick={() => setModal({ show: true, type: 'delete', studentId: s._id })}>
                            <i className="bi bi-trash-fill"></i> Delete
                          </button>
                        </div>
                      )}
                      {s.regNum && !s.gnCertificate && (
                        <button className="btn btn-sm btn-outline-success" onClick={() => setModal({ show: true, type: 'certificate', studentId: s._id })}>
                          <i className="bi bi-person-check-fill"></i> Generate
                        </button>
                      )}
                      {s.regNum && s.gnCertificate && (
                        <span className="badge bg-success-subtle text-dark px-2 py-1 rounded-pill border text-center">
                          <i className="bi bi-patch-check-fill text-success me-1"></i> Certificate Already Generated
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={modal.show} onHide={closeModal} centered animation className="mt-4">
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title className="text-white">
            {modal.type === 'delete' ? 'Delete Student' :
              modal.type === 'admission' ? 'Take Admission' :
                'Generate Certificate'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>{renderModalContent()}</Modal.Footer>
      </Modal>

      {/* Custom Style */}
      <style>{`
        .header-gradient { background: linear-gradient(90deg, #375a7f, #3498db 60%, #38ada9); }
        .bg-gradient-cc { background: linear-gradient(90deg, rgb(227, 227, 227), #c9f7f5) !important; }
        .bg-gradient-cc2 { background: linear-gradient(90deg, #38ada9, #54a0ff) !important; }
        .card { border-radius: 1rem !important; }
        .card-header { border-radius: 1rem 1rem 0 0 !important; border-bottom: none !important; }
        .badge { font-size: 0.88em; }
      `}</style>
      <ScrollDownArrow />
    </div>
  );
}
