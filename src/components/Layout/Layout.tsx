import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div >
        <div className="content">{children}</div>

      </div>
    </div>
  );
}

export default Layout;
