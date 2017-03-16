import React from 'react';
import ReactDom from 'react-dom';

export default class ReactTaggable extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.weights = props.weights
  }

  setKlass(weight){
    let klass = '';
    if(weight <= 5){
      klass = 'tag-small'
    } else if(weight > 5 && weight <= 10){
      klass = 'tag-medium'
    } else {
      klass = 'tag-big'
    }
    return klass;
  }

  validateWeights(){
    
  }

  render(){
    const { tags } = this.props;
    return (
      <div id="taggable-div">
        {Object.keys(tags).map((tag) => {
          return (<a key={tag} className={this.setKlass(tags[tag])}>{tag}</a>)
        })}
      </div>
    )
  }
}
