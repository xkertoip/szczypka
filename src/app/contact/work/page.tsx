import Mail from '../../../components/Mail';

export default function Work() {
  return (
    <>
      <div className={'sm:grid sm:gap-16 sm:grid-cols-2 pb-16'}>
        <p className={'text-neutral text-left pb-8 sm:pb-16'}>
          Can you tell me something more about your proposition?
        </p>
        <Mail />
      </div>
    </>
  );
}
