import SocialMedia from '../Hero/SocialMedia';

export default function Footer() {
  return (
    <footer>
      <div className={'section-container pb-4'}>
        <div
          className={'p-4 border-t border-indigo-400 flex justify-start gap-4'}
        >
          <SocialMedia />
        </div>

        <div
          className={'py-4 text-right text-primaryDark dark:text-primaryLight'}
        >
          <span>© 2022 - All rights reserved </span>
          <br />
          <span>Made by Piotr Szczypka</span>
        </div>
      </div>
    </footer>
  );
}
