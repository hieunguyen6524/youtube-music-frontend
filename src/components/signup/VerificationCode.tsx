import { useAppState } from "@/hooks/useAppState";
import { maskEmail } from "@/utils/maskEmail";
import React, { useRef, useState } from "react";

type VerificationCodeProps = {
  length: number;
  email: string;
  sendOtp: () => Promise<void>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

export default function VerificationCode({
  length = 6,
  sendOtp,
  email,
  setCode,
}: VerificationCodeProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { isLoading } = useAppState();
  setCode(otp.join(""));
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const index = inputRefs.current.indexOf(e.currentTarget);

    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      !(e.ctrlKey && e.key.toLowerCase() === "v") &&
      !e.metaKey
    ) {
      e.preventDefault();
      return;
    }
    if (e.key === "Backspace" || e.key === "Delete") {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        if (newOtp[index]) {
          newOtp[index] = "";
        } else if (index > 0) {
          newOtp[index - 1] = "";
          inputRefs.current[index - 1]?.focus();
        }
        return newOtp;
      });
    }
    if (e.key === "ArrowLeft") {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight") {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const { value, selectionStart } = input;
    const index = inputRefs.current.indexOf(input);

    const lastChar = value.replace(/\D/g, "").slice(-1);

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = lastChar || "";
      return newOtp;
    });

    if (lastChar && index < otp.length - 1 && selectionStart === value.length) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, ""); // chỉ lấy số
    const digits = text.split("").slice(0, otp.length);

    if (digits.length) {
      setOtp(digits.concat(Array(otp.length - digits.length).fill("")));

      // focus vào ô cuối cùng đã điền
      const lastIndex = digits.length - 1;
      if (lastIndex >= 0) {
        inputRefs.current[lastIndex]?.focus();
      }
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        Nhập mã gồm 6 chữ số mà bạn nhận được qua địa chỉ {maskEmail(email)}.
      </h2>
      <section className="bg-transparent py-10 dark:bg-dark">
        <div className="container">
          <form id="otp-form" className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={2}
                value={digit}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onPaste={handlePaste}
                ref={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                className="focus:border-white shadow-xs flex w-1/6 items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
              />
            ))}
          </form>
          <button
            type="submit"
            onClick={sendOtp}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-black font-semibold p-3 rounded-4xl disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Đang xử lý..." : "Xác minh & Đăng ký"}
          </button>
        </div>
      </section>
    </>
  );
}
