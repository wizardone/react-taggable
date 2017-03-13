import React from 'react';
import ReactDom from 'react-dom';

export default class ReactTaggable extends React.Component {

  constructor(){
    super();
    this.state = {tags: []}
  }

  render(){
    return (
      <div id="taggable-div">Tags should be here</div>
    )
  }
}
