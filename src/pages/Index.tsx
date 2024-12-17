import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, MessageSquare, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/30 to-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-accent">
            Supply Chain Carolina
          </div>
          <div className="space-x-6">
            <Button variant="ghost" className="hover-lift">
              About
            </Button>
            <Button variant="ghost" className="hover-lift">
              Services
            </Button>
            <Button variant="ghost" className="hover-lift">
              Contact
            </Button>
            <Button className="bg-accent hover:bg-accent/90 hover-lift">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="text-5xl font-bold text-balance leading-tight">
              Unlock the Power of AI in Your Supply Chain
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your business with cutting-edge SaaS solutions designed for small and medium enterprises
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 hover-lift">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Schedule Demo <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 glass-card hover-lift">
              <Zap className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analytics</h3>
              <p className="text-muted-foreground">
                Leverage advanced AI algorithms to optimize your supply chain operations
              </p>
            </Card>
            <Card className="p-6 glass-card hover-lift">
              <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Insights</h3>
              <p className="text-muted-foreground">
                Make data-driven decisions with real-time analytics and reporting
              </p>
            </Card>
            <Card className="p-6 glass-card hover-lift">
              <MessageSquare className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Get personalized support from our team of supply chain experts
              </p>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-24 bg-primary/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that best fits your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 hover-lift">
              <div className="text-2xl font-bold mb-4">Starter</div>
              <div className="text-4xl font-bold mb-6">$99<span className="text-lg font-normal">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Basic AI Analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  5 User Accounts
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Email Support
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90">Get Started</Button>
            </Card>
            <Card className="p-6 hover-lift border-accent">
              <div className="text-2xl font-bold mb-4">Professional</div>
              <div className="text-4xl font-bold mb-6">$199<span className="text-lg font-normal">/mo</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Advanced AI Analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Unlimited Users
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Priority Support
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90">Get Started</Button>
            </Card>
            <Card className="p-6 hover-lift">
              <div className="text-2xl font-bold mb-4">Enterprise</div>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Custom AI Solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Dedicated Support
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Custom Integration
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90">Contact Sales</Button>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Supply Chain?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team to learn how we can help your business thrive
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 hover-lift">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Supply Chain Carolina</h3>
              <p className="text-sm text-muted-foreground">
                Empowering businesses with AI-driven supply chain solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Blog</li>
                <li>Documentation</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Supply Chain Carolina. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;