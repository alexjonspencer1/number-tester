import isEven from '../is-even.js';

const test = QUnit.test;

test('is even', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const numberFigure = 2;
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const resultFunction = isEven(numberFigure);

    //Assert
    // What should the result be?
    assert.equal(resultFunction, expected);
});

test('is odd', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const numberFigure = 1;
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const resultFunction = isEven(numberFigure);

    //Assert
    // What should the result be?
    assert.equal(resultFunction, expected);
});