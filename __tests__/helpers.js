import TestUtils from "react-addons-test-utils";

function componentWithClass(component, clazz) {
  return TestUtils.findRenderedDOMComponentWithClass(component, clazz);
};

export default { componentWithClass };
