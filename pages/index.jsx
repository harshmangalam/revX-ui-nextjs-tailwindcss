import Navbar from "../components/Navbar";

function Index() {
  return (
    <div>
      <header className="bg-gradient-to-t from-[#1A1A1A] to-[#000000] min-h-screen">
        <Navbar />

        <section className="mt-12 flex flex-col  md:items-center px-6 md:px-0">
          <h4 className=" text-2xl md:text-4xl text-white">
            <span className="text-red-500">EX</span> change your future
          </h4>
          <h4 className=" text-2xl md:text-4xl text-white">
            <span className="text-red-500">REV</span> enue with upfront Cash
          </h4>
        </section>

        <section className="mt-12 flex flex-col  md:items-center space-y-2 px-6 md:px-0">
          <h4 className="text-3xl text-white font-bold">Grow your Business,</h4>
          <h4 className="text-3xl  font-bold text-gray-600">Your Way</h4>
        </section>

        <section className="mt-12 flex  flex-col-reverse md:flex-col space-y-4 px-6 md:px-0 items-baseline md:items-center">
          <button className="bg-[#2C73FD] text-white font-bold px-6 py-2 rounded text-lg">
            Get Funded
          </button>
          <p className="text-white">Takes 3 mins to apply</p>
        </section>

        <section className="flex justify-center mt-12 px-6 md:px-0">
          <div className="max-w-3xl">
            <img src="/image10.png" alt="Image" className="w-full" />
          </div>
        </section>
      </header>

      <section className="bg-[#E5E5E5]">
        <div className="flex md:flex-row space-x-6 flex-col-reverse max-w-5xl mx-auto pt-12">
          <div className="max-w-xs flex-none">
            <img src="/image1270.png" alt="Image" className="w-full" />
          </div>

          <div className="flex flex-col space-y-6 px-6 md:px-0">
            <h5 className="font-bold text-4xl text-[#2C73FD]">
              Funds that grow you and grow with you,
            </h5>
            <p className="text-lg text-gray-500">
              Our Products are ‘more flexible’ than bank debt and ‘less
              expensive’ than venture capital. These offerings, ranging from $5K
              to $50M, are highly customized for your unique business needs and
              can be paid back through Revenue Share Agreement and a flat fee as
              low as 3%. So, Grow your company with ZERO debt and ZERO Ownership
              loss.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#2C67FF] to-[#2CFFD9] pt-12 px-6">
        <h3 className="text-center font-bold text-white text-4xl">
          How it works
        </h3>

        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6 mt-12">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center space-x-4 md:justify-between">
            <div className="w-80">
              <img src="/image1252.png" alt="Image" className="w-full" />
            </div>
            <div className="flex flex-col space-y-4 mt-6 md:mt-0">
              <h6 className="text-white font-bold text-2xl">Share your Data</h6>
              <p className="text-lg text-white max-w-xl">
                To get started Fund Me, share your business data from the Bank,
                Financial Statements, and Billings/ Subscriptions so that we can
                get you the best deal for your business
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center space-y-4 md:flex-row md:items-center space-x-4 justify-between">
            <div className="flex flex-col space-y-4 mt-6 md:mt-0">
              <h6 className="text-white font-bold text-2xl ">
                Select a Funding Offer
              </h6>
              <p className="text-lg text-white max-w-xl">
                Once you share the data, we will reach out to you with a funding
                option that best suits your needs. All our funding options are
                uniquely customized for your business.
              </p>
            </div>

            <div className="w-80">
              <img src="/image1251.png" alt="Image" className="w-full" />
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:items-center space-x-4 justify-between">
            <div className="w-80">
              <img src="/image1253.png" alt="Image" className="w-full" />
            </div>
            <div className="flex flex-col space-y-4 mt-6 md:mt-0">
              <h6 className="text-white font-bold text-2xl">
                Turbocharge your growth
              </h6>
              <p className="text-lg text-white max-w-xl">
                Use these funds to grow your business while retaining ownership
                and pay back in small installments customized for your
                situation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
