import React from 'react'
import ReactDom from 'react-dom'
import ReactTaggable from './src/react_taggable'

const tags = [
  { name: 'XBOX', times: 243, link: 'http://example.com/?search=xbox' },
  { name: 'Playstation', times: 43, link: 'http://example.com/?search=playstation' },
  { name: 'IPad', times: 143, link: 'http://example.com/?search=ipad' }
]

const weights = {
  tiny: 5,
  small: 10,
  medium: 15,
  big: 20,
  huge: 30
}
ReactDom.render(<ReactTaggable tags={tags} weights={weights}/>, document.getElementById('taggable'))
