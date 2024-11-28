import { useTitle } from "../../hooks/useTitle";
import { Hero, FeaturedProducts, Testimonials, Faq } from "./components";
export const Home = () => {
  useTitle("welcome ")
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
