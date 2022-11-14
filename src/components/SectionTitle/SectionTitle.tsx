type Props = {
  title: string;
  indicator: string;
  indicatorNumber: number;
  align: 'right' | 'left' | 'center';
};

export default function SectionTitle({
  title,
  indicator,
  indicatorNumber,
  align
}: Props) {
  return (
    <>
      <h2 className={`section-title text-${align}`}>{title}</h2>
      <h3 className={`section-indicator pt-4 text-${align} `}>
        N&#176;{indicatorNumber}&nbsp;{indicator}
      </h3>
    </>
  );
}
