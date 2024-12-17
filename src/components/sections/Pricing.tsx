import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-300">
          Choose the plan that best fits your business needs
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="p-6 hover-lift bg-white/5 border-white/10">
          <div className="text-2xl font-bold mb-4 text-white">Starter</div>
          <div className="text-4xl font-bold mb-6 text-white">$49<span className="text-lg font-normal">/mo</span></div>
          <ul className="space-y-3 mb-6 text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              Basic AI Analytics
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              5 User Accounts
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              Email Support
            </li>
          </ul>
          <Button variant="outline" className="w-full text-white border-white">Get Started</Button>
        </Card>
        <Card className="p-6 hover-lift bg-white/5 border-white/10 border-accent">
          <div className="text-2xl font-bold mb-4 text-white">Professional</div>
          <div className="text-4xl font-bold mb-6 text-white">$149<span className="text-lg font-normal">/mo</span></div>
          <ul className="space-y-3 mb-6 text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              Advanced AI Analytics
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              Unlimited Users
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              Priority Support
            </li>
          </ul>
          <Button variant="outline" className="w-full text-white border-white">Get Started</Button>
        </Card>
        <Card className="p-6 hover-lift bg-white/5 border-white/10">
          <div className="text-2xl font-bold mb-4 text-white">Enterprise</div>
          <div className="text-4xl font-bold mb-6 text-white">Custom</div>
          <ul className="space-y-3 mb-6 text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              Custom AI Solutions
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              Dedicated Support
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              Custom Integration
            </li>
          </ul>
          <Button variant="outline" className="w-full text-white border-white">Contact Sales</Button>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;