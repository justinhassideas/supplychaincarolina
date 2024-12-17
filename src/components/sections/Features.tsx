import { Card } from "@/components/ui/card";
import { Zap, CheckCircle2, MessageSquare } from "lucide-react";

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="p-6 glass-card hover-lift bg-white/5 border-white/10">
          <Zap className="h-12 w-12 text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Analytics</h3>
          <p className="text-gray-300">
            Leverage advanced AI algorithms to optimize your supply chain operations
          </p>
        </Card>
        <Card className="p-6 glass-card hover-lift bg-white/5 border-white/10">
          <CheckCircle2 className="h-12 w-12 text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Real-time Insights</h3>
          <p className="text-gray-300">
            Make data-driven decisions with real-time analytics and reporting
          </p>
        </Card>
        <Card className="p-6 glass-card hover-lift bg-white/5 border-white/10">
          <MessageSquare className="h-12 w-12 text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Expert Support</h3>
          <p className="text-gray-300">
            Get personalized support from our team of supply chain experts
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Features;