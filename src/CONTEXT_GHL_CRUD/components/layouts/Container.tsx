import { useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  pageTitle: string;
  FULL: boolean;
}

function Container({ children, pageTitle, className, FULL }: Props) {
  // Setting up mandatory Container Title in the browser
  useEffect(() => {
    document.title = `${pageTitle} | Tailwind `;
  }, [pageTitle]);

  return (
    <>
      {FULL && (
        <section
          className={`min-h-full min-w-full ${className}`}
          // className={`border-solid border-2 min-h-full min-w-full ${className}`}
        >
          {children
            ? children
            : "This is a Container container. Must have children"}
        </section>
      )}
      {!FULL && (
        <section
          className={`min-h-full w-11/12 xl:w-4/5 ${className} mx-auto mt-5`}
          // className={`border-solid border-2 min-h-full w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-4/5 ${className}`}
        >
          {children
            ? children
            : "This is a Container container. Must have children"}
        </section>
      )}
      {/* LG: 1024+ IS SET TO 91% WIDTH (w-11/12) */}
      {/* XL: 1280+ IS SET TO 80% WIDTH (w-4/5) */}
    </>
  );
}

export default Container;
