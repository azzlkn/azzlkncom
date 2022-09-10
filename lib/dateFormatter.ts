var months = Array(
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
);

export default (pubDate) => {
  const date = new Date(pubDate);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
