import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <meta name="viewport" content={"width=1200"} />

      <div className="content">{children}</div>
      <style jsx>{`
        .content {
          padding-top: 70px; // Adjust this value according to the height of your navbar
        }
      `}</style>
    </div>
  );
}

export default Layout;
