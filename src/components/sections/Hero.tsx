import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
        <h1 className="text-5xl font-bold text-balance leading-tight text-white">
          Unlock the Power of AI in Your Supply Chain
        </h1>
        <p className="text-xl text-gray-300">
          Transform your business with cutting-edge SaaS solutions designed for small and medium enterprises
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="outline" size="lg" className="hover-lift text-white border-white">
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="hover-lift text-white border-white">
            Schedule Demo <MessageSquare className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;