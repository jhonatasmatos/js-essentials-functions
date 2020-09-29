// CEP Mask
export function cepMask(value) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2")

  return value;
}

// CEP Unmask
export function cepUnmask(value) {
  value = value.replace(/\D/g, "");

  return value;
}