const axios = require('axios');
const URL = 'http://dev3.dansmultipro.co.id/api/recruitment/positions';


class JobController {
    static async getListJob(req, res) {
        axios
            .get(URL + '.json', {
                params: {
                    description: req.query.description,
                    location: req.query.location,
                    fulltime: req.query.fulltime,
                    page: req.query.page
                }
            })
            .then ( (response) => {
                res.status(200).json({
                    status: 200,
                    success: true,
                    data: response.data
                })
            })
            .catch ((err) => {
                res.status(500).json({
                    status: err.status,
                    message: err.message,
                    errorMessage: err
                })
            })
        // try {
        //     let listJobs = await axios({
        //         method: 'GET',
        //         url: URL,
        //         params: {
        //             description: req.query.description,
        //             location: req.query.location,
        //             type: req.query.type
        //         }
        //     });
        //     res.status(200).json(listJobs.data);
        // } catch (err) {
        //     res.status(404).json(err)
        // }
    }

    static async getDetailJob(req, res) {
        axios
            .get(URL + '/' +req.query.id)
            .then ((res) => {
                res.status(200).json(res.data)
            })
            .catch( (err) => {
                res.status(500).json({
                    message: 'Failed',
                    error: err
                })
            })
        // try {
        //     const id = +req.params.id;
        //     let result = await axios({
        //         method: 'GET',
        //         url: `${URL}/${id}`
        //     })
        //     res.status(200).json(result.data)
        // } catch (err) {
        //     res.status(404).json(err)
        // }
    }
}

module.exports = JobController;