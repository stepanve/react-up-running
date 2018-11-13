"use strict";

var data = void 0;

var schema = void 0;

var CRUDStore = {
  getData: function getData() {
    return data;
  },
  getSchema: function getSchema() {
    return schema;
  },
  getCount: function getCount() {
    return data.length;
  },
  getRecord: function getRecord(recordId) {
    return recordId in data ? data[recordId] : null;
  }
};