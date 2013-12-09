var tsdt = require('../lib/tsdt');

console.log( 'number: ' + tsdt.isNumber( 10 ) );

console.log( 'natural: ' + tsdt.isNatural(-10) );

console.log( 'tinyint: ' + tsdt.isTinyint(256) ); // 0 to 255

console.log( 'int: ' + tsdt.isInt( 2147483648 ) ); // -2^31 (-2147483648) to 2^31-1 (2147483647)

console.log( 'smallint: ' + tsdt.isSmallint( 32768 ) ); // -2^15 (-32768) to 2^15-1 (32767)

console.log( 'bigint: ' + tsdt.isBigint( '-9223372036854775809' ) ); // -2^63 (-9223372036854775808) to 2^63-1 (9223372036854775807)



console.log( 'char: ' + tsdt.isChar( 'abcd' ) );

console.log( 'varchar: ' + tsdt.isVarchar( 'abcd' ) );
