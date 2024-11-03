import BookNow from "./BookNow";

function OurServices() {
  return (
    <>
      <div id="services" className=" bg-secondary py-6 px-6">
        <h1 className="text-primary text-center mb-5">Our Services</h1>

        <div className="flex flex-col gap-y-10">
          <div className="border border-border flex flex-col p-5 gap-y-4">
            <h2 className="text-primary"> 60 Minute Customizable Massage</h2>
            <h3 className="text-primary">
              Customize massage to meet your needs
            </h3>
            <hr className="opacity-30 border border-gray-500"></hr>
            <p className="text-primary">1 Hour - $80</p>
            <BookNow />
          </div>

          <div className="border border-border flex flex-col p-5 gap-y-4">
            <h2 className="text-primary"> 60 Minute Customizable Massage</h2>
            <h3 className="text-primary">
              Customize massage to meet your needs
            </h3>
            <hr className="opacity-30 border border-gray-500"></hr>
            <p className="text-primary">1 Hour - $80</p>
            <BookNow />
          </div>

          <div className="border border-border flex flex-col p-5 gap-y-4">
            <h2 className="text-primary"> 60 Minute Customizable Massage</h2>
            <h3 className="text-primary">
              Customize massage to meet your needs
            </h3>
            <hr className="opacity-30 border border-gray-500"></hr>
            <p className="text-primary">1 Hour - $80</p>
            <BookNow />
          </div>

          <div className="border border-border flex flex-col p-5 gap-y-4">
            <h2 className="text-primary"> 60 Minute Customizable Massage</h2>
            <h3 className="text-primary">
              Customize massage to meet your needs
            </h3>
            <hr className="opacity-30 border border-gray-500"></hr>
            <p className="text-primary">1 Hour - $80</p>
            <BookNow />
          </div>

          <div className="border border-border flex flex-col p-5 gap-y-4">
            <h2 className="text-primary"> 60 Minute Customizable Massage</h2>
            <h3 className="text-primary">
              Customize massage to meet your needs
            </h3>
            <hr className="opacity-30 border border-gray-500"></hr>
            <p className="text-primary">1 Hour - $80</p>
            <BookNow />
          </div>
        </div>

        <h2 className="text-center px-5 mt-3">
          Serving Eastern North Carolina
        </h2>
      </div>
    </>
  );
}

export default OurServices;
