type Props = {
  title: string;
  heroImage: string;
};

export default function Header({ title, heroImage }: Props) {
  return (
    <div className="pt-[100px] lg:pt-[150px]">
      <div className="inline-flex items-center px-3 py-[2px] border rounded-[17px] bg-white shadow-sm mb-[16px]">
        <span className="text-[14px]">News</span>
      </div>

      <p className="text-[30px] lg:text-[40px] font-bold text-title mb-[36px]">
        {title}
      </p>

<img
  src={heroImage}
  alt={title}
  className="
    block
    mx-auto
    h-[246px] sm:h-[360px] lg:h-[540px]
    rounded-[16px]
    sm:object-contain
    object-cover
    overflow-hidden
  "
/>

    </div>
  );
}
