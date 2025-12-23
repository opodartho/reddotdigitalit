import { GalleryBlock as GalleryBlockType } from "@/lib/data/news-details/types";

export default function GalleryBlock({
  block,
}: {
  block: GalleryBlockType;
}) {
  if (!block.images || block.images.length === 0) return null;

  const totalImages = block.images.length;
  const isCompact = totalImages <= 8;

  const baseCols = 2;
  const smCols = totalImages >= 5 ? 3 : 2;
  const lgCols = totalImages >= 9 ? 4 : totalImages >= 5 ? 3 : 2;

  const gridColsClass =
    totalImages >= 9
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : totalImages >= 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
      : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-2";

  const getFillSpan = (cols: number) => {
    const remainder = totalImages % cols;
    if (remainder === 0) return 1;
    return cols - (remainder - 1);
  };

  const getColSpanClass = (
    span: number,
    prefix?: "sm" | "lg"
  ) => {
    if (prefix === "sm") {
      if (span === 2) return "sm:col-span-2";
      if (span === 3) return "sm:col-span-3";
      if (span === 4) return "sm:col-span-4";
      return "sm:col-span-1";
    }

    if (prefix === "lg") {
      if (span === 2) return "lg:col-span-2";
      if (span === 3) return "lg:col-span-3";
      if (span === 4) return "lg:col-span-4";
      return "lg:col-span-1";
    }

    if (span === 2) return "col-span-2";
    if (span === 3) return "col-span-3";
    if (span === 4) return "col-span-4";
    return "col-span-1";
  };

  const baseLastSpan = getFillSpan(baseCols);
  const smLastSpan = getFillSpan(smCols);
  const lgLastSpan = getFillSpan(lgCols);

  return (
    <div>
      {block.title && (
        <p className="text-[24px] font-semibold text-title text-center mb-[24px]">
          {block.title}
        </p>
      )}

      <div
        className={`
          grid
          ${gridColsClass}
          auto-rows-[140px]
          sm:auto-rows-[180px]
          lg:auto-rows-[240px]
          gap-[12px]
          sm:gap-[16px]
          grid-flow-dense
        `}
      >
        {block.images.map((img, index) => {
          const lastIndex = totalImages - 1;
          let spanClass = "col-span-1 row-span-1";

          /* =========================
             1️⃣ SINGLE IMAGE (HERO)
          ========================== */
          if (totalImages === 1) {
            spanClass =
              "col-span-2 sm:col-span-2 lg:col-span-2 row-span-3";
          }

          /* =========================
             2️⃣ TWO IMAGES (BALANCED)
          ========================== */
          else if (totalImages === 2) {
            spanClass = "col-span-1 row-span-2";
          }

          /* =========================
             3️⃣ COMPACT MODE (≤ 8)
          ========================== */
          else if (isCompact) {
            if (index === lastIndex) {
              spanClass = [
                getColSpanClass(baseLastSpan),
                getColSpanClass(smLastSpan, "sm"),
                getColSpanClass(lgLastSpan, "lg"),
              ].join(" ");
            }
          }

          /* =========================
             4️⃣ LARGE MODE (9+)
          ========================== */
          else {
            if (index < 6) {
              const bentoClasses = [
                "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2",
                "col-span-1 row-span-1",
                "col-span-1 row-span-2 sm:row-span-2",
                "col-span-2 row-span-1 sm:col-span-2 sm:row-span-1 lg:col-span-2",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
              ];
              spanClass = bentoClasses[index];
            } else {
              spanClass = "col-span-1 row-span-1";
            }
          }

          return (
            <div
              key={index}
              className={`relative w-full h-full overflow-hidden rounded-[14px] ${spanClass}`}
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
