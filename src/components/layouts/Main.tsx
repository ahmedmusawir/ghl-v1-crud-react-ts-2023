import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Main({ children }: Props) {
  return (
    <main className="min-w-full flex flex-grow justify-center my-10">
      {children}
    </main>
  );
}

export default Main;
