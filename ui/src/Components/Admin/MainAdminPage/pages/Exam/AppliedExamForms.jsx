import React, { useEffect, useState } from 'react';
import { examFormList, getCourseList, verifyExamForm } from '../../../../../api/adminApi/api';
import { toast } from 'react-toastify';

export default function AppliedExamForms() {
  const [formList, setFormList] = useState([]);
  const [examId, setExamId] = useState("");
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [completed, setCompleted] = useState(null);
  const [all, setAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // <-- New state

  // Load courses once on mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const rspns = await getCourseList();
        setCourses(rspns.message.map(c => c.name));
      } catch (e) {
        toast.error("Failed to load courses");
      }
    };
    fetchCourses();
  }, []);

  const fetchExamFormHandler = async () => {
    try {
      const comp = all ? null : completed;
      const crs = all ? "" : course;
      const rspns = await examFormList(comp, crs);
      setExamId(rspns.examId || "");
      setFormList(rspns.message || []);
    } catch (e) {
      toast.error("Failed to fetch exam forms");
    }
  };

  const verifyExamFormHandler = async (exmId, frmId) => {
    try {
      const rspns = await verifyExamForm(exmId, frmId);
      toast.success(rspns.message);
      fetchExamFormHandler();
    } catch (error) {
      toast.error("Verification failed");
    }
  };

  // Fetch exam forms on mount
  useEffect(() => {
    fetchExamFormHandler();
  }, []);

  // Filter forms by search term (case-insensitive)
  const filteredForms = formList.filter(({ name, regNum }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    regNum.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container my-4">
      <h4 className="text-center mb-3 text-primary fw-bold">STUDENT'S FINAL EXAMINATION QUERIES</h4>

      <div className="row mb-3 g-2 justify-content-center">
        <div className="col-12 col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name or Reg No."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-2">
          <select className="form-select" value={all} onChange={e => setAll(e.target.value === 'true')}>
            <option value={false}>Not Selected</option>
            <option value={true}>All</option>
          </select>
        </div>
        <div className="col-12 col-md-2">
          <select
            className="form-select"
            value={completed === null ? '' : completed}
            onChange={e => setCompleted(e.target.value === '' ? null : e.target.value === 'true')}
            disabled={all}
          >
            <option value="">Exam Status</option>
            <option value={true}>Completed</option>
            <option value={false}>Uncompleted</option>
          </select>
        </div>
        <div className="col-12 col-md-2">
          <select
            className="form-select"
            value={course}
            onChange={e => setCourse(e.target.value)}
            disabled={all}
          >
            <option value="">Select Course</option>
            {courses.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-2 d-grid">
          <button className="btn btn-primary" onClick={fetchExamFormHandler}>
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-sm align-middle text-center small">
          <thead className="table-dark">
            <tr>
              <th>Photo</th>
              <th>Reg No.</th>
              <th>Name</th>
              <th>Status</th>
              <th>Applied At</th>
              <th>Tested</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-muted fst-italic">No exam forms found.</td>
              </tr>
            ) : (
              filteredForms.map(student => (
                <tr key={student.id}>
                  <td><img src={student.photo} alt="Student" width={40} height={40} /></td>
                  <td>{student.regNum}</td>
                  <td>{student.name}</td>
                  <td>{student.verified ? "Verified" : "Pending"}</td>
                  <td>{new Date(student.applyDate).toLocaleDateString()}</td>
                  <td>{student.tested ? "Tested" : "Not Tested"}</td>
                  <td>
                    {!student.verified && (
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => verifyExamFormHandler(examId, student.id)}
                      >
                        Verify Now
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
