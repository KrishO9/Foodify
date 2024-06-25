/*const Shimmer = () => {
    return (<div className = "Shimmer-container">
       <div className = "Shimmer-card">Card1</div>
       <div className = "Shimmer-card">Card1</div>
       <div className = "Shimmer-card">Card1</div>
       </div>
      );
    };*/
// ShimmerCard.js

const ShimmerCard = ({ count = 10 }) => {
    return (
        <div className="shimmer-container">
            {Array.from({ length: count }).map((_, index) => (
                <div className="shimmer-card" key={index}>
                    <div className="shimmer-logo"></div>
                    <div className="shimmer-line shimmer-line-1"></div>
                    <div className="shimmer-line shimmer-line-2"></div>
                    <div className="shimmer-line shimmer-line-3"></div>
                    <div className="shimmer-line shimmer-line-4"></div>
                    <div className="shimmer-line shimmer-line-5"></div>
                </div>
            ))}
        </div>
    );
};

export default ShimmerCard;




   // export default Shimmer;