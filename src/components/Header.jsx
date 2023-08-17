const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex gap-x-4 items-center">
        <a href="#home" className="font-bold text-xl mr-4">
          A
        </a>

        <a href="#works">Works</a>
        <a href="#posts">Posts</a>
      </div>

      <button className="flex flex-col gap-2">
        <div className="h-px bg-white w-8" />
        <div className="h-px bg-white w-8" />
      </button>
    </div>
  );
};

export default Header;
