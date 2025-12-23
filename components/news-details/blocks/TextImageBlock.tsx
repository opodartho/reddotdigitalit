import { TextImageBlock as TextImageBlockType } from "@/lib/data/news-details/types";

export default function TextImageBlock({
  block,
}: {
  block: TextImageBlockType;
}) {
  return (
    <div className="flex flex-col gap-[24px]">
      {block.title && (
        <p className="text-[24px] font-semibold text-title">
          {block.title}
        </p>
      )}

      {block.description && (
        <p className="text-[14px] text-subtitle">{block.description}</p>
      )}

      {block.imageUrl && (
        <img
          src={block.imageUrl}
          alt={block.title ?? "News image"}
          className="w-full rounded-[16px] object-cover"
        />
      )}
    </div>
  );
}
