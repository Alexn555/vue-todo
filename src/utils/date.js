// Date and time utility helper

export function createDate () {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  today = mm + '/' + dd + '/' + year;
  return today;
}
