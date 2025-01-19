const Loading = () => {
  console.log("Loading");

  return (
    <div className="my-6 flex flex-col gap-2">
      <div className="h-[30px] w-full animate-pulse rounded-md bg-white"></div>
      <div className="h-[30px] w-full animate-pulse rounded-md bg-white"></div>
      <div className="h-[30px] w-full animate-pulse rounded-md bg-white"></div>
    </div>
  );
};

export default Loading;
