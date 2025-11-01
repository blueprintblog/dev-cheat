import LinksOnGitBuyMyCoffe from './LinksOnGitBuyMyCoffe';

export default function CardTitle({ title, subtitle, icon }) {
  return (
    <>
      <div className="card-title">
        <span className="text-white text-[30px] md:text-[48px] mb-3 inline-flex items-center">
          {icon}
          {title}
        </span>
        <p className="text-white text-base md:text-[20px] opacity-90 mb-5">
          {subtitle}
        </p>
        <LinksOnGitBuyMyCoffe />
      </div>
    </>
  );
}
