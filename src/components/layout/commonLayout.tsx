import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="grow-1">{children}</div>
        <Footer></Footer>
      </div>
    </div>
  );
}
