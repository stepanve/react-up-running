jest
  .dontMock('../source/components/Rating')
  .dontMock('classnames')
;

import React from 'react';
import TestUtils from 'react-dom/test-utils';

import Rating from '../source/components/Rating';

describe('評価を表します', () => {
  it('ユーザーの操作に応答します', () => {
    const input = TestUtils.renderIntoDocument(<Rating />);
    const stars = TestUtils.scryRenderedDOMComponentsWithTag(input, 'span');
    
    TestUtils.Simulate.mouseOver(stars[3]);
    expect(stars[0].className).toBe('RatingOn');
    expect(stars[3].className).toBe('RatingOn');
    expect(stars[4].className).toBeFalsy();
    expect(input.state.rating).toBe(0);
    expect(input.state.tmpRating).toBe(4);

    TestUtils.Simulate.mouseOut(stars[3]);
    expect(stars[0].className).toBeFalsy();
    expect(stars[3].className).toBeFalsy();
    expect(stars[4].className).toBeFalsy();
    expect(input.state.rating).toBe(0);
    expect(input.state.tmpRating).toBe(0);

    TestUtils.Simulate.click(stars[3]);
    expect(input.getValue()).toBe(4);
    expect(stars[0].className).toBe('RatingOn');
    expect(stars[3].className).toBe('RatingOn');
    expect(stars[4].className).toBeFalsy();
    expect(input.state.rating).toBe(4);
    expect(input.state.tmpRating).toBe(4);

  });
});