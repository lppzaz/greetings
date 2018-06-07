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
describe('Tests the functionality of my greetings app', function() {
      it('Checks no name entered error.', function() {
        var greetingz = Greet()
	greetingz.greeter("",'English');
        assert.equal(greetingz.greeter('error no name'))
      });
    });
describe('Tests the functionality of my greetings app', function() {
      it('Checks no name entered error.', function() {
        var greetingz = Greet()
	greetingz.greeter("Cobus",'');
        assert.equal(greetingz.greeter('error no language'))
      });
    });
 describe('Tests the functionality of my greetings app', function() {
          it('Checks if counter is working for capitals versus no capitals', function() {
            var greetingz = Greet()
            greetingz.greeter("Cobus",'English');
            greetingz.greeter("cobus",'English');
            greetingz.greeter("COBUS",'English');
            assert.equal(greetingz.counter(),1)
          });
        });

