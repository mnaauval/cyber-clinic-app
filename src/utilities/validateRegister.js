export default function validateRegister(values) {
  const errors = {};

  if (!values.full_name.trim()) {
    errors.full_name = "Nama lengkap harus diisi";
  }

  if (!values.phone) {
    errors.phone = "Nomor telepon harus diisi";
  }

  if (!values.place) {
    errors.place = "Tempat lahir harus diisi";
  }

  if (!values.address) {
    errors.address = "Alamat harus diisi";
  }

  if (!values.post_code) {
    errors.post_code = "Kode pos harus diisi";
  }

  if (!values.message) {
    errors.message = "Keluhan harus diisi";
  }

  return errors;
}
