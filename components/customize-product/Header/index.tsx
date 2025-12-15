import WhiteButton from "@/components/buttons/WhiteHoverButton";
import { HeaderItem } from "@/lib/data/header";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type HeaderProps = {
  headerData: HeaderItem[];
  Id: String;
};

export default function Header({ headerData, Id }: HeaderProps) {
  const indexNumber = Number(Id);

  return (
    <section
      className="relative w-full bg-[#F6F5FA] pt-[100px] lg:pt-[160px]"

    >
      {/* 🔹 Content Wrapper */}
   <div className=" px-[16px] sm:px-[80px] flex flex-col lg:flex-row lg:justify-between lg:items-start pb:[64px] lg:pb-[60px] max-w-[1440px] mx-auto">
        
        {/* ================= LEFT CONTENT ================= */}
         <div className="order-2 lg:order-1 lg:max-w-[630px] flex flex-col justify-start ">
          
          {/* 🔹 Breadcrumbs */}
          {headerData[indexNumber]?.breadcrumbs && (
            <div className="flex flex-wrap gap-2">
              {headerData[indexNumber].breadcrumbs.map((item) => (
                <div
                  key={item}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    h-[26px]
                    px-[14px]
                    bg-white
                    border border-[#ECF1FE]
                    rounded-[17px]
                    shadow-[0_12px_48px_rgba(49,1,139,0.05)]
                    mb-[24px] lg:mb-[14px]
                  "
                >
                  <span
                    className="
                      font-poppins
                      text-subtitle
                      text-[14px]
                      leading-[21px]
                      tracking-[0.032px]
                      font-normal
                      whitespace-nowrap
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 🔹 Title */}
              <h1 className="text-[#060414] font-poppins font-semibold text-[30px] leading-[45px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[48px] mb-[40px] lg:mb-[20px]">
            {headerData[indexNumber]?.title || ""}
          </h1>

          {/* 🔹 Description */}
        <p className="font-poppins font-normal text-[#121926] text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[26px] lg:leading-[30px] lg:max-w-[630px] xl:min-h-[90px] mb-[40px] lg:mb-[48px]">
            {headerData[indexNumber]?.description || ""}
          </p>

          {/* 🔹 CTA */}
          <WhiteButton className="w-full sm:w-[195px] h-[56px] text-[16px] leading-[24px] mb-[80px] lg:mb-0">
            Schedule a Call
          </WhiteButton>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
       <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:items-start mb-[51px] lg:mb-0 lg:-mt-[6px]">
          <div className="relative z-1">
            <CardContainer className="lg:w-[600px] w-[327px] mx-auto">
              <CardBody className="relative lg:w-[600px] w-[327px] overflow-visible [transform-style:preserve-3d]">
                <CardItem
                  translateZ={50}
                  className="lg:w-[585px] w-[310px] flex items-center justify-center"
                >
                  <img
                    src={headerData[indexNumber]?.imageUrl || "/images/default.svg"}
                    alt={headerData[indexNumber]?.title || ""}
                    className="lg:w-[385px] w-full object-contain"
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
