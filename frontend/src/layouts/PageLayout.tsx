import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useOutletContext } from "react-router-dom";

type BannerContext = {
  bannerTitle: string;
  bannerImage?: string;
};

export function useBannerContext() {
  return useOutletContext<BannerContext>();
}

const PageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Outlet context={{ bannerTitle: "Default Title" }} />
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
