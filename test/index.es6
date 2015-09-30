import TeaserList from '../index.es6';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;
describe(`A teaser`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      TeaserList.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(
        <TeaserList
        
        />).should.equal(true);
    });
  });
});
