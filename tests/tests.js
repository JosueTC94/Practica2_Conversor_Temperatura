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
    test('57C = 134.600 Farenheit', function() {
        original.value = "57C";
        calculate();
        assert.deepEqual(converted.innerHTML, "134.600º F");
    });
    test('-77C = -106.600 Farenheit', function() {
        original.value = "-77C";
        calculate();
        assert.deepEqual(converted.innerHTML, "-106.600º F");
    });
    test('32F != 1.000C', function()
    {
	original.value = "32F";
	calculate();
	assert.notEqual(converted.innerHTML, "1.000º F");
    });
    test('85C < 180.000 Farenheit',function()
    {
	original.value = "85C";
	calculate();
	assert.isBelow(converted.innerHTML, "180.000º F");
    }
});
