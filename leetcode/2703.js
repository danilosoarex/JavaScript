/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
function argumentsLength (...args) {
    console.log(args.length)
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

argumentsLength([1, 2, 3]);