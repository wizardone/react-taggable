import React from 'react'
import ReactDom from 'react-dom'
import ReactTaggable from './src/react_taggable'
const tags = {
  "Antenna": 5,
  "Car": 10,
  "TV": 2
}
ReactDom.render(<ReactTaggable tags={tags}/>, document.getElementById('taggable'))
