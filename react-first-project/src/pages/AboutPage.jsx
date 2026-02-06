import {
  Building2,
  Target,
  HeartHandshake,
  Rocket,
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Projects Done", value: "1200+" },
  { label: "Team Members", value: "50+" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Deliver innovative digital solutions that empower businesses.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Trust, transparency, and long-term partnerships.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    text: "To be a global leader in smart technology services.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 text-blue-900">

      {/* HERO */}
      <section className="text-center px-6 py-20">
        <div className="flex justify-center items-center gap-3 animate-[var(--animate-fade-in)]">
          <Building2 size={48} className="text-blue-600" />
          <h1 className="text-4xl md:text-6xl font-bold">
            About Blue Horizon
          </h1>
        </div>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl opacity-80">
          We are a technology-driven company focused on building powerful digital
          products that help businesses grow faster and smarter.
        </p>
      </section>

      {/* STATS */}
      <section className="px-6 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform animate-[var(--animate-fade-in)]"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                {s.value}
              </h2>
              <p className="mt-2 opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl animate-[var(--animate-fade-in)]">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>

          <p className="opacity-80 leading-relaxed">
            Blue Horizon was founded with a simple goal — to make technology
            accessible, scalable, and impactful. From startups to enterprises,
            we’ve partnered with companies worldwide to design and develop
            cutting-edge digital solutions.
            <br /><br />
            Our team of designers, developers, and strategists work closely with
            clients to transform ideas into high-performing products.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What Drives Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-blue-500 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
              >
                <Icon
                  size={52}
                  className="mx-auto mb-4 animate-[var(--animate-spin-slow)]"
                />

                <h3 className="text-xl font-bold mb-2">{v.title}</h3>

                <p className="opacity-80">{v.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Let’s Build Something Great Together
        </h2>

        <p className="opacity-80 mb-10">
          Partner with us to bring your ideas to life.
        </p>

        <button className="px-10 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:scale-110 transition-transform">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-blue-900 text-blue-100">
        © 2026 Blue Horizon Corp. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutPage;
