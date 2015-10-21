describe("e2e", function() {
  var values ={
    text:     'John',
    email:    'john@provider.com',
    tel:      '12 3456789',
    select:   'green',
    textarea: 'Lorem ipsum\n',
    color:    '#ffaacc',
    range:    '10',
    search:   'my name is',
    url:      'http://google.com',
    password: 'password123',
    number: '34'
  }

  function assertValue(key){
    return function(){
      var input = element(by.id(key)).getAttribute('value');
      expect(input).toBe(values[key]);
    }
  };

  for (key in values) {
    it(key, assertValue(key));
  }

  it("input[type='checkbox']:checked", function() {
    var check = element(by.id('check_dog')).isSelected();
    expect(check).toBeTruthy();
  });

  it("input[type='checkbox']:not(checked)", function() {
    var check = element(by.id('check_cat')).isSelected();
    expect(check).toBe(false);
  });

  it("input[type='radio']:checked", function() {
    var radio = element(by.id('radio_male')).isSelected();
    expect(radio).toBe(true);
  });

  it("input[type='radio']:not(checked)", function() {
    var radio = element(by.id('radio_female')).isSelected();
    expect(radio).toBe(false);
  });
});
