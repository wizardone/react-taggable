import React from 'react';
import ReactDom from 'react-dom';

export default class ReactTaggable extends React.Component {

  constructor(props){
    super(props);
    const { tags } = props;
    this.state = {};
  }

  render(){
    const { tags } = this.props;
    return (
      <div id="taggable-div">
      {Object.keys(tags).map((tag) => {
        return (<a key={tag}>{tag}</a>)
      })}
      </div>
    )
  }
}
