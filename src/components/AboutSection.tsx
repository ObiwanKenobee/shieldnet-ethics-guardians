import { Brain, Shield, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About AGI ShieldNet
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Protection</h3>
            <p className="text-gray-600">
              Comprehensive security measures to safeguard AGI development and deployment
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Brain className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Intelligence</h3>
            <p className="text-gray-600">
              Advanced monitoring and regulation of AGI systems for ethical compliance
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Globe className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
            <p className="text-gray-600">
              Fostering worldwide collaboration for responsible AGI development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};