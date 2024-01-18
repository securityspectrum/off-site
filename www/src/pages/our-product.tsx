import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="p-6 ">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Product</h1>
        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">The SIEM Platform</h2>
          <p>Our SIEM Platform is unique because it can encrypt sensitive private information before it leaves cusomters network.</p>
          <p></p>
        </div>
        {/* ... other services */}
      </section>
    </div>
  );
};

export default Services;