# react-taggable
[![Build Status](https://travis-ci.org/wizardone/react-taggable.svg?branch=master)](https://travis-ci.org/wizardone/react-taggable)

### Visualising tags with React
A React component that applies different styles to tag input.
Please not that it does not come bundled. It is just the component, no
other libraries attached. You need to have React

You can use it like this:

```javascript
import ReactTaggable from 'react-taggable'

ReactDom.render(<ReactTaggable tags={tags} weights={weights}/>, document.getElementById('taggable'))
```
tags must be a object with the tags that you want to visualize and the
number of their occurences. For example if you keep track of the most
searched items within your system:
```javascript
const tags = [
  { name: 'XBOX', times: 243, link: 'http://example.com/?search=xbox' },
  { name: 'Playstation', times: 43, link: 'http://example.com/?search=playstation' },
  { name: 'IPad', times: 143, link: 'http://example.com/?search=ipad' }
]
```
The component relies on the following weight rules: tiny, small, medium, big,
huge. You can pass the weights object to the component to change them.
```javascript
const weights = {
  tiny: 20,
  small: 50,
  medium: 100,
  big: 200,
  huge: 300
}
```
Each value defines the upper boundary of the corresponding class. When
providing your own weights you must follow the rule:
`tiny < small < medium < big < huge` otherwise an error will be thrown.
If you use the above setup you will end up having html like this:
```html
<div id="taggable-div">
  <a className='tag-huge' href="http://example.com/?search=xbox" key='XBOX'>XBOX</a>
  <a className='tag-small' href="http://example.com/?search=playstation" key='Playstation'>Playstation</a>
  <a className='tag-big' href="http://example.com/?search=ipad" key='IPad'>IPad</a>
</div>
```
