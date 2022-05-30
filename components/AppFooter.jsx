import React from "react";
import Image from "next/image";

const AppFooter = () => {
  return (
    <footer className="py-5 px-3 text-sm text-dark border-t border-gray-700 flex justify-between items-center">
      <span>
        Copyright &#169;{new Date().getFullYear()} yewyewXD. All right reserved.
      </span>

      <div>
        <a className="hoverOpacity">
          <Image
            src="/images/social-linkedin.png"
            alt=""
            height={20}
            width={20}
          />
        </a>

        <a className="ml-2 hoverOpacity">
          <Image
            src="/images/social-github.png"
            alt=""
            height={20}
            width={20}
          />
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;
