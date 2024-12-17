import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Supply Chain Carolina
        </div>
        <div className="space-x-6">
          <Button variant="outline" className="hover-lift text-white border border-white/80 hover:border-white/100 bg-transparent">
            About
          </Button>
          <Button variant="outline" className="hover-lift text-white border border-white/80 hover:border-white/100 bg-transparent">
            Services
          </Button>
          <Button variant="outline" className="hover-lift text-white border border-white/80 hover:border-white/100 bg-transparent">
            Contact
          </Button>
          <Button variant="outline" className="hover-lift text-white border border-white/80 hover:border-white/100 bg-transparent">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;