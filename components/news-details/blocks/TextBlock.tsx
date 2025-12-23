import { TextBlock as TextBlockType } from "@/lib/data/news-details/types";

export default function TextBlock({ block }: { block: TextBlockType }) {
  return (
    <div>
      {block.title && (
        <p className="text-[24px] font-bold text-title">{block.title}</p>
      )}

      {block.subtitle && (
        <p className="text-[18px] pt-[8px] text-title">{block.subtitle}</p>
      )}

      {block.description && (
        <p className="text-[14px] pt-[14px] text-subtitle whitespace-pre-line">
          {block.description}
        </p>
      )}
    </div>
  );
}
