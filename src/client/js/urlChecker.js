function checkForURL(inputText) {
  // print inputText
  console.log('::: Running checkForURL :::', inputText);

  // define regular expressions
  let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;

  // match the correct URL link address with a regular expression
  if (!reg.test(inputText)) {
    alert(
      'This website does not start with http:// or https:// or is not a website!'
    );
    return false;
  } else {
    console.log('Correct URL link address');
    return true;
  }
}

export { checkForURL };
