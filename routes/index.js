var express = require('express');
var router = express.Router();


router.get('/', (req,res)=>{
  res.render('index',{title: 'Bé tập tính'});
})

router.post('/', (req,res)=>{
  let number1 = req.body.so1
  let number2 = req.body.so2
  let operator = req.body.pheptinh
  let result = "";

  switch (operator){
    case "add":
      result = (parseFloat(number1) + parseFloat(number2));
      break;
    case "sub":
      result = (parseFloat(number1) - parseFloat(number2));
      break;
    case "mul":
      result = (parseFloat(number1) * parseFloat(number2));
      break;
    case "divide":
      result = (parseFloat(number1) / parseFloat(number2));
      break;
  }


  res.render('index',{
    title: 'Bé tập tính',
    number1,
    number2,
    result
  });
})
module.exports = router;
