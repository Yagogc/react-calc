import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import "styled-components-test-utils/lib/jest";

configure({ adapter: new Adapter() });
