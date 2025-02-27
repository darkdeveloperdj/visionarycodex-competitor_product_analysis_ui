import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function FrontendLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
