import isEven from '../is-even.js';

const test = QUnit.test;

test('is even', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 1;
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isEven(number);

    //Assert
    // What should the result be?
    assert.equal(result, expected);
});