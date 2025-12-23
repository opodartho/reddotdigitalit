// Block types the CMS can send
export type NewsBlockType =
  | "text"
  | "image"
  | "textImage"
  | "keyPoints"
  | "gallery";

// Base block (all blocks share this)
export type BaseNewsBlock = {
  id: string;
  type: NewsBlockType;

  // Optional common fields
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
};

// Specific blocks
export type TextBlock = BaseNewsBlock & {
  type: "text";
};

export type ImageBlock = BaseNewsBlock & {
  type: "image";
};

export type TextImageBlock = BaseNewsBlock & {
  type: "textImage";
};

export type KeyPointsBlock = BaseNewsBlock & {
  type: "keyPoints";
  points?: string[];
};

export type GalleryBlock = BaseNewsBlock & {
  type: "gallery";
  images: string[];
};

// Union of all blocks
export type NewsBlock =
  | TextBlock
  | ImageBlock
  | TextImageBlock
  | KeyPointsBlock
  | GalleryBlock;

// News metadata
export type NewsMeta = {
  date: string;
  authors: string[];
  tags?: string[];
  share?: string[];
};

// Full news details item
export type NewsDetailsItem = {
  id: number;
  slug: string;
  title: string;
  heroImage: string;
  meta: NewsMeta;
  blocks: NewsBlock[];
};
