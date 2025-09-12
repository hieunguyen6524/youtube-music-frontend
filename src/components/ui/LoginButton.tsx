import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./button";

function LoginButton() {
  const { signIn } = useSignIn();

  const handleGoogleLogin = async () => {
    if (!signIn) return;

    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/home",
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleGoogleLogin}
      className="text-white hover:bg-gray-800"
    >
      Đăng nhập
    </Button>
  );
}

export default LoginButton;
