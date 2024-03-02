function frm_num(number) {
  return number >= 1000 ? `${(number / 1000).toFixed(1)}K` : number
}

function date_str(dateString) {
  return new Date(new Date(dateString).getTime() - new Date(dateString).getTimezoneOffset() * 60000).toDateString();
}

module.exports = { frm_num, date_str }