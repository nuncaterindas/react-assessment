
  
  const Container = ({ children }) => {
  
    return (
        <div className="bg-primary-red min-h-screen font-body w-full">
            <div className="flex gap-10 flex-col lg:flex-row align-center lg:absolute inset-0 bg-no-repeat bg-center bg-cover md:p-32 bg-intro-mobile md:bg-intro-desktop">
             {children} 
            </div>
        </div>
    );
  };
  
  export default Container;
  