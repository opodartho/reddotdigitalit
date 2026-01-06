import { NewsMeta } from "@/lib/data/news-details/types";

type MetaDataProps = {
  meta: NewsMeta;
};

export default function MetaData({ meta }: MetaDataProps) {
  return (
    <>
      <div className="block flex-col lg:sticky lg:top-[120px] pt-[36px] sm:pt-[64px] lg:pl-[24px] lg:w-[197px]">

        {/* Date */}
        <div className="lg:flex lg:flex-col">
          <p className="font-semibold text-[16px]">Date</p>
          <p className="pt-[6px] text-[14px]">
            Last Update: {meta.date}
          </p>
        </div>

        {/* Authors */}
        {meta.authors && meta.authors.length > 0 && (
          <div className="lg:flex lg:flex-col pt-[44px]">
            <p className="font-semibold text-[16px]">Authors</p>
            <p className="pt-[6px] text-[14px]">
              Published by:{" "}
              {meta.authors.map((author, index) => (
                <span key={index}>
                  {author}
                  {index < meta.authors.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        )}

        {/* Tags */}
        {meta.tags && meta.tags.length > 0 && (
          <div className="lg:flex lg:flex-col pt-[44px]">
            <p className="font-semibold text-[16px]">Tags</p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-[12px] pt-[14px] text-[14px]">
              {meta.tags.map((tag, index) => (
                <div key={index}>
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Share */}
        {meta.share && meta.share.length > 0 && (
          <div className="flex flex-col pt-[44px]">
            <p className="font-semibold text-[16px]">Share</p>
            <div className="pt-[14px] flex flex-row items-center gap-[12px] lg:pt-[6px] text-[14px]">
              {meta.share.map((icon, index) => (
                <div key={index}>
                  <img src={icon} alt="share icon" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
