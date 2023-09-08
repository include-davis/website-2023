import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div style={{ backgroundColor: "purple", padding: "1000px 0px" }}>
      hello
      <div style={{ backgroundColor: "green" }}>
        <h1>Home</h1>
      </div>
    </div>
  );
}
