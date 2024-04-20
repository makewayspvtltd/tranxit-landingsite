import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
