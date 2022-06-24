import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDetailJob } from '../../actions/jobAction';

const JobDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getDetailJobResult, getDetailJobLoading, getDetailJobError } = useSelector(
    (state) => state.jobReducers
  );

  useEffect(() => {
    getDetailJob(dispatch, id)
  }, [dispatch]);


  return (
    <>
      <ul >
        <li className="nav-detail">
          <Link to="/home">Back</Link>
        </li>
      </ul>
      <div className='col-md-12 text-detail'>
        {getDetailJobResult ? (
          <>
            <div className='row'>
              <div className='col-5'>
                <p>{getDetailJobResult.type} / {getDetailJobResult.location}</p>
                <h3><strong>{getDetailJobResult.title}</strong></h3>
              </div>
            </div>
            <hr />

            <div dangerouslySetInnerHTML={{ __html: getDetailJobResult.description }}></div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p>{getDetailJobResult.company}</p>
                <img className="img-fluid img-responsive img-thumbnail" src={getDetailJobResult.company_logo}></img>
                <p><a href={getDetailJobResult.company_url}>{getDetailJobResult.company_url}</a></p>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5><strong>How to Apply</strong></h5>
                <p dangerouslySetInnerHTML={{ __html: getDetailJobResult.how_to_apply }}></p>
              </div>
            </div>
          </>


        ) : getDetailJobLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{getDetailJobError ? getDetailJobError : "Data Kosong"}</p>
        )}
      </div>
    </>
  )
}

export default JobDetail