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
        <a className='tag-small' key='Car'>Car</a>
      </div>
    )).to.equal(true);
  });

})
