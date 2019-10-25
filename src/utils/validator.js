// Form validator helper

export function isInputLengthCorrect (inputText, inputName, min = 1, max = 100) {
  let error = '';
  if (inputText) {
    if (inputText.length < min) {
      error = `Input: ${inputName} should be minimum ${min}`;
    } else if (inputText.length > max) {
      error = `Input: ${inputName} should be maximum ${max}`;
    }
  } else {
    error = 'No input set!';
  }
  return error;
}

// check if date has valid date, mm, year
export function isCorrectDate (inputDate) {
  let error = '';
  const strDate = inputDate.split('/');
  const dd = parseInt(strDate[0]);
  const mm = parseInt(strDate[1]);
  const year = parseInt(strDate[2]);

  const ddRange = [1, 31];
  const mmRange = [1, 12];
  const yearRange = [2019, 2050];

  // feb exception
  if (mm === 2 && dd > 29) {
    error = 'In February day can be only in range of 1 and 29 days';
  }
  if (dd < ddRange[0] || dd > ddRange[1]) {
    error = 'Date has incorrect day';
  } else if (mm < mmRange[0] || mm > mmRange[1]) {
    error = 'Date has incorrect month';
  } else if (year < yearRange[0] || year > yearRange[1]) {
    error = `Date has incorrect year. Should be in range between ${yearRange[0]} and ${yearRange[1]} year`;
  }

  return error;
}
