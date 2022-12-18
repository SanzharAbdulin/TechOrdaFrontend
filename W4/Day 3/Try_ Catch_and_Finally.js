function reverseString(s) {
  try {
    s = s.split('').reverse().join('');
    console.log(s);
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}
