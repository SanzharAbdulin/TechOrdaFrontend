function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */
  // let re = /^(a|e|i|o|u).*\1$/
  let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)([a-z]|[A-Z])+$/;

  /*
   * Do not remove the return statement
   */
  return re;
}
