import { AlertTriangle, Shield, Cpu, Users } from "lucide-react";

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
      icon: Cpu,
      title: "Economic Impact",
      description: "Managing the economic implications of widespread AGI adoption",
    },
    {
      icon: Users,
      title: "Social Integration",
      description: "Ensuring harmonious integration of AGI into society",
    },
  ];

  return (
    <div className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Challenges We Address
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20"
            >
              <challenge.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                {challenge.title}
              </h3>
              <p className="text-gray-300">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};