jest
  .dontMock('../source/components/Button')
  .dontMock('classnames')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import Button from '../source/components/Button';

describe('Buttonコンポーネントの描画', () => {
  it('<a>または<button>を描画します', () => {
    const button = TestUtils.renderIntoDocument(
      <div><Button>こんにちは</Button></div>
    );
    
    const a = TestUtils.renderIntoDocument(
      <div>
        <Button href="#">こんにちは</Button>
      </div>
    )
    expect(ReactDOM.findDOMNode(button).children[0].nodeName).toEqual('BUTTON');
    expect(ReactDOM.findDOMNode(a).children[0].nodeName).toEqual('A');
    expect(ReactDOM.findDOMNode(a).nodeName).toEqual('DIV');
  });
  it('カスタムのCSSのクラスを指定できます', () => {
    const button = TestUtils.renderIntoDocument(
      <div><Button className="good bye">こんにちは</Button></div>
    );
    const buttonNode = ReactDOM.findDOMNode(button).children[0];
    expect(buttonNode.getAttribute('class')).toEqual('Button good bye');
  });
});

