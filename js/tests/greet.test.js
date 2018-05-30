describe('Tests the functionality of my greetings app', function(){
  it('Checks user name (Cobus)', function(){
    var greeter = Greeting();
    greeter.name('Cobus');
    assert.deepEqual(greeter.userName(), 'Cobus');
  })
