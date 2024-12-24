import { Shield, Brain, Lock, Database, Leaf, Scale, AlertTriangle, Users } from "lucide-react";
import { Card } from "./ui/card";

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
    {
      icon: Leaf,
      title: "Environmental Optimization",
      description: "Sustainable AGI development with minimal environmental impact",
    },
    {
      icon: Scale,
      title: "Decentralized Oversight",
      description: "Transparent and distributed governance mechanisms",
    },
    {
      icon: AlertTriangle,
      title: "Crisis Simulation",
      description: "Advanced testing scenarios for AGI safety protocols",
    },
    {
      icon: Users,
      title: "Stakeholder Collaboration",
      description: "Unified platform for global AGI safety initiatives",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and frameworks for securing and governing AGI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex flex-col">
                <div className="mb-6">
                  <feature.icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};