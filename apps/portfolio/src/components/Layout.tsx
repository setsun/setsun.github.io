import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>setsun.xyz</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌅</text></svg>"
      />
    </Head>

    <div className="flex h-screen overflow-hidden">
      <Navigation />

      <div className="relative w-full overflow-y-auto">
        <main style={{ minHeight: "calc(100vh - 5rem)" }}>
          {props.children}
        </main>

        <Footer />
      </div>
    </div>
  </>
);

export default Layout;
