import { Brain, Shield, Globe } from "lucide-react";
import { Card } from "./ui/card";

export const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Protection",
      description: "Comprehensive security measures to safeguard AGI development and deployment",
    },
    {
      icon: Brain,
      title: "Intelligence",
      description: "Advanced monitoring and regulation of AGI systems for ethical compliance",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Fostering worldwide collaboration for responsible AGI development",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            About AGI ShieldNet
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A unified cybersecurity protection platform designed to monitor, regulate, and secure
            the development of Artificial General Intelligence for the benefit of humanity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600" />
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