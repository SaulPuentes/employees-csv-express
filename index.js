const fs = require('fs')
const express = require('express')
const { cvs2json } = require('./utils/cvs2json')

const app = express()
const csvPath = './data/employees.csv'

app.get('/', function(req, res) {
  res.send('Hello world')
})

app.get('/employee/:id/:attribute?', (req, res) => {
  fs.readFile(csvPath, 'utf8', (err, data) => {
    if (err) {
      res.send(err)
    }
    const args = req.params
    
    const employees = cvs2json(data)

    const employeeId = parseInt(args.id) - 1
    
    // if doesn't have the attribute send all the employee info
    let response;
    if(!args.attribute) {
      response = employees[employeeId];
      if(response)
        res.send(response)
      else
        res.send('Error: Employee ID not found')
    }
    else {
      const employeeAttr = args.attribute;
      response = employees[employeeId][employeeAttr];
      if(response)
        res.send(response)
      else
        res.send('Error: Employee attribute not found')
    }
  })
})

app.listen(3000, function() {
  console.log('application started.');
})