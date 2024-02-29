import Header from "../Header";
import { render } from "@testing-library/react";

test("Logo should be there on rendering header", () => {
  const header = render(<Header />);
  console.log(header);
});
