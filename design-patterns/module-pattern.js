//Module Pattern
let modulePattern = (function() {
    // declare private variables and/or functions
    return {
      // declare public variables and/or functions
    }
})();

//Revealing Module Pattern
let revealingModulePattern = (function() {
    // declare other private variables and/or functions
    let methodToBeExposed =()=>{console.log('hi')};
    let varToBeExposed=1;
  
    return {
      method1:methodToBeExposed,
      var1:varToBeExposed
    }
})();
