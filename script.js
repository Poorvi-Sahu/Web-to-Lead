function beforeSubmit() {
  let outputdate = document.querySelector('.outputDate');

  let inputdate = document.querySelector('.inputDate');
  console.log('inputdate.value', inputdate.value); // string-->> date(en_US)
  let formattedDate = new Date(inputdate.value).toLocaleDateString('en-US');

  outputdate.value = formattedDate;
}
