import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-dom/test-utils';

describe('ボタンの描画', () => {
  it('クリック前テスト', () => {
    expect(ReactDom.findDOMNode(button).textContent).toEqual('こんにちは');
  });
  it('クリック後テスト', () => {
    TestUtils.Simulate.click(button);
    expect(ReactDom.findDOMNode(button).textContent).toEqual('さようなら');
  });
});

const button = TestUtils.renderIntoDocument(
  <button
    onClick={ev => ev.target.innerHTML = 'さようなら'}>
    こんにちは  
  </button>
);