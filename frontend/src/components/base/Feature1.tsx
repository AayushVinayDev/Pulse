import React from "react";

export default function Feature1() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white md:px-20">
      <div className="flex items-center justify-center w-full max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 md:pl-10">
          <img
            src="/images/Feature1.svg"
            alt="Illustration"
            className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-8">
            Start chatting with your users instantly
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12">
            Create rooms with secured passcode and share with your customers 🌟
          </p>
        </div>
      </div>
    </section>
    // <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white">
    //   <div className="flex items-center justify-center w-full max-w-5xl mx-auto">
    //     <div className="w-1/2">
    //       <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
    //         Start chatting with your clients and users instantly
    //       </h1>
    //       <p className="text-xl text-gray-600 mb-8">
    //         Create rooms with secured passcode and share with your customers 🌟
    //       </p>
    //     </div>
    //     <div className="w-1/2">
    //       <img
    //         src="/images/Feature1.svg"
    //         alt="Illustration"
    //         className="w-full h-auto"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
