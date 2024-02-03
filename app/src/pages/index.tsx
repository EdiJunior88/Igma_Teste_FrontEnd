import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

import { AuthContext } from "@/context/AuthContext";
import { useAuth } from "@/providers/useAuth";

const Index = () => {
  const { user, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="font-plusjacarta">
        <Header />
        <div className="mx-auto pt-32 lg:mx-[34px] xl:mx-[72px]">
          <Section />
          <Footer />
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default Index;
