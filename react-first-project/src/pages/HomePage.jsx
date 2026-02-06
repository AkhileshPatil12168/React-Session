import { Building2, TrendingUp, Users, ShieldCheck } from "lucide-react";

const companies = [
  {
    name: "BlueNova Tech",
    symbol: "🔷",
    description: "Innovative cloud and AI solutions for modern businesses.",
  },
  {
    name: "SkyWave Solutions",
    symbol: "🌊",
    description: "Digital transformation and scalable web platforms.",
  },
  {
    name: "NextCore Systems",
    symbol: "⚙️",
    description: "Enterprise software with security-first approach.",
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Fast Growth",
    text: "Helping startups scale efficiently",
  },
  {
    icon: Users,
    title: "Trusted Clients",
    text: "Serving 500+ companies worldwide",
  },
  {
    icon: ShieldCheck,
    title: "Secure Systems",
    text: "Top level data protection",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 text-blue-900">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <div className="flex items-center gap-3 animate-bounce">
          <Building2 size={50} className="text-blue-600" />
          <h1 className="text-4xl md:text-6xl font-bold">
            Blue Horizon Corp
          </h1>
        </div>

        <p className="mt-6 max-w-2xl text-lg md:text-xl opacity-80">
          Empowering businesses with cutting-edge technology solutions.
        </p>

        <button className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:scale-105 transition-transform">
          Get Started
        </button>
      </section>

      {/* COMPANY CARDS */}
      <section className="px-6 pb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Companies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition-transform duration-300 animate-fadeIn"
            >
              <div className="text-5xl mb-4">{company.symbol}</div>

              <h3 className="text-xl font-bold mb-2">
                {company.name}
              </h3>

              <p className="opacity-70">{company.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-blue-500 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
              >
                <Icon
                  size={50}
                  className="mx-auto mb-4 animate-spin-slow"
                />

                <h3 className="text-xl font-bold mb-2">
                  {f.title}
                </h3>

                <p className="opacity-80">{f.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-blue-900 text-blue-100">
        © 2026 Blue Horizon Corp. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
