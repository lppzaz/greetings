describe('Tests the functionality of my greetings app', function() {
      it('Checks user name (Cobus) and greets me in (English)', function() {
        var greetingz = Greet()
        greetingz.greeter("Cobus",'English');
        assert.equal(greetingz.greeter('Hello, Cobus'))
      });
    });
    describe('Tests the functionality of my greetings app', function() {
          it('Checks if counter is working', function() {
            var greetingz = Greet()
            greetingz.greeter("Cobus",'English');
            greetingz.greeter("James",'English');
            greetingz.greeter("Jack",'English');
            assert.equal(greetingz.counter(),3)
          });
        });
        describe('Tests the functionality of my greetings app', function() {
              it('Checks counter does not count duplicate names, this test should fail', function() {
                var greetingz = Greet()
                greetingz.greeter("Cobus",'English');
                greetingz.greeter("Cobus",'English');
                greetingz.greeter("Cobus",'English');
                assert.notEqual(greetingz.counter(),3)
              });
            });

describe('Tests the functionality of my greetings app', function() {
      it('Checks counter does not count when no data is entered.', function() {
        var greetingz = Greet()
        assert.equal(greetingz.counter(),0)
      });
    });
