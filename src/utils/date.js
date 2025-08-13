export function isPresent(value) {
  if (!value) return true;
  const v = String(value).toLowerCase();
  return v === "present" || v === "presente" || v === "now";
}

export function toOrderValue(isoOrPresent) {
  if (isPresent(isoOrPresent)) return Number.POSITIVE_INFINITY;
  const [y, m = "01"] = String(isoOrPresent).split("-");
  return Number(`${y}${String(m).padStart(2, "0")}`);
}

export function formatRange(start, end) {
  const fmt = (s) => (s && s.includes("-") ? s.split("-")[0] : s || "");
  const startY = fmt(start);
  const endY = isPresent(end) ? "Presente" : fmt(end);
  return `${startY} - ${endY}`;
}
