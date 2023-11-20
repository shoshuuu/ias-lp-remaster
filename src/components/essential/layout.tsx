import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
