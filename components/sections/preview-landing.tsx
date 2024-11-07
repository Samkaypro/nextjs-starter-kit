import darkPreview from "@/public/_static/images/dark-preview.jpg";
import lightPreview from "@/public/_static/images/light-preview.jpg";

import BlurImage from "@/components/shared/blur-image";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-20">
      <MaxWidthWrapper>
        <div className="md:bg-muted/30 md:ring-border h-auto rounded-xl md:p-3.5 md:ring-1 md:ring-inset">
          <div className="relative overflow-hidden rounded-xl border md:rounded-lg">
            <BlurImage
              src={lightPreview}
              alt="ligth preview landing"
              className="flex size-full object-contain object-center dark:hidden"
              width={1500}
              height={750}
              priority
              placeholder="blur"
            />
            <BlurImage
              src={darkPreview}
              alt="dark preview landing"
              className="hidden size-full object-contain object-center dark:flex"
              width={1500}
              height={750}
              priority
              placeholder="blur"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
