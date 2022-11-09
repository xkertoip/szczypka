import Card from './Card';

type Props = {
  frameworks: any[];
  image: any;
  name: string;
  handler: (value: number) => void;
  currentNumber: number;
  uniqueNumber: number;
};

export default function Picker({
  image,
  uniqueNumber,
  name,
  currentNumber,
  frameworks,
  handler
}: Props) {
  return (
    <>
      <div
        className={
          'flex flex-wrap justify-center  gap-4 z-2 relative  relative py-16'
        }
      >
        {frameworks.map(({ image, uniqueNumber, name }) => (
          <Card
            uniqueNumber={uniqueNumber}
            image={image}
            name={name}
            handler={handler}
            currentNumber={currentNumber}
            key={uniqueNumber}
          />
        ))}
      </div>
    </>
  );
}
