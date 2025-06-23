const areaCalc = (shape, ...dimensions) => {
    switch (shape) {
        case 'rectangle':
            if (dimensions.length !== 2) {
                throw new Error('Rectangle requires 2 dimensions: width and height');
            }
            return dimensions[0] * dimensions[1];
        case 'circle':
            if(dimensions.length !== 1){
                throw new Error('Circle requires 1 dimension: radius');
            }
            return Math.PI * dimensions[0] ** 2;
        case 'triangle':
            if (dimensions.length !== 2) {
                throw new Error('Triangle requires 2 dimensions: base and height');
            }
            return 0.5 * dimensions[0] * dimensions[1];
        case 'square':
            if (dimensions.length !== 1) {
                throw new Error('Square requires 1 dimension: side length');
            }
            return dimensions[0] ** 2;
        default:
            throw new Error('Unknown shape type. Supported shapes: rectangle, circle, triangle, square');
    }
}

// Example usage:
try {
    console.log(areaCalc('rectangle', 5, 10)); // 50
    console.log(areaCalc('circle', 3)); // 28.27...
    console.log(areaCalc('triangle', 4, 6)); // 12
    console.log(areaCalc('square', 4)); // 16
    //console.log(areaCalc('rectangle', 5)); // Error: Rectangle requires 2 dimensions
    console.log(areaCalc('hexagon', 3)); // Error: Unknown shape type
}catch (error) {
    console.error(error.message);
}