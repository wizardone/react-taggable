import React from 'react'
import ReactDom from 'react-dom'
import ReactTaggable from '../src/react_taggable'

const tags = [
  { name: 'XBOX', times: 3, link: 'http://example.com/?search=xbox' },
  { name: 'Playstation', times: 43, link: 'http://example.com/?search=playstation' },
  { name: 'IPad', times: 23, link: 'http://example.com/?search=ipad' },
  { name: 'IPhone', times: 83, link: 'http://example.com/?search=ipad' },
  { name: 'IPad', times: 83, link: 'http://example.com/?search=ipad' }
]
ReactDom.render(<ReactTaggable tags={tags} />, document.getElementById('taggable'))
