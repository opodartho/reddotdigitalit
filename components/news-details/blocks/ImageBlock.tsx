import { ImageBlock as ImageBlockType } from "@/lib/data/news-details/types";

export default function ImageBlock({ block }: { block: ImageBlockType }) {
  if (!block.imageUrl) return null;

  return (
    <div className="w-full flex flex-col gap-[24px]">
      {/* Image */}
      <div className="w-full">
        <div
          className="
            w-full
            aspect-[3/2]
            lg:max-w-[642px]
          "
        >
          <img
            src={block.imageUrl}
            alt={block.title ?? "News image"}
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>
      </div>

      {/* Description */}
      {block.description && (
        <p
          className="
            text-[14px]
            text-subtitle
            whitespace-pre-line
          "
        >
          {block.description}
        </p>
      )}
    </div>
  );
}
