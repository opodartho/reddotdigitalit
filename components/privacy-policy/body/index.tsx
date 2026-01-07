import { PrivacyPolicy } from "@/lib/data/privacy-policy/privacy-policy";

type PrivacyPolicyProps = {
  privacyData: PrivacyPolicy[];
};

export default function PrivacyPolicyComponent({ privacyData }: PrivacyPolicyProps) {
  return (
    <div className="lg:pt-[67px] pt-[21px] px-[16px] sm:px-[80px] max-w-[1440px] mx-auto">
      {privacyData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-[40px]">
          {/* Heading */}
          <p className="lg:text-[20px] text-[25px] font-semibold mb-[16px] text-title">
            {section.heading}
          </p>

          {/* Description */}
          {section.description && (
            <p className="text-[16px] leading-[22px] mb-[20px] whitespace-pre-line text-subtitle">
              {section.description}
            </p>
          )}

          {/* Subdescription */}
          {section.subdescription && (
            <p className="text-[16px] leading-[22px] mb-[16px] text-subtitle">
              {section.subdescription}
            </p>
          )}

          {/* Subheadings with Subpoints */}
          {section.subheading && section.subpoints && (
            <div className="space-y-[24px]">
              {section.subheading.map((subhead, subIndex) => (
                <div key={subIndex}>
                  <h3 className="text-[16px] font-bold mb-[12px]">
                    {subhead}
                  </h3>
                  {section.subpoints && section.subpoints[subIndex] && (
                    <ul className="list-disc pl-[24px] space-y-[8px]">
                      {section.subpoints[subIndex].map((point, pointIndex) => (
                        <li key={pointIndex} className="text-[14px] leading-[22px]">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Subpoints without Subheadings */}
          {!section.subheading && section.subpoints && section.subpoints[0] && (
            <ul className="list-disc pl-[24px] space-y-[8px]">
              {section.subpoints[0].map((point, pointIndex) => (
                <li key={pointIndex} className="text-[16px] leading-[22px]">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}