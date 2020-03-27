let sum = 0;
process.argv.forEach((el,ind) => {
    if (ind > 1){ sum += parseInt(el) };
});

console.log(sum);