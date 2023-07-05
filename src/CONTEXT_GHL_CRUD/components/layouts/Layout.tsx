import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <section className="flex flex-col min-h-screen">
      {children ? children : "This is a Layout container. Must have children"}
    </section>
  );
}

export default Layout;
