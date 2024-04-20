import React from "react";

function MenuIcon({ className }: { className: string }) {
  return (
    <div>
      <svg
        className={className}
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="60" height="60" rx="30" fill="#F9F9F9" />
        <rect x="19" y="33" width="17" height="2" fill="#161519" />
        <rect x="19" y="25" width="22" height="2" fill="#161519" />
      </svg>
    </div>
  );
}

export default MenuIcon;
