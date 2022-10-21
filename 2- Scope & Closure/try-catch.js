try {
    undefined //illegal operation to force an expression
}
catch(err) {
    console.log(err); //works
}console.log(err); //ReferenceError: 'err not found