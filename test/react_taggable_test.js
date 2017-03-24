import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ReactTaggable from '../src/react_taggable.js';

describe('<ReactTaggable />', () => {
  it('renders the component structure', () => {
    const tags = {"Car": 5}
    const wrapper = shallow(<ReactTaggable tags={tags}/>);
    expect(wrapper.matchesElement(
      <div id="taggable-div">
        <a className='tag-tiny' key='Car'>Car</a>
      </div>
    )).to.equal(true);
  });

  it('has default weights assigned', () => {
    const tags = {"Car": 5}
    const wrapper = shallow(<ReactTaggable tags={tags}/>);
    const props = wrapper.instance().props

    expect(props.weights['tiny']).to.equal(5);
    expect(props.weights['small']).to.equal(10);
    expect(props.weights['medium']).to.equal(15);
    expect(props.weights['big']).to.equal(20);
    expect(props.weights['huge']).to.equal(30);
  });

  it('overwrites the default weight properties', () => {
    const tags = {"Car": 5}
    const weights = {'tiny': 20, 'small': 50, 'medium': 80, 'big': 140, 'huge': 190}
    const wrapper = shallow(<ReactTaggable tags={tags} weights={weights}/>);
    const props = wrapper.instance().props

    expect(props.weights['tiny']).to.equal(20);
    expect(props.weights['small']).to.equal(50);
    expect(props.weights['medium']).to.equal(80);
    expect(props.weights['big']).to.equal(140);
    expect(props.weights['huge']).to.equal(190);
  });

})
