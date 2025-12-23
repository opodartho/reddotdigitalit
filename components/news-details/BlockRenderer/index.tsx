import { NewsBlock } from "@/lib/data/news-details/types";
import TextBlock from "../blocks/TextBlock";
import ImageBlock from "../blocks/ImageBlock";
import KeyPointsBlock from "../blocks/KeyPointsBlock";
import GalleryBlock from "../blocks/GalleryBlock";
import TextImageBlock from "../blocks/TextImageBlock";

type Props = {
  blocks: NewsBlock[];
};

export default function BlockRenderer({ blocks }: Props) {
  return (
    <div className="pt-[64px] flex flex-col gap-[48px]">
      {blocks.map((block) => {
        switch (block.type) {
          case "text":
            return <TextBlock key={block.id} block={block} />;
          case "image":
            return <ImageBlock key={block.id} block={block} />;
          case "textImage":
            return <TextImageBlock key={block.id} block={block} />;
          case "keyPoints":
            return <KeyPointsBlock key={block.id} block={block} />;
          case "gallery":
            return <GalleryBlock key={block.id} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
