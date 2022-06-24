import React, { useState } from 'react';
import JobList from '../../components/JobList';

const JobPage = () => {
  const [description, setDescription] = useState('')
  const [descList, setDescList] = useState('');

  const [location, setLocation] = useState('');
  const [locationList, setLocationList] = useState('');

  const [isFulltime, setIsFulltime] = useState(false);
  const [isFulltimeList, setIsFulltimeList] = useState(false);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState(false);

  const searchHandler = () => {
    setDescList(description);
    setLocationList(location);
    setIsFulltimeList(isFulltime);
    setPage(1);
    setSearch(!search);
  };

  const changePage = (value) => {
    if ((page <= 1 && value < 0)) {
      return
    }
    setPage(page + value);
    setSearch(!search);
  }


  return (
    // <>
    //   <div className="row row-cols-lg-auto g-3 align-items-center">
    //     <div className="col-12">
    //       <label className="visually-hidden" for="inlineFormInputGroupUsername">Description</label>
    //       <div className="input-group">
    //         <input type='text' className='form-control' placeholder='Job Description'
    //           onChange={(e) => setDescription(e.target.value)} value={description} />
    //       </div>
    //     </div>

    //     <div className="col-12">
    //       <label className="visually-hidden" for="inlineFormSelectPref">Location</label>
    //       <div className="input-group">
    //         <input type='text' className='form-control' placeholder='Job Location'
    //           onChange={(e) => setLocation(e.target.value)} value={location} />
    //       </div>
    //     </div>

    //     <div className="col-12">
    //       <div className="form-check">
    //       <input type='checkbox' onChange={(e) => setIsFulltime(e.target.checked)} value={isFulltime} />
    //         <label className="form-check-label" for="inlineFormCheck">
    //           Full Time Only
    //         </label>
    //       </div>
    //     </div>

    //     <div className="col-12 submit-btn">
    //       <button className='btn text-add' onClick={searchHandler}>Search</button>
    //     </div>
    //   </div>
    // </>


    <>
      <div className='row row-cols-lg-auto g-3 align-items-center'>
        <div className='col-12'>
          <div className="input-group">
            {/* <label>Job Description</label> */}
            <input type='text' className='form-control' placeholder='Job Description'
              onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>
        </div>

        <div className='col-12'>
          <div className="input-group">
            {/* <label>Location</label> */}
            <input type='text' className='form-control' placeholder='Job Location'
              onChange={(e) => setLocation(e.target.value)} value={location} />
          </div>
        </div>

        <div className='col-12'>
          <div className="input-group">
            <label>Full Time Only</label>
            <div className='checkfulltime'>
              <input type='checkbox' onChange={(e) => setIsFulltime(e.target.checked)} value={isFulltime} />
            </div>
          </div>
        </div>

        <div className='col-12'>
          <div className="input-group search-btn">
            <button className='btn text-add' onClick={searchHandler}>Search</button>
          </div>
        </div>
      </div>

      <div className='col-12'>
        <div style={{ padding: "50px" }}>
          <JobList key={search} description={descList} location={locationList} fulltime={isFulltimeList} page={page} />
        </div>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={() => changePage(-1)} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link">{page}</a></li>
          <li className="page-item">
            <a className="page-link" onClick={() => changePage(1)} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>


      {/* <div className='col-12'>
          <JobList key={search} description={descList} location={locationList} fulltime={isFulltimeList} page={page} />
          <div className='count-btn'>
            <button onClick={() => changePage(-1)}><p>Prev</p></button>
            <p>{page}</p>
            <button onClick={() => changePage(1)}><p>Next</p></button>
          </div>
        </div> */}

    </>
  )
}

export default JobPage;