import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the email confirmation
    const handleEmailConfirmation = async () => {
      const { error } = await supabase.auth.getSession();
      if (error) {
        toast.error("Error confirming email. Please try again.");
        return;
      }

      // If we have a hash in the URL, it means we're handling a confirmation
      if (window.location.hash) {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
          if (event === "SIGNED_IN") {
            toast.success("Email confirmed successfully!");
            navigate("/");
          }
        });

        // Clean up subscription on unmount
        return () => {
          subscription.unsubscribe();
        };
      }
    };

    handleEmailConfirmation();

    // Check if user is already logged in
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && event !== "INITIAL_SESSION") {
        navigate("/");
      }
    });

    // Clean up subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 to-cyan-400 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-[#1A2A2F] mb-2">Supply Chain Carolina</h1>
        <p className="text-[#1A2A2F]/80">Welcome back to your supply chain management solution</p>
        <p className="text-sm text-[#1A2A2F]/60">Powered by RebelChain.ai</p>
      </div>
      
      <div className="w-full max-w-md bg-[#1A2A2F] p-8 rounded-lg shadow-xl">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#00D1FF',
                  brandAccent: '#00B8E6',
                  inputBackground: '#1A2A2F',
                  inputBorder: '#2A3A40',
                  inputText: '#FFFFFF',
                  inputPlaceholder: '#4A5A60',
                },
                borderWidths: {
                  buttonBorderWidth: '0px',
                  inputBorderWidth: '1px',
                },
                radii: {
                  borderRadiusButton: '6px',
                  buttonBorderRadius: '6px',
                  inputBorderRadius: '6px',
                },
              },
            },
            className: {
              container: 'auth-container',
              button: 'auth-button',
              input: 'auth-input',
              label: 'auth-label text-white/80',
            },
          }}
          providers={[]}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Login;