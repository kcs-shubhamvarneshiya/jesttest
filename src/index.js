const express = require('express');

const app = express();
const event = require('./service/event-service')

function cricket(req, res, next) {
  event(13, (err, rows) => {
      if (err) {
          return res.json({ errormsg: err.errorMsg })
      }
      req.CricketApi = rows.DATA[2]
      next();
  })
}

function hokey(req, res, next) {
  event(4, (err, rows) => {
      if (err) {
        return res.json({ errormsg: err.errorMsg })
      }
      req.HokeyApi = rows.DATA[1]
      next();

  })
}

function tableTannis(req, res, next) {

  event(25, (err, rows) => {
      if (err) {
        return res.json({ errormsg: err.errorMsg })
      }
      req.tableTannisApi = rows.DATA[1]
      next();
  })

}


//Routes 

app.get('/event', tableTannis, cricket, hokey, (req, res) => {
  res.status(200).json({
      Data : {
          TableTanisPayload : req.tableTannisApi,
          CricketPayload : req.CricketApi,
          HokeyPayload : req.HokeyApi   
      },
      message : "Data retrieved successfully."
  })
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Express API!' });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'test reached successfully!' });
})

app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'another test reached successfully!' });
})



module.exports = app;
