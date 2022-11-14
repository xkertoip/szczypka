import Mail from '../../../components/Mail';

export default function Work() {
  return (
    <>
      <div className={'sm:flex sm:gap-16'}>
        <p className={'text-neutral py-4 text-left'}>
          Can you tell me something more about your proposition?
        </p>
        <Mail />
      </div>
    </>
  );
}
