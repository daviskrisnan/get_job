import React, { useEffect } from 'react';
import { getJob } from '../actions/jobAction';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const JobList = (data) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const { getJobResult, getJobLoading, getJobError } = useSelector(
        (state) => state.jobReducers
    );

    useEffect(() => {
        getJob(dispatch, data.description, data.location, data.fulltime, data.page);
    }, [dispatch])


    return (
        <>
            <div className='container'>
                <h3 className='job-title'>Job List</h3>
                {getJobResult ? (
                    getJobResult.map((job) => {
                        if (job !== null) {
                            if ((data.fulltime && data.type !== "Full Time") || (!data.fulltime && data.type === "Full Time")) {
                                return (
                                    <>
                                        <div className="row row-cols-1 row-cols-md-3 g-2">
                                            <div className="col">
                                                <div className="card h-100"  onClick={() => {
                                                    navigation('/home/' + job.id);
                                                    window.location.reload();
                                                }} key={job.id} >
                                                    <div className="card-body">
                                                        <h5 className="card-title"><strong>{job.title}</strong></h5>
                                                        <p className="card-text">{job.company} - <strong>{job.type}</strong></p>
                                                        <p className="card-text">{job.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        }
                    })
                ) : getJobLoading ? (
                    <p>Loading...</p>
                ) : (
                    <p>{getJobError ? getJobError : "Data Kosong"}</p>
                )}
            </div>
        </>
    )
}

export default JobList;