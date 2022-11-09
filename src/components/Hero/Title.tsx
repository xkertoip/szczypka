export default function Title() {
  return (
    <>
      <h3 className={'section-indicator pt-4 text-right'}>
        N&#176;1&nbsp;Hello
      </h3>
      <h1 className={'title-big text-right'}>
        <span
          className={
            'text-indigo-400 text-8xl sm:text-[10rem] hover:bg-red-400 duration-700'
          }
        >
          P
        </span>
        <span className={'relative -left-4 hover:bg-indigo-400 duration-700 '}>
          iotr
        </span>
      </h1>
      <h1 className={'title-big text-right whitespace-nowrap '}>
        <span className={'letter-animate__odd'}>S</span>
        <span className={'letter-animate__even'}>z</span>
        <span className={'letter-animate__odd'}>c</span>
        <span className={'letter-animate__even'}>z</span>
        <span className={'letter-animate__odd'}>y</span>
        <span className={'letter-animate__even'}>p</span>
        <span className={'letter-animate__odd'}>k</span>
        <span className={'letter-animate__even'}>a</span>
      </h1>
    </>
  );
}
