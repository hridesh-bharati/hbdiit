import React, { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import Chart from 'chart.js/auto';
import { getAllQuery, deleteQuery, updateQueryStatus } from '../../../api/adminApi/api';

const StudentChart = ({ std = [], Tcourse = 0, TOffer = 0 }) => {
    const [query, setQuery] = useState([]);

    const barChartRef = useRef(null);
    const pieChartRef = useRef(null);
    const lineChartRef = useRef(null);

    // Keep track of chart instances for proper cleanup
    const chartInstances = useRef({});

    // Fetch all queries/messages
    const fetchAllQuery = async () => {
        try {
            const rspns = await getAllQuery();
            setQuery(rspns?.message || []);
        } catch (error) {
            console.error("Fetch queries error:", error);
            toast.error("Failed to fetch queries.");
        }
    };
    const deleteQueryVia = async (_id) => {
        try {
            const rspns = await deleteQuery(_id);

            if (rspns?.ackbool === 1) {
                toast.success("Query has been deleted.");
            } else {
                toast.error("Failed to delete query.");
            }
            await fetchAllQuery();
        } catch (error) {
            console.error("Delete query error:", error);
            await fetchAllQuery();
        }
    };
    const doSolve = async (_id) => {
        try {
            const rspns = await updateQueryStatus(_id);
            if (rspns?.ackbool === 1) {
                toast.success(rspns.message || "Query marked as solved.");
                fetchAllQuery();
            } else {
                toast.error(rspns?.message || "Failed to update query.");
            }
        } catch (error) {
            console.error("Update query status error:", error);
            toast.error("Failed to update query.");
        }
    };

    // Chart rendering helper
    const renderChart = (ref, type, data, options = {}) => {
        const ctx = ref.current?.getContext('2d');
        if (!ctx) return;

        // Destroy existing chart instance if any
        if (chartInstances.current[type]) {
            chartInstances.current[type].destroy();
        }

        chartInstances.current[type] = new Chart(ctx, {
            type,
            data,
            options,
        });
    };

    // Fetch queries/messages on mount
    useEffect(() => {
        fetchAllQuery();

        // Cleanup charts on unmount
        return () => {
            Object.values(chartInstances.current).forEach(chart => chart.destroy());
        };
        // eslint-disable-next-line
    }, []);

    // Update charts whenever data changes
    useEffect(() => {
        const Total = std.length;
        const labels = ['Total Student', 'Total Course', 'Total Offer', 'New Message'];
        const values = [Total, Tcourse, TOffer, query.length];

        const commonData = {
            labels,
            datasets: [{
                label: 'Dashboard Stats',
                data: values,
                backgroundColor: ['#00bbf0', '#38598b', '#FFC300', '#f96d00'],
                borderColor: ['#00bbf0', '#38598b', '#FFC300', '#f96d00'],
                borderWidth: 1,
            }]
        };

        renderChart(barChartRef, 'bar', commonData, {
            responsive: false,
            plugins: { legend: { display: false } }
        });

        renderChart(pieChartRef, 'pie', commonData, {
            responsive: false,
            plugins: { legend: { position: 'bottom' } }
        });

        renderChart(lineChartRef, 'line', {
            ...commonData,
            datasets: [{
                ...commonData.datasets[0],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1
            }]
        }, {
            responsive: false,
            plugins: { legend: { display: false } }
        });

        // Cleanup charts before re-render
        return () => {
            Object.values(chartInstances.current).forEach(chart => chart.destroy());
        };
    }, [std, Tcourse, TOffer, query.length]);

    return (
        <div className="m-auto">
            <div className="row mb-5 mx-0 d-flex justify-content-center">
                {/* Message Table */}
                <div className="col-xl-4 col-xxl-3 col-sm-6 my-2 w-100">
                    <div className="card myshadow border-0" id="NotishBoard">
                        <div className="card-header h4 text-white text-start" style={{ background: "var(--cardHeadColor)" }}>
                            <div className="d-flex justify-content-between">
                                <div><i className="fa fa-comments text-warning" /> NEW MESSAGE</div>
                                <button className="btn btn-sm text-white" onClick={fetchAllQuery}>
                                    <i className="bi bi-arrow-clockwise" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body FeatureCard2 p-0">
                            <div className="table-responsive small">
                                <table className="table table-hover table-bordered table-sm mb-0">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Query</th>
                                            <th>Name</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th>Solved</th>
                                            <th>Date</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {query.length > 0 ? query.map((q, index) => (
                                            <tr key={q._id || index}>
                                                <td>{q.title}</td>
                                                <td>{q.query}</td>
                                                <td>{q.fullName}</td>
                                                <td>{q.mobile}</td>
                                                <td>{q.email}</td>
                                                <td className="text-center">
                                                    {q.iSolveStatus ? (
                                                        <i className="bi bi-check2-all text-primary fs-5 fw-bold" />
                                                    ) : (
                                                        <button
                                                            className="btn btn-success btn-sm py-0 px-2"
                                                            onClick={() => doSolve(q._id)}
                                                        >
                                                            Yes
                                                        </button>
                                                    )}
                                                </td>
                                                <td>{q.createdAt ? new Date(q.createdAt).toLocaleDateString('en-GB') : ''}</td>
                                                <td>
                                                    <button
                                                        className="btn text-danger btn-sm"
                                                        onClick={() => deleteQueryVia(q._id)}
                                                    >
                                                        <i className="bi bi-trash3-fill" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan="8" className="text-center text-muted py-2">No messages found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Charts */}
                <div className="col-xl-4 col-xxl-3 col-sm-6 my-2">
                    <div className="card myshadow2 border-0">
                        <div className="card-body">
                            <canvas ref={barChartRef} width="300" height="300" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-xxl-3 col-sm-6 my-2">
                    <div className="card myshadow2 border-0">
                        <div className="card-body">
                            <canvas ref={pieChartRef} width="300" height="300" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-xxl-3 col-sm-6 my-2">
                    <div className="card myshadow2 border-0">
                        <div className="card-body">
                            <canvas ref={lineChartRef} width="300" height="300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentChart;