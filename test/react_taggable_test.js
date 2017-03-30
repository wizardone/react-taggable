import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ReactTaggable from '../src/react_taggable.js';

describe('<ReactTaggable />', () => {
  it('renders the component structure', () => {
    const tags = {'Car': 5}
    const wrapper = shallow(<ReactTaggable tags={tags}/>);
    expect(wrapper.matchesElement(
      <div id="taggable-div">
        <a className='tag-tiny' key='Car'>Car</a>
      </div>
    )).to.equal(true);
  });

  it('has default weights assigned', () => {
    const tags = {'Car': 5}
    const wrapper = shallow(<ReactTaggable tags={tags}/>);
    const props = wrapper.instance().props

    expect(props.weights['tiny']).to.equal(5);
    expect(props.weights['small']).to.equal(10);
    expect(props.weights['medium']).to.equal(15);
    expect(props.weights['big']).to.equal(20);
    expect(props.weights['huge']).to.equal(30);
  });

  it('overwrites the default weight properties', () => {
    const tags = {'Car': 5}
    const weights = {'tiny': 20, 'small': 50, 'medium': 80, 'big': 140, 'huge': 190}
    const wrapper = shallow(<ReactTaggable tags={tags} weights={weights}/>);
    const props = wrapper.instance().props

    expect(props.weights['tiny']).to.equal(20);
    expect(props.weights['small']).to.equal(50);
    expect(props.weights['medium']).to.equal(80);
    expect(props.weights['big']).to.equal(140);
    expect(props.weights['huge']).to.equal(190);
  });

  describe('#setWeightKlass', () => {
    let tags;
    beforeEach(() => {
      tags = {'Car': 5};
    });

    it('returns the default class based on weight', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper.setWeightKlass()).to.equal('tag-default')
    })

    it('returns tiny class based on weight', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper.setWeightKlass(3)).to.equal('tag-tiny')
    })

    it('returns small class based on weight', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper.setWeightKlass(8)).to.equal('tag-small')
    })

    it('returns medium class based on weight', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper.setWeightKlass(14)).to.equal('tag-medium')
    })

    it('returns big class based on weight', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper.setWeightKlass(18)).to.equal('tag-big')
    })

    it('returns huge class based on weight', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper.setWeightKlass(34)).to.equal('tag-huge')
    })
  });

  describe('#weightFor', () => {
    let tags;
    beforeEach(() => {
      tags = {'Car': 5};
    });
    it('returns the minimum weight for the tiny class name', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper._weightFor('tiny')).to.equal(5)
    });

    it('returns the minimum weight for the small class name', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper._weightFor('small')).to.equal(10)
    });

    it('returns the minimum weight for the medium class name', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper._weightFor('medium')).to.equal(15)
    });

    it('returns the minimum weight for the big class name', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper._weightFor('big')).to.equal(20)
    });

    it('returns the minimum weight for the huge class name', () => {
      const wrapper = shallow(<ReactTaggable tags={tags}/>).instance();

      expect(wrapper._weightFor('huge')).to.equal(30)
    });
  });

  describe('#_validateWeight', () => {
    it('returns true - the weights are accurate', () => {
      const tags = {'Car': 5};
      const weights = {tiny: 5, small: 10, medium: 15, big: 20, huge: 25};
      const wrapper = shallow(<ReactTaggable tags={tags} weights={weights}/>).instance();

      expect(() => { shallow(<ReactTaggable tags={tags} weights={weights}/>).instance() }).to.not.throw();
    });

    it('returns false - the weights are not accurate', () => {
      const tags = {'Car': 5};
      const weights = {tiny: 5, small: 50, medium: 15, big: 30, huge: 65};

      expect(() => { shallow(<ReactTaggable tags={tags} weights={weights}/>).instance() }).to.throw();
    });
  });
})
