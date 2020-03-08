class AtualDate {
  static dateNow () {
    var correctDate = new Date()
    correctDate.setDate(new Date().getDate())
    correctDate.setMonth(new Date().getMonth())
    correctDate.setFullYear(new Date().getFullYear())
    correctDate.setUTCHours(new Date().getHours())
    return correctDate
  }
}

module.exports = AtualDate
