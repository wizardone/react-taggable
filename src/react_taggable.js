import React from 'react';
import ReactDom from 'react-dom';

export default class ReactTaggable extends React.Component {

  constructor(props){
    super(props);
    this.state = props.weights;
    if(!this._validateWeight()){
      throw "You supplied a wrong set of weights for your tags. Please check the README";
    }
  }

  setWeightKlass(weight){
    let klass = 'tag-default';
    if(weight <= this._weightFor('tiny')){
      klass = 'tag-tiny'
    } else if(weight <= this._weightFor('small')){
      klass = 'tag-small'
    } else if(weight <= this._weightFor('medium')){
      klass = 'tag-medium'
    } else if(weight <= this._weightFor('big')){
      klass = 'tag-big'
    } else if(weight > this._weightFor('huge')){
      klass = 'tag-huge'
    }
    return klass;
  }

  _weightFor(klass){
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
