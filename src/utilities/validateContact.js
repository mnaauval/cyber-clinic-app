export default function validataeContact(values) {
  const errors = {};

  if (!values.floating_first_name.trim()) {
    errors.floating_first_name = "Nama depan harus diisi";
  }
  if (!values.floating_last_name.trim()) {
    errors.floating_last_name = "Nama belakang harus diisi";
  }

  if (!values.floating_email) {
    errors.floating_email = "Email harus diisi";
  }

  if (!values.floating_subject_msg.trim()) {
    errors.floating_subject_msg = "Subjek pesan harus diisi";
  }

  if (!values.floating_msg) {
    errors.floating_msg = "Keluhan harus diisi";
  }

  return errors;
}
