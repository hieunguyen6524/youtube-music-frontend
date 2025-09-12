import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { FaGoogle } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { ChevronLeft } from "lucide-react";
import VerificationCode from "@/components/signup/VerificationCode";
import { useAppState } from "@/hooks/useAppState";

function ProgressBar({ step, total }: { step: number; total: number }) {
  const percent = (step / total) * 100;
  return (
    <div className="w-full bg-gray-700 h-1 rounded-full mb-4">
      <div
        className="bg-red-500 h-1 rounded-full transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

function SignupPage() {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [code, setCode] = useState("");

  const [pendingVerification, setPendingVerification] = useState(false);
  const [error, setError] = useState("");
  const { isLoading, setIsLoading } = useAppState();

  if (!isLoaded) return null;

  // Validate input
  const validateStep = () => {
    if (step === 1 && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Vui lòng nhập email hợp lệ");
      return false;
    }
    if (step === 2 && password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    }
    if (step === 3) {
      if (!name) {
        setError("Vui lòng nhập tên");
        return false;
      }
      if (!day || !month || !year) {
        setError("Vui lòng nhập đầy đủ ngày sinh");
        return false;
      }
      if (!gender) {
        setError("Vui lòng chọn giới tính");
        return false;
      }
    }
    setError("");
    return true;
  };

  // Đăng ký bằng Google
  const handleGoogleSignup = async () => {
    setIsLoading(true);
    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sign-up",
        redirectUrlComplete: "/",
      });
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Có lỗi xảy ra!");
    } finally {
      setIsLoading(false);
    }
  };

  // Bước 1-3: Tạo tài khoản email + password
  const handleCreateAccount = async () => {
    if (!validateStep()) return;
    setIsLoading(true);
    try {
      await signUp.create({
        emailAddress: email,
        password,
        unsafeMetadata: {
          name,
          dob: `${day}/${month}/${year}`,
          gender,
        },
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Có lỗi xảy ra!");
    } finally {
      setIsLoading(false);
    }
  };

  // Bước cuối: Xác minh mã
  const handleVerify = async () => {
    if (!code) {
      setError("Vui lòng nhập mã xác minh");
      return;
    }
    setIsLoading(true);
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        window.location.href = "/";
      } else {
        setError("Xác minh chưa hoàn tất!");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Mã xác minh không hợp lệ!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col pt-24 items-center text-white relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500"></div>
        </div>
      )}

      <div className="flex justify-center mb-6">
        <SiYoutubemusic size={32} color="red" />
      </div>

      <div className="h-full w-full max-w-md p-6">
        {!pendingVerification ? (
          <>
            <ProgressBar step={step} total={3} />
            <div className="flex items-center gap-4 mb-8">
              <ChevronLeft
                color="gray"
                className="cursor-pointer"
                onClick={() => setStep((prev) => (prev > 1 ? prev - 1 : 1))}
              />
              <span>
                <p className="text-sm opacity-60">Bước {step} của 3</p>
                <p className="text-sm font-semibold">
                  {step === 1
                    ? "Tạo tài khoản"
                    : step === 2
                    ? "Mật khẩu"
                    : "Giới thiệu bản thân"}
                </p>
              </span>
            </div>

            {/* Step 1: Email */}
            {step === 1 && (
              <>
                <label className="block mb-2 text-sm">Địa chỉ email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-transparent border border-gray-500 focus:outline-none focus:border-white"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={() => validateStep() && setStep(2)}
                  className="w-full mt-4 bg-red-500 hover:bg-red-600 text-black font-semibold p-3 rounded-4xl disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang xử lý..." : "Tiếp theo"}
                </button>
                <div className="text-center my-4">hoặc</div>
                <button
                  onClick={handleGoogleSignup}
                  className="w-full border border-gray-500 rounded p-3 flex items-center justify-center gap-2 hover:bg-gray-800 disabled:opacity-50"
                  disabled={isLoading}
                >
                  <FaGoogle size={20} />
                  Đăng ký bằng Google
                </button>
              </>
            )}

            {/* Step 2: Password */}
            {step === 2 && (
              <>
                <label className="block mb-2 text-sm">Mật khẩu</label>
                <input
                  type="password"
                  className="w-full p-2 rounded bg-transparent border border-gray-500 focus:outline-none focus:border-white"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => validateStep() && setStep(3)}
                  className="w-full mt-4 bg-red-500 hover:bg-red-600 text-black font-semibold p-3 rounded-4xl disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang xử lý..." : "Tiếp theo"}
                </button>
              </>
            )}

            {/* Step 3: Info */}
            {step === 3 && (
              <>
                {/* Tên */}
                <label className="block mb-2 text-sm">Tên</label>
                <input
                  type="text"
                  className="w-full p-2 mb-4 rounded bg-transparent border border-gray-500 focus:outline-none focus:border-red-500"
                  placeholder="Tên này sẽ xuất hiện trên hồ sơ của bạn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                {/* Ngày sinh */}
                <label className="block mb-2 text-sm">Ngày sinh</label>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="dd"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-1/3 p-2 rounded bg-transparent border border-gray-500 focus:outline-none focus:border-red-500"
                  />
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-1/3 p-2 rounded bg-transparent border border-gray-500 focus:outline-none focus:border-red-500"
                  >
                    <option value="">Tháng</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="yyyy"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-1/3 p-2 rounded bg-transparent border border-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                {/* Giới tính */}
                <label className="block mb-2 text-sm">Giới tính</label>
                <div className="flex flex-wrap gap-2 mb-6 w-2/3 justify-between">
                  {[
                    { value: "male", label: "Nam" },
                    { value: "female", label: "Nữ" },
                    { value: "nonbinary", label: "Phi nhị giới" },
                    { value: "other", label: "Giới tính khác" },
                    { value: "none", label: "Không muốn nêu cụ thể" },
                  ].map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value={opt.value}
                        checked={gender === opt.value}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>

                <button
                  onClick={handleCreateAccount}
                  className="w-full bg-red-500 hover:bg-red-600 text-black font-semibold p-3 rounded-4xl disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang xử lý..." : "Tiếp theo"}
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <VerificationCode
              length={6}
              sendOtp={handleVerify}
              setCode={setCode}
              email={email}
            />
          </>
        )}

        {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
      </div>
    </div>
  );
}

export default SignupPage;
