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
                                        <div className="row mx-0 my-2 p-0">
                                            <div className="card">
                                                <div className="card-body"  onClick={() => {
                                                    navigation('/home/' + job.id);
                                                    window.location.reload();
                                                }} key={job.id} >
                                                    <div className="row m-0 p-0 d-flex ms-1 me-auto">
                                                        <h5 className="m-0 p-0 title-job"><strong>{job.title}</strong></h5>
                                                        <p className="m-0 p-0">{job.company} - <strong className='type-job'>{job.type}</strong></p>
                                                    </div>
                                                    <div className='row m-0 p-0 d-flex ms-auto me-1 text-end'>
                                                        <p className="m-0 p-0">{job.location}</p>
                                                        <p className="m-0 p-0">{job.created_at.slice(0,16)}</p>
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