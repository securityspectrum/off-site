import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="p-6 ">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Email</h2>
          <p>
            
            <label className="font-semibold text-gray-700">Email Address: </label>
            <a
              href="mailto:info@securityspectrum.io"
              className="text-blue-500 hover:underline"
            >
              info@securityspectrum.io
            </a>

          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Discord</h2>
          <p>
            <div className="">
              <a
                href="https://discord.com/channels/1079600793306546267/1138476118916218994"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Join our Discord #support
              </a>
            </div>
          </p>
        </div>
        {/* ... other services */}
      </section>
    </div>
  );
};

export default Contact;
