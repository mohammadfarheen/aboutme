


QUnit.test("TestCircle",function(assert)
{
    var res=circumference(3);
    assert.equal(res, "18.84" ,"circumference of circle is  18.84");
});

QUnit.test("TestCircle",function(assert)
{
    var res=circumference(4);
    assert.equal(res, "25.12" ,"circumference of circle is  25.12");

});

QUnit.test("TestCircle",function(assert)
{
    var res=circumference(7);
    assert.equal(res, "43.96" ,"circumference of circle is  43.96");
});

QUnit.test("TestCircle",function(assert)
{
    var res=circumference(6);
    assert.equal(res, "37.68" ,"circumference of circle is  37.68");
});

QUnit.test ("TestCircle",function(assert)
{
    var res=circumference(9);
    assert.equal(res, "56.52" ,"circumference of circle is  56.52");
});
QUnit.test("TestCircle",function(assert)
{
    var res=circumference("a");
    assert.throw(res, "t" ,"circumference of circle is  -12.56");

});
