function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  let ageInMilliseconds = currentDate - birthDate;

  const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  ageInMilliseconds %= 365.25 * 24 * 60 * 60 * 1000;

  const months = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
  ageInMilliseconds %= 30.44 * 24 * 60 * 60 * 1000;

  const days = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

  return { years, months, days };
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calculate').addEventListener('click', () => {
    const year = parseInt(document.getElementById('year').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const day = parseInt(document.getElementById('day').value, 10);

    // Add validation for valid date inputs here if needed

    const birthdate = `${year}-${month}-${day}`;

    const age = calculateAge(birthdate);
    document.getElementById('current-years').innerHTML = age.years;
    document.getElementById('current-months').innerHTML = age.months;
    document.getElementById('current-days').innerHTML = age.days;
  });
});
