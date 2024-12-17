import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

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
          <Button 
            variant="outline" 
            className="hover-lift text-white border border-white/80 hover:border-white/100 bg-transparent"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;