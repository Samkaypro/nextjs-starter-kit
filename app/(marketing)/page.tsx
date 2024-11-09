import HeroLanding from "@/components/sections/hero-landing";
import PreviewLanding from "@/components/sections/preview-landing";
import Gettoknowus from "@/components/sections/get-to-know-us"
import Whyvendcliq from "@/components/sections/why-vendcliq"
import Testimonial from "@/components/sections/testimonials"

export default function IndexPage() {
  return (
    <>
      <HeroLanding /> 
      <PreviewLanding />
      <Gettoknowus />
      <Whyvendcliq />
      <Testimonial />
    </>
  );
}
