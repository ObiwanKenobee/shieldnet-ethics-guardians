import { AlertTriangle, Shield, Cpu, Users, DollarSign, Scale, Gavel } from "lucide-react";

export const ChallengesSection = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Existential Risks",
      description: "Addressing potential risks to humanity from advanced AGI systems",
    },
    {
      icon: Shield,
      title: "Cybersecurity Threats",
      description: "Protection against sophisticated cyber attacks and vulnerabilities",
    },
    {
      icon: DollarSign,
      title: "Economic Impact",
      description: "Managing the economic implications of widespread AGI adoption",
    },
    {
      icon: Users,
      title: "Social Integration",
      description: "Ensuring harmonious integration of AGI into society",
    },
    {
      icon: Cpu,
      title: "Technical Complexity",
      description: "Managing the intricate technical challenges of AGI development",
    },
    {
      icon: Scale,
      title: "Ethical Alignment",
      description: "Maintaining strong ethical principles in AGI systems",
    },
    {
      icon: Gavel,
      title: "Regulatory Balance",
      description: "Striking the right balance in AGI governance and regulation",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Challenges We Address
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Comprehensive solutions for the most pressing challenges in AGI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <challenge.icon className="w-12 h-12 text-blue-300 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                {challenge.title}
              </h3>
              <p className="text-blue-100">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};