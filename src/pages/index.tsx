import { ReactElement } from "react";
import Navbar from "@/components/navbar/navbar";

export default function Home(): ReactElement {
  return (
    <div style={{ backgroundColor: "purple", padding: "250px 0px" }}>
      hello
      <div style={{ backgroundColor: "green" }}>
        <h1>Home</h1>
      </div>
    </div>
  );
}
