import { Shield, Brain, Lock, Database } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Real-Time Threat Detection",
      description: "Advanced monitoring and immediate response to potential security threats",
    },
    {
      icon: Brain,
      title: "Ethical AI Governance",
      description: "Comprehensive framework ensuring responsible AGI development",
    },
    {
      icon: Lock,
      title: "Secure Training Environment",
      description: "Protected sandbox environment for safe AGI development",
    },
    {
      icon: Database,
      title: "Global AI Governance",
      description: "Standardized protocols for worldwide AGI deployment",
    },
  ];

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Core Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};