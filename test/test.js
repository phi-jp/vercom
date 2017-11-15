(function(global) {
  var vercom = global.vercom;
  if (typeof module !== 'undefined') {
    vercom = require('../vercom.js');
  }
  console.assert(vercom.equals('1', '1'));
  console.assert(vercom.equals('0', '0'));
  console.assert(vercom.equals('0.1', '0.1'));
  console.assert(vercom.equals('1.0.0.0', '1'));
  console.assert(vercom.equals('1.2.3.04', '1.2.03.4'));
  console.assert(!vercom.equals('2', '2.0.0.1'));
  console.assert(!vercom.equals('2', '2.0.0.1'));
  var v = vercom(5, 4, 3, 2);
  var v2 = vercom('5', '4', '3', '2');
  var v3 = vercom(v);
  console.assert(v.equals(v2));
  console.assert(v2.equals(v));
  console.assert(v.equals(v3));
  console.assert(v3.equals(v));
  console.assert(v3.equals(v2));
  console.assert(v2.equals(v3));
  console.assert(v.equals(v));
  console.assert(v2.equals(v2));
  console.assert(v3.equals(v3));
  console.assert(vercom.compare(v, 1) === 1);
  console.assert(vercom.compare(v, '5.4.3.1') === 1);
  console.assert(vercom.compare(v, '5.4.2.100') === 1);
  console.assert(vercom.compare(v, '5.3.30.11') === 1);
  console.assert(vercom.compare('4.999.3.1', v) === -1);
  console.assert(vercom.compare(v, '1000.4.3.1') === -1);
  console.assert(vercom.compare(v, '6.5.4.3') === -1);
  console.assert(vercom.compare('5.5.0.0', v2) === 1);
  console.assert(vercom.compare(v3, '5.4.4.0') === -1);
  console.assert(vercom.compare(v, '5.4.3.3') === -1);
  console.assert(vercom.compare(v, '5.4.3.2') === 0);;
  console.assert(vercom.equals('5', v, 'major'));
  console.assert(vercom.compare(v, '5', 'minor') === 1);
  console.assert(vercom.equals(v, v2, 'minor'));
  console.assert(vercom.equals(v, v2, 'build'));
  console.assert(vercom.equals(v, v2, 'revision'));

  console.assert(v.compare(1) === 1);
  console.assert(v.compare('5.4.3.1') === 1);
  console.assert(v.compare('5.4.2.100') === 1);
  console.assert(v.compare('5.3.30.11') === 1);
  console.assert(vercom('4.999.3.1').compare(v) === -1);
  console.assert(v.compare('1000.4.3.1') === -1);
  console.assert(v.compare('6.5.4.3') === -1);
  console.assert(vercom('5.5.0.0').compare(v2) === 1);
  console.assert(v.compare('5.4.3.3') === -1);
  console.assert(v.compare('5.4.3.2') === 0);;
  console.assert(v.compare('5.0.0.0', 'minor') === 1);
  console.assert(v.equals(v2, 'minor'));
  console.assert(v.equals(v2, 'build'));
  console.assert(v2.equals(v, 'revision'));

  console.assert(v.major(10).major() === 10);
  console.assert(v.minor(20).minor() === 20);
  console.assert(v.build(30).build() === 30);
  console.assert(v.revision(40).revision() === 40);
  console.assert(v.toString() === '10.20.30.40');
  console.assert([v].join() === '10.20.30.40');
  console.assert(v.equals('10.20.30.40'));
  console.assert(v.version('9.8.7.6').version() === '9.8.7.6');
  console.assert(v.set(v3).equals(v3));
  console.assert(vercom._safe(v3) === v3);
  console.assert(vercom.isVercom(v));
  console.assert(!v3.set('5').equals(v));
  console.assert(v3.version('5').equals(5, 'major'));
  console.assert(v.set(1, 2, 3, 4).equals('1.2.3.4', 'revision'));
  console.assert(v.equals('1.2.3.0', 'build'));
  console.assert(v.equals('1.2.0.0', 'minor'));
  console.assert(v.equals('1.0.0.0', 'major'));
  console.assert(!v.equals('2', 'major'));
  console.assert(!v.equals('1', 'minor'));
  console.assert(!v.equals('1.2', 'build'));
  console.assert(!v.equals('1.2.3.0', 'revision'));
  console.assert(!v.equals('1.2.3'));
  var vc = v.clone();
  console.assert(vc !== v);
  console.assert(vc.equals(v));

  console.log('TEST OK');

  global.alert && global.alert('TEST OK');

}(this));