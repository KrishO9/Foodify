const ShimmerCard = ({ count = 10 }) => {
  return (
    <div className="pt-6 flex flex-wrap gap-5">
      {Array.from({ length: count }).map((_, index) => (
        <div
          className="p-6 w-52 break-words border border-gray-200 rounded-md bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:800px_104px] flex flex-col items-center animate-shimmer"
          key={index}
        >
          <div className="w-48 h-40 rounded-md bg-gray-300 mb-2.5"></div>
          <div className="w-full h-4 rounded-md bg-gray-300 my-2"></div>
          <div className="w-7/12 h-4 rounded-md bg-gray-300 my-2"></div>
          <div className="w-6/12 h-4 rounded-md bg-gray-300 my-2"></div>
          <div className="w-5/12 h-4 rounded-md bg-gray-300 my-2"></div>
          <div className="w-4/12 h-4 rounded-md bg-gray-300 my-2"></div>
          <div className="w-3/12 h-4 rounded-md bg-gray-300 my-2"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;

// export default Shimmer;
