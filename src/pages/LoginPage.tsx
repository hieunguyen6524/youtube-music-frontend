import { SignIn } from "@clerk/clerk-react";

function LoginPage() {
  return (
    <SignIn
      signUpUrl="/signup"
      appearance={{
        elements: {
          card: "shadow-none", // bỏ border mặc định để trông gọn hơn
        },
      }}
    />
  );
}

export default LoginPage;
