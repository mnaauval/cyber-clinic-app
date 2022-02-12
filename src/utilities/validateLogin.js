export default function validateLogin(values) {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = "Username harus diisi";
  }

  if (!values.email) {
    errors.email = "Email harus diisi";
  } else if (values.email !== "admin@admin.com") {
    errors.email = "Email salah";
  }

  if (!values.password) {
    errors.password = "Password harus diisi";
  } else if (values.password.length < 8) {
    errors.password = "Password harus lebih dari 8 karakter";
  } else if (values.password !== "admin123") {
    errors.password = "Password salah";
  }

  return errors;
}
