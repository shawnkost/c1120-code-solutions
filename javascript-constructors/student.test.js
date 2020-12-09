/* global Student, expect */

describe('Student', function () {

  beforeEach(function () {
    expect(Student).to.be.a('function');
  });

  describe('new Student(firstName, lastName, subject)', function () {

    it('has firstName, lastName, and subject properties', function () {
      var grace = new Student('Grace', 'Hopper', 'compilers');
      expect(grace)
        .to.have.own.property('firstName')
        .that.equals('Grace');
      expect(grace)
        .to.have.own.property('lastName')
        .that.equals('Hopper');
      expect(grace)
        .to.have.own.property('subject')
        .that.equals('compilers');
    });

    it('has getFullName() and getIntroduction() prototype methods', function () {
      var ron = new Student('Ron', 'Jeffries', 'extreme programming');
      expect(ron).not.to.have.own.property('getFullName');
      expect(ron).to.respondTo('getFullName');
      expect(ron).not.to.have.own.property('getIntroduction');
      expect(ron).respondTo('getIntroduction');
    });

    describe('student.getFullName()', function () {

      it('returns the full name of the student', function () {
        var edsger = new Student('Edsgar', 'Dijkstra', 'computer science');
        var fullName = edsger.getFullName();
        expect(fullName).to.equal('Edsgar Dijkstra');
      });

    });

    describe('student.getIntroduction()', function () {

      it('returns an introduction for the student', function () {
        var grady = new Student('Grady', 'Booch', 'software engineering');
        var introduction = grady.getIntroduction();
        expect(introduction).to.equal(
          'Hello, my name is Grady Booch and I am studying software engineering.'
        );
      });

    });

  });

});
