jest.unmock('../js/product');
jest.unmock('./helpers');

import Product from "../js/product";
import helpers from "./helpers"

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

describe('Product', () => {
  var productComponent;
  beforeEach(() => {
    productComponent = TestUtils.renderIntoDocument(
      <Product name="New Balance 420" price="49" />
    );
  });

  it('renders name of product', () => {
    expect(helpers.componentWithClass(productComponent, "name").textContent)
      .toEqual("New Balance 420");
  });

  it('renders price of product', () => {
    expect(helpers.componentWithClass(productComponent, "price").textContent)
      .toEqual("$49");
  });
});
