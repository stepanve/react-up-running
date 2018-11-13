jest.autoMockOff();

import React from 'react';
import TestUtils from 'react-dom/test-utils';

import Excel from '../source/components/Excel';
import schema from '../source/schema';

let data = [{}];
schema.forEach(item => data[0][item.id] = item.sample);

describe('データ編集', () => {
  it('新規データを保存します', () => {
    const callback = jest.fn();
    const table = TestUtils.renderIntoDocument(
      <Excel
        schema={schema}
        initialData={data}
        onDataChange={callback} />
    );
    const newname = '2.99ドルのシャック';
    const cell = TestUtils.scryRenderedDOMComponentsWithTag(table, 'td')[0];
    TestUtils.Simulate.doubleClick(cell);
    cell.getElementsByTagName('input')[0].value = newname;
    TestUtils.Simulate.submit(cell.getElementsByTagName('form')[0]);
    expect(cell.textContent).toBe(newname);
    expect(callback.mock.calls[0][0][0].name).toBe(newname);
  });
  it('データを削除します', () => {
    const callback = jest.fn();
    const table = TestUtils.renderIntoDocument(
      <Excel
        schema={schema}
        initialData={data}
        onDataChange={callback} />
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(table, 'ActionsDelete')
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(table, 'Button')
    );
    expect(callback.mock.calls[0][0].length).toBe(0);
  });
});