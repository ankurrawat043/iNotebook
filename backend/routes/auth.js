const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  const obj={
    a: "ankur",
    number: 32
   };
   res.json(obj)
});


module.exports= router;