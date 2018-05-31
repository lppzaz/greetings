describe('Tests the functionality of my greetings app', function() {
      it('Checks user name (Cobus)', function() {
        var greeting = Greet();
      greeting.greeter('Cobus' );
      assert.equal(greeting.greeter(), 'Cobus')
      });
    });
