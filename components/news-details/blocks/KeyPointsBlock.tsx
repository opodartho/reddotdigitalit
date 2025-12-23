import { KeyPointsBlock as KeyPointsBlockType } from "@/lib/data/news-details/types";

export default function KeyPointsBlock({
  block,
}: {
  block: KeyPointsBlockType;
}) {
  if (!block.points || block.points.length === 0) return null;

  return (
    <div className="border border-[#FFB8B8] bg-[#fffafa] rounded-xl p-[24px]">
      {block.title && (
        <p className="text-[24px] font-bold text-title pb-[20px]">
          {block.title}
        </p>
      )}

      <div className="flex flex-col gap-[12px]">
        {block.points.map((point, index) => (
          <div key={index} className="flex gap-[12px]">
            <img src="/images/redtick.svg" alt="tick" />
            <p className="text-[14px] text-subtitle">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
