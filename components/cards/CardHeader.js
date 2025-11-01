export default function CardHeader({
  title,
  children,
  description_1,
  description_2,
  description_3,
}) {
  return (
    <div className="intro">
      <span className="mb-5 inline-block">{title}</span>
      <div className="intro-grid">
        <div className="intro-box">
          <h3 className="text-[#2ecc71] text-base md:text-[18px] mb-3">
            📖 Definição
          </h3>
          <p>{description_1}</p>
        </div>
        <div className="intro-box">
          <h3 className="text-[#2ecc71] text-base mb-3">
            💪 Por que aprender?
          </h3>
          <p>{description_2}</p>
        </div>
        <div className="intro-box">
          <h3 className="text-[#2ecc71] text-base mb-3">
            🚀 O que você pode fazer?
          </h3>
          <p>{description_3}</p>
        </div>
      </div>
      <div className="where-use">{children}</div>
    </div>
  );
}
