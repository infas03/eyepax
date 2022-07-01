const express = require("express");

const mySlide = require('../dummy.json')

exports.getSlide = async( req, res) => {
  const result = mySlide.filter(slide => mySlide.indexOf(slide) < req.query['slides']);

  res.json(result);
}