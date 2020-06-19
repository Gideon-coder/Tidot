// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import Enzyme from "enzyme";
import axios from "./__mockData__/testApi";
import Adapter from "enzyme-adapter-react-16";
import MockAdapter from "axios-mock-adapter";
import LocalStorage from "./__mockData__/localStorage";

jest.mock("../_helpers/endpoint.js", () => {
  return jest.fn(() => "Endpoint is called");
});

Enzyme.configure({ adapter: new Adapter() });

const mock = new MockAdapter(axios);

const JSON = {
  parse: jest.fn((x) => x),
  stringify: jest.fn((x) => x),
};

const Modal = {
  setAppElement: () => jest.fn(),
};

// global.adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhZjA0MTU5LTlhOTMtNGIxNS1hNzQ5LWU3OWU2ODBhM2RhYSIsImFkbWluIjp0cnVlfQ.0B2gRAfKuJM2QQjogVW2nZrynpg0J2qMj-P6xgmL4Eo';
// global.customerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczMGU3ZGU5LTlmZjgtNGRjNS1iYzBiLWM3MTRmNTFlYTIyYSIsImFkbWluIjpmYWxzZX0.JLoM-PsdBlsEHm-pMcFiSm00Hc-vjcGsTonWgM3jETA';
global.localStorage = new LocalStorage();
global.toast = jest.fn();
global.JSON = JSON;
global.Modal = Modal;
global.mock = mock;
