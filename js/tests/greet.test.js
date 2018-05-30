describe('Tests the functionality of my greetings app', function() {
      it('Checks user name (Cobus)', function() {
        var greeting = Greet();
      assert.equal(greeting.greeter('Cobus','English'),'Cobus, English')
      });
    });
