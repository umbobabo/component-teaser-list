import TeaserList from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const today = new Date();
const list = [
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/original-size/20151003_WOM001_473.png`,
      title: `Just an image`,
    },
    flyTitle: `The UN, religion and development`,
    title: `Faith and secular global bodies learn to live together`,
    dateTime: today,
    text: `Just a text`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: `http://schema.org/BlogPosting`,
    itemProp: `blogPost`,
    teaserId: 1,
  },
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/original-size/20151003_WOM001_473.png`,
      title: `Just an image`,
    },
    flyTitle: `The UN, religion and development`,
    title: `Faith and secular global bodies learn to live together`,
    dateTime: today,
    text: `Just a text`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: `http://schema.org/BlogPosting`,
    itemProp: `blogPost`,
    teaserId: 2,
  },
  {
    image: {
      src: `http://cdn.static-economist.com/sites/default/files/imagecache/original-size/20151003_WOM001_473.png`,
      title: `Just an image`,
    },
    flyTitle: `The UN, religion and development`,
    title: `Faith and secular global bodies learn to live together`,
    dateTime: today,
    text: `Just a text`,
    link: {
      href: `http://www.economist.com/blogs/erasmus/2015/09/`,
    },
    itemType: `http://schema.org/BlogPosting`,
    itemProp: `blogPost`,
    teaserId: 3,
  },
];
describe(`A teaser`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      TeaserList.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(
        <TeaserList
          list={list}
        />).should.equal(true);
    });
    it(`it render a list of teasers`, () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(TeaserList, { className: 'TeaserList', list }));
      const component = shallowRenderer.getRenderOutput();
      component.props.children.length.should.equal(3);
      component.props.children[0].type.should.be.a('function');
      component.props.children[0].type.name.should.equal('Teaser');
    });
  });
});
