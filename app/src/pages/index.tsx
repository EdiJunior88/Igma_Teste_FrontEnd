import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div className="font-plusjacarta">
      <Header />
      <div className="mx-auto xl:mx-[72px]">
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default index;
