const SectionHeading = ({ heading, subheading, shortdesc }) => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold text-color-orange leading-none mb-5">
        {heading}
      </h3>
      <h1 className="text-4xl font-bold text-color-dark-1 mb-5">
        {subheading}
      </h1>
      <p className="text-base text-color-dark-3 w-2/3 mx-auto mb-5">
        {shortdesc}
      </p>
    </div>
  );
};

export default SectionHeading;
