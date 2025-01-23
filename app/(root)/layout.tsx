import { ChildProps } from "@/types";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

function Layout({ children }: ChildProps) {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      <div className="container">{children}</div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Layout;