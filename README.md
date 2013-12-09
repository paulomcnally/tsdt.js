# tsdt.js

Transact-SQL Data Types validator for JavaScript

## int, bigint, smallint, and tinyint (Transact-SQL)

    var tsdt = require('tsdt');

    console.log( 'int: ' + tsdt.isInt( 2147483648 ) ); // -2^31 (-2147483648) to 2^31-1 (2147483647)

    console.log( 'bigint: ' + tsdt.isBigint( '9223372036854775809' ) ); // -2^63 (-9223372036854775808) to 2^63-1 (9223372036854775807)

    console.log( 'smallint: ' + tsdt.isSmallint( 32768 ) ); // -2^15 (-32768) to 2^15-1 (32767)

    console.log( 'tinyint: ' + tsdt.isTinyint(256) ); // 0 to 255

Source: [http://technet.microsoft.com/en-us/library/ms187745.aspx](http://technet.microsoft.com/en-us/library/ms187745.aspx)

## char and varchar (Transact-SQL)

    var tsdt = require('tsdt');

    console.log( 'char: ' + tsdt.isChar( 'abcd' ) );

    console.log( 'varchar: ' + tsdt.isVarchar( 'abcd' ) );

Source: [http://technet.microsoft.com/en-us/library/ms176089.aspx](http://technet.microsoft.com/en-us/library/ms176089.aspx)



