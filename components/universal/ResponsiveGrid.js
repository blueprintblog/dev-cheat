'use client';

const ResponsiveGrid = ({
  children,
  className = '',
  columns = { mobile: 1, tablet: 2, desktop: 3, large: 4 },
}) => {
  const gridClasses = `
    grid 
    gap-4 
    grid-cols-${columns.mobile} 
    md:grid-cols-${columns.tablet} 
    lg:grid-cols-${columns.desktop} 
    xl:grid-cols-${columns.large}
    ${className}
  `;

  return <div className={gridClasses}>{children}</div>;
};

export default ResponsiveGrid;
