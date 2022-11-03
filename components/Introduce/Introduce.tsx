import introduce from '/public/images/rsz_introduce.jpg';
import Image from 'next/image';

export default function Introduce() {
  return (
    <div className={'section-container relative min-h-screen overflow-hidden'}>
      <h2 className={'section-title'}>Positive Guy</h2>
      <h3 className={'section-indicator pt-4 text-right pb-8'}>Introduce</h3>
      <div className={'flex gap-4 justify-between'}>
        <div
          className={
            'max-w-[100px] min-w-[100px] sm:max-w-[150px] section--image__card'
          }
        >
          <div className={' m-auto section--image__background  '}>
            <Image
              src={introduce}
              alt={'Piotr Szczypka'}
              sizes="(max-width: 768px) 100px,
                          150px"
            />
          </div>
        </div>
        <div className={'max-w-[350px] space-y-8'}>
          <p>
            I come from Kasinka Mała, currently living in Kraków. I&apos;m
            imaginative person with a strong sense of humor. I put huge emphasis
            on self-development
          </p>
          <p>You will find my resume attached below.</p>
          <button
            className={'btn-primary btn-primary__before justify-self-end flex'}
          >
            <a href={'#about'}>Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
}
