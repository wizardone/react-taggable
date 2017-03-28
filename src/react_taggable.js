import React from 'react';
import ReactDom from 'react-dom';

export default class ReactTaggable extends React.Component {

  constructor(props){
    super(props);
    this.state = props.weights;
  }

  setWeightKlass(weight){
    let klass = 'tag-default';
    if(weight <= 5){
      klass = 'tag-tiny'
    } else if(weight > 5 && weight <= 10){
      klass = 'tag-small'
    } else if(weight > 10 && weight <= 15){
      klass = 'tag-medium'
    } else if(weight > 15 && weight <= 20){
      klass = 'tag-big'
    } else if(weight > 20){
      klass = 'tag-huge'
    }
    return klass;
  }

  weightFor(klass){
    return this.state[klass]
  }

  _validateWeight(){
    return (this.state.tiny < this.state.small) &&
      (this.state.small < this.state.medium) &&
      (this.state.medium < this.state.big) &&
      (this.state.big < this.state.huge)
  }

  render(){
    const { tags } = this.props;
    return (
      <div id="taggable-div">
        {Object.keys(tags).map((tag) => {
          return (<a key={tag} className={this.setWeightKlass(tags[tag])}>{tag}</a>)
        })}
      </div>
    )
  }
}

ReactTaggable.defaultProps = {
  weights: {
    tiny: 5,
    small: 10,
    medium: 15,
    big: 20,
    huge: 30
  }
}
