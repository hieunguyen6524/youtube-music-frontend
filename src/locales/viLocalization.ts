import type { LocalizationResource } from "@clerk/types";

export const viLocalization: LocalizationResource = {
  locale: "vi-VN",
  socialButtonsBlockButton: "Tiếp tục với {{provider|titleize}}",
  dividerText: "hoặc",
  formFieldLabel__emailAddress: "Địa chỉ email",
  formFieldLabel__username: "Tên đăng nhập",
  formFieldLabel__emailAddress_username: "Email hoặc tên đăng nhập",
  formFieldLabel__password: "Mật khẩu",
  formFieldLabel__firstName: "Tên",
  formFieldLabel__lastName: "Họ",
  formFieldLabel__phoneNumber: "Số điện thoại",
  //   formFieldLabel__code: "Mã xác minh",
  formFieldLabel__confirmPassword: "Xác nhận mật khẩu",
  formButtonPrimary: "Tiếp tục",

  signIn: {
    start: {
      title: "Đăng nhập",
      subtitle: "Chọn phương thức để tiếp tục",
      actionText: "Bạn chưa có tài khoản?",
      actionLink: "Đăng ký",
    },
    password: {
      title: "Nhập mật khẩu",
      subtitle: "Sử dụng mật khẩu để đăng nhập",
      actionLink: "Dùng phương thức khác",
    },
  },

  signUp: {
    start: {
      title: "Đăng ký",
      subtitle: "Tạo tài khoản mới",
      actionText: "Bạn đẫ có tài khoản?",
      actionLink: "Đănng nhập",
    },
    emailLink: {
      title: "Xác minh email",
      subtitle: "Chúng tôi đã gửi một liên kết xác minh tới {{identifier}}",
      formTitle: "Liên kết xác minh",
      formSubtitle: "Nhấn vào liên kết trong email để tiếp tục",
      resendButton: "Gửi lại email",
    },
    phoneCode: {
      title: "Xác minh điện thoại",
      subtitle: "Nhập mã xác minh đã gửi đến {{identifier}}",
    },
  },

  userButton: {
    action__manageAccount: "Quản lý tài khoản",
    action__signOut: "Đăng xuất",
  },

  organizationSwitcher: {
    personalWorkspace: "Tài khoản cá nhân",
  },
};
