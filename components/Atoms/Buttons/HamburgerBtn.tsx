import { Dispatch, SetStateAction } from 'react';

const HamburgerBtn = (props: {
  setShowSideNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => {
        props.setShowSideNav(true);
      }}
      className="flex flex-col pr-6 hamburger md:hidden"
    >
      <div
        className="w-[40px] h-[2px] bg-black mb-2
          dark:bg-white"
      />
      <div className="w-[40px] h-[2px] bg-black mb-2 dark:bg-white" />
      <div className="w-[40px] h-[2px] bg-black dark:bg-white" />
    </button>
  );
};

export default HamburgerBtn;
