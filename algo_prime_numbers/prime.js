#!/bin/env node

var primes = [],
  limit = parseInt(process.argv[2] || 100),
  sqrt, quantity = 0,
  number = 1, divisor, primePos, isNotPrime,
  start = Date.now();

while (number++) {
    if (number % 2) {
        if ((sqrt = Math.pow(number, 0.5)) == Math.floor(sqrt)) continue;
        isNotPrime = primePos = 0;
        while ((divisor = primes[++primePos]) && divisor < sqrt)
            if (isNotPrime |= !(number % divisor)) break;
        if (isNotPrime) continue;
    }
    else if (number !== 2) continue;
    if ((quantity = primes.push(number)) >= limit) break;
}

console.log("Elapsed time: " + (Date.now() - start) + " milliseconds");
console.log("Last prime number found: %s", primes[primes.length - 1]);

//console.log(primes.slice(0, 100) + "");
