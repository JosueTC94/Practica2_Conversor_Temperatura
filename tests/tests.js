var assert = chai.assert;

suite('temperatura', function() {
    test('32F = 0.000C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.000º C");
    });
    test('45C = 113.000 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.000º F");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
