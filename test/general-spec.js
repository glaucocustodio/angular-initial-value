describe("e2e", function() {
  it("input[type='text']", function() {
    var name = element(by.id('name')).getAttribute('value');
    expect(name).toBe('John');
  });

  it("input[type='email']", function() {
    var email = element(by.id('email')).getAttribute('value');
    expect(email).toBe('john@provider.com');
  });

  it("input[type='tel']", function() {
    var tel = element(by.id('tel')).getAttribute('value');
    expect(tel).toBe('12 3456789');
  });

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

  it("select option:selected", function() {
    var select = element(by.id('fav_color')).getAttribute('value');
    expect(select).toBe('green');
  });

  it("textarea", function() {
    var textarea = element(by.id('notes')).getAttribute('value');
    expect(textarea).toBe('Lorem ipsum');
  });
});