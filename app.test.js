/***Importing our function(which we have assumed we will create in future)
 * to be tested from the app.js file to our test file */
const removeSNames = require('./app');
//Our Jest method conatining multiple tests that define our objective
describe('removeSname', () =>{

    //Test 1 - name with 'S' should not be present in the resultant array
    it('Should remove all S names', () =>{
        const names = ['Apple', 'Strawberry', 'Star fruit'];
        expect(removeSNames(names)).not.contain('Strawberry');
        expect(removeSNames(names)).not.contain('Star fruit');
    });

    //Test 2 - names without 'S' should remain untouched
    it('Should not remove other names', () =>{
        const names = ['Apple', 'Strawberry', 'PineApple'];
        expect(removeSNames(names)).toContain('Apple');
        expect(removeSNames(names)).toCcontain('PineApple');
    });

    //Test 3 - names without 'S' or 's' should not be present
    it('Should mind the case', () =>{
        const names = ['Apple', 'Strawberry', 'PineApple', 'strawberry'];
        expect(removeSNames(names)).toContain('Strawberry');
        expect(removeSNames(names)).toCcontain('strawberry');
    });
});