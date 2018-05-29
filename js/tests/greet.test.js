describe('Checks for name', function() {
      it('sets name if not in map', function() {
        var newInstance = SettingsBill()
        newInstance.callCost(5);
        newInstance.billItem('call');
        newInstance.billItem('call')
        assert.equal(newInstance.callsTotal(), 10)
      });

