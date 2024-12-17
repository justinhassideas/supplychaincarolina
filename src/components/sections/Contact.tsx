import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Supply Chain?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Get in touch with our team to learn how we can help your business thrive
        </p>
        <Button variant="outline" size="lg" className="hover-lift text-white border border-white/80 hover:border-white/100 bg-transparent">
          Contact Us <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Contact;