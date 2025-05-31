import { useEffect, useState } from "react";
import {
  getStudentList,
  getAllQuery,
  getAllNotice,
  getCourseList
} from "../../../../api/adminApi/api";
import StudentChart from "../../Charts/Chart";
const Analysis = () => {
  const [data, setData] = useState({
    students: [],
    queries: [],
    offers: [],
    courses: [],
  });
  const fetchAndSet = async (apiFn, key) => {
    try {
      const response = await apiFn();
      if (response.ackbool === 1) {
        setData(prev => ({
          ...prev,
          [key]: Array.isArray(response.message) ? response.message : []
        }));
      }
    } catch (error) {
      console.error(`Failed to fetch ${key}`, error);
    }
  };
  useEffect(() => {
    const fetchAll = async () => {
      await Promise.all([
        fetchAndSet(getStudentList, 'students'),
        fetchAndSet(getAllQuery, 'queries'),
        fetchAndSet(getAllNotice, 'offers'),
        fetchAndSet(getCourseList, 'courses')
      ]);
    };
    fetchAll();
  }, []);
  const stats = [
    { label: "Total Students", value: data.students.length, icon: "bi bi-person-circle", bg: "bg-danger", },
    { label: "Total Course", value: data.courses.length, icon: "fa fa-graduation-cap text-primary", bg: "bg-warning", },
    { label: "Total Offers", value: data.offers.length, icon: "bi bi-award-fill text-voilet", bg: "bg-voilet", },
    { label: "New Message", value: data.queries.length, icon: "fa fa-comments text-primary", bg: "bg-primary", }
  ];
  return (
    <div className="tab-pane fade show active py-2" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
      <div className="row justify-content-center mx-0">
        {stats.map((stat, idx) => (
          <div key={idx} className="col-xl-3 col-xxl-3 col-md-6 my-2">
            <div className={`widget-stat myshadow2 border-0 card ${stat.bg}`}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="bg-white p-2 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
                    <i className={`${stat.icon} fs-5`} />
                  </div>
                  <div className="text-white">
                    <p className="mb-1">{stat.label}</p>
                    <h3 className="mb-0">{stat.value}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <StudentChart
        std={data.students}
        Tcourse={data.courses.length}
        TOffer={data.offers.length}
        TQuery={data.queries.length}
      />
    </div>
  );
};

export default Analysis;
