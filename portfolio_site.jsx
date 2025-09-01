import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-8 text-center shadow-md">
        <h1 className="text-4xl font-bold">Sanjay T</h1>
        <p className="text-lg mt-2">Technical Solutions Engineer | Integrations & Troubleshooting</p>
      </header>

      {/* About Me */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Technical Solutions Engineer with 6+ years of experience helping global clients integrate,
          troubleshoot, and optimize SaaS and AdTech platforms. Skilled in API integrations, SDK debugging,
          and product adoption, with a proven record of 97%+ customer satisfaction and 100% SLA compliance.
        </p>
      </section>

      {/* Experience */}
      <section className="bg-white py-12 px-6 shadow-inner">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Experience Highlights</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-bold">Criteo – Senior Technical Solutions Engineer</h3>
              <p>100% SLA compliance, 97% CSAT, 30+ client onboardings, Deep Divers program lead.</p>
            </li>
            <li>
              <h3 className="font-bold">AppsFlyer – Technical Support Engineer</h3>
              <p>200+ client escalations resolved, 87% CSAT, 50+ integrations supported, API expertise (OneLinks, Cost APIs).</p>
            </li>
            <li>
              <h3 className="font-bold">MoEngage – Senior Solutions Engineer</h3>
              <p>Improved campaign ROI by 15%, raised 40+ bugs, trained customers and new hires.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">Projects Showcase</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold mb-2">AWS Hosting Project</h3>
            <p>Built a static website hosting pipeline with S3, CloudFront, GitHub Actions, and Route 53.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold mb-2">RESTful API Development</h3>
            <p>Developed Bookstore API with Flask/FastAPI, token authentication, PostgreSQL backend.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold mb-2">Python Automation</h3>
            <p>Built automation scripts and CRUD RESTful services for data workflows.</p>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-indigo-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Recognition & Certifications</h2>
          <p>Criteo Beats Award 2024 🏆</p>
          <p>AWS Solutions Architect (In Progress)</p>
          <p>RESTful API Development & Python Essential Training</p>
        </div>
      </section>

      {/* Contact */}
      <footer className="bg-indigo-600 text-white py-8 text-center mt-12">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p>Email: sanjayamazed@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/sanjay-t-763945188</p>
        <p>GitHub: github.com/ (add your username)</p>
      </footer>
    </div>
  );
}
