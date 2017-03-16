import React from 'react'
import ReactDom from 'react-dom'
import ReactTaggable from './src/react_taggable'
const tags = {
  "Antenna": 5,
  "Car": 10,
  "TV": 2
}

const weights = {
  "tiny": 5,
  "small": 10,
  "medium": 15,
  "big": 20
}
ReactDom.render(<ReactTaggable tags={tags} weights={weights}/>, document.getElementById('taggable'))
