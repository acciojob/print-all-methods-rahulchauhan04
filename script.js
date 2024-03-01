function allMethods() {
  return Object.getOwnPropertyNames(Math).filter(function (property) {
    return typeof Math[property] === 'function';
  }).join(", ");
}

// Showing the methods in an alert
alert(allMethods());
