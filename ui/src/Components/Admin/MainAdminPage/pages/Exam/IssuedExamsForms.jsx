import { toast } from "react-toastify";
import { getAllExams, lockExamForm } from "../../../../../api/adminApi/api";
import PushQuestionPaper from "./questionPaper/PushQuestionPaper";
import SendQuestions from "./questionPaper/SendQuestions";
import { useEffect, useState } from "react";

export default function ExamForms() {
  const [exams, setExams] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [action, setAction] = useState(true);
  const [examId, setExamId] = useState("");
  const [qPId, setQpId] = useState("");

  const fetchAllExamHandler = async () => {
    try {
      const rspns = await getAllExams(completed, locked);
      if (rspns.ackbool === 1) setExams(rspns.message);
      else toast.error("Failed to fetch exams");
    } catch {
      toast.error("Error fetching exams");
    }
  };

  const setLockExamFormHandler = async (examIds) => {
    try {
      const rspns = await lockExamForm(examIds, action);
      if (rspns.ackbool === 1) {
        toast.success(rspns.message);
        fetchAllExamHandler();
      } else toast.error("Failed to update exam lock status");
    } catch {
      toast.error("Error locking/unlocking exams");
    }
  };

  useEffect(() => {
    fetchAllExamHandler();
  }, [completed, locked]);

  return (
    <section className="container my-4 p-3 bg-white shadow-sm rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 mb-0">Exam Forms</h2>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={fetchAllExamHandler}
          aria-label="Reload exams"
        >
          <i className="bi bi-arrow-clockwise"></i> Reload
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>Course</th>
              <th>Exam Date</th>
              <th>Duration</th>
              <th>Locked</th>
              <th>Completed</th>
              <th>Students</th>
              <th>Question Paper</th>
            </tr>
          </thead>
          <tbody>
            {exams.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-muted fst-italic">
                  No exams found.
                </td>
              </tr>
            ) : (
              exams.map((e) => (
                <tr key={e._id}>
                  <td className="fw-semibold">{e.courseName}</td>
                  <td>{new Date(e.examDate).toLocaleDateString()}</td>
                  <td>{e.duration}</td>
                  <td>
                    <span className={`badge ${e.locked ? "bg-danger" : "bg-success"}`}>
                      {e.locked ? "Locked" : "Unlocked"}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${e.completed ? "bg-success" : "bg-warning text-dark"}`}>
                      {e.completed ? "Completed" : "Pending"}
                    </span>
                  </td>
                  <td>{e.students.length}</td>
                  <td>
                    {e.paper ? (
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#sendqstModel"
                        onClick={() => setQpId(e.paper)}
                      >
                        Upload Questions
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setExamId(e._id)}
                      >
                        Set Paper
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="modal fade modal-fullscreen" id="sendqstModel" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Upload Questions</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <SendQuestions paperId={qPId} />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Set Question Paper</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <PushQuestionPaper examId={examId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
