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
      <div className='container mt-4'>
          <Link to="/home">Back</Link>
      </div>


      <div className="container-fluid mt-4 p-0 ">
        <div className="row m-0 p-0 justify-content-center">
          <div className="col-11 m-0 p-0 ">
            <div className="card m-0 p-0 p-3">
              <div className="card-body m-0 p-0">
                <div className="row m-0 p-0">
                  <p>{getDetailJobResult.type} / {getDetailJobResult.location}</p>
                </div>
                <div className="row m-0 p-0">
                  <h4>{getDetailJobResult.title}</h4>
                </div>
                <hr />
                <div className="row m-0 p-0">
                  <div className="col-8 m-0 p-0 px-3">
                    <div dangerouslySetInnerHTML={{ __html: getDetailJobResult.description }}></div>
                  </div>
                  <div className="col-4 m-0 p-0">
                    <div className="row m-0 p-0 ">
                      <div className="card ">
                        <div className="card-body ">
                          <div className="row m-0 p-0">
                            <h5>{getDetailJobResult.company}</h5>
                          </div>
                          <hr />
                          <div className="row mx-auto p-0 text-center  mt-2">
                            <img className="img-fluid img-responsive img-thumbnail" src={getDetailJobResult.company_logo}></img>
                            {/* <img src="https://via.placeholder.com/150" className="rounded-circle text-center" alt="Rounded Image" style={{ width: "150px" }} /> */}
                          </div>
                          <div className="row m-0 p-0  mt-2">
                            <p>{getDetailJobResult.company_url}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0 p-0 mt-3 ">
                      <div className="card  ">
                        <div className="card-body ">
                          <div className="row m-0 p-0 ">
                            <h5>How to Apply</h5>
                          </div>
                          <hr />
                          <div className="row m-0 p-0 ">
                            <p dangerouslySetInnerHTML={{ __html: getDetailJobResult.how_to_apply }}></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='container-fluid mt-4 p-0'>
        {getDetailJobResult ? (
          <>
            <div className='row'>
              <div className='row m-0 p-0'>
                <p>{getDetailJobResult.type} / {getDetailJobResult.location}</p>
              </div>
              <div className='row m-0 p-0'>
                <h4><strong>{getDetailJobResult.title}</strong></h4>
              </div>
            </div>
            <hr />

            <div className='row m-0 p-0'>
              <div className='col-8 m-0 p-0'>
                <div dangerouslySetInnerHTML={{ __html: getDetailJobResult.description }}></div>
              </div>
            </div>

            <div className='col-4 m-0 p-0'>
              <div className='row m-0 p-0'>
                <div className="card">
                  <div className="card-body">
                    <div className='row m-0 p-0'>
                      <p>{getDetailJobResult.company}</p>
                    </div>
                    <hr />
                    <div className='row mx-auto p-0 mt-2 text-center'>
                      <img className="img-fluid img-responsive img-thumbnail" src={getDetailJobResult.company_logo}></img>
                    </div>
                    <div className='row mx-auto p-0 mt-2'>
                      <p><a href={getDetailJobResult.company_url}>{getDetailJobResult.company_url}</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-4 m-0 p-0'>
              <div className='row m-0 p-0 mt-3'>
                <div className="card">
                  <div className="card-body">
                    <div className='row m-0 p-0'>
                      <h5><strong>How to Apply</strong></h5>
                    </div>
                    <hr />
                    <div className='row m-0 p-0'>
                      <p dangerouslySetInnerHTML={{ __html: getDetailJobResult.how_to_apply }}></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>


        ) : getDetailJobLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{getDetailJobError ? getDetailJobError : "Data Kosong"}</p>
        )}
      </div> */}
    </>
  )
}

export default JobDetail