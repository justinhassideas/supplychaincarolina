import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Supply Chain Carolina
        </div>
        <div className="space-x-6">
          <Button variant="outline" className="hover-lift text-white border-white">
            About
          </Button>
          <Button variant="outline" className="hover-lift text-white border-white">
            Services
          </Button>
          <Button variant="outline" className="hover-lift text-white border-white">
            Contact
          </Button>
          <Button variant="outline" className="hover-lift text-white border-white">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;