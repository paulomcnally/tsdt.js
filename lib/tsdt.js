/**
 * @name Tsdt
 */

var tsdt = {

    /**
     * @name    tsdt.isNumber
     * @param   number
     */
    isNumber: function( number ){
        return /^\-?([0-9]+|Infinity)$/.test( number );
    },

    /**
     * @name    tsdt.isNatural
     * @param   number
     */
    isNatural: function(number){
        var n = parseInt(number, 10);
        return n >= 0;
    },

    /**
     * @name    tsdt.isTinyint
     * @param   number
     * @url     http://technet.microsoft.com/en-us/library/ms187745.aspx
     */
    isTinyint: function( number ){
        var min = 0;
        var max = 255;

        if( this.isNatural( number ) ){
            number = parseInt( number, 10 );
            if( number <= max && number >= min){
                return true;
            }
            else{
                return false;
            }

        }
        else{
            return false;
        }
    },

    /**
     * @name    tsdt.isSmallint
     * @param   number
     * @url     http://technet.microsoft.com/en-us/library/ms187745.aspx
     */
    isSmallint: function( number ){
        var min = -32768;
        var max = 32767;

        if( this.isNatural( number ) ){
            number = parseInt( number, 10 );
            if( number <= max && number >= min){
                return true;
            }
            else{
                return false;
            }

        }
        else{
            return false;
        }
    },

    /**
     * @name    tsdt.isInt
     * @param   number
     * @url     http://technet.microsoft.com/en-us/library/ms187745.aspx
     */
    isInt: function (number) {
        var min = -2147483648;
        var max = 2147483647;

        if( this.isNumber( number ) ){
            if( number <= max && number >= min ){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    },

    /**
     * @name    tsdt.isBigint
     * @param   stringNumber
     * @url     http://technet.microsoft.com/en-us/library/ms187745.aspx
     */
    isBigint: function (stringNumber) {
        var min = '-9223372036854775808';
        var max = '9223372036854775807';


        // valid number
        if( !this.isNumber( stringNumber ) ){
            return false;
        }


        // end four digits
        if( stringNumber.length == 19 ){
            var four = stringNumber.substring( 19, 15 );
            if( four > 5807 ){
                return false
            }

        }

        // end four digits
        if( stringNumber.length == 20 && stringNumber.substring(0,1) == '-' ){
            var four = stringNumber.substring( 20, 16 );
            if( four > 5808 ){
                return false
            }
        }

        // Identical value
        if( stringNumber === max || stringNumber === min ){
            return true;
        }


        // Number regular expresion
        if(/^\-?\d{,19}$/.test(stringNumber)){
            return true;
        }

        return true
    },

    /**
     * @name    tsdt.isDecimal
     * @param   decimalNumber
     */
    isDecimal: function( decimalNumber ){
        return (String(decimalNumber).search(/^\d+(\.\d+)?$/) != -1);
    },

    /**
     * @name    tsdt.isEmpty
     * @param   string
     */
    isEmpty: function( string ){
        return string === null || string === undefined ? true : /^[\s\xa0]*$/.test(string);
    },

    /**
     * @name    tsdt.isChar
     * @param   string
     * @url     http://technet.microsoft.com/en-us/library/ms176089.aspx
     */
    isChar: function ( string ) {
        var min = 1;
        var max = 8000;

        if( this.isEmpty( string ) && typeof string === 'string' ){
            return false;
        }
        else{
            var length = string.split('').length;
            if( length <= max && length >= min ){
                return true;
            }
            else{
                return false;
            }

        }

    },

    /**
     * @name    tsdt.isVarchar
     * @param   string
     * @url     http://technet.microsoft.com/en-us/library/ms176089.aspx
     */
    isVarchar: function (string) {
        return this.isChar( string );
    },

    /**
     * @name    tsdt.isNchar
     * @param   string
     * @url     http://technet.microsoft.com/en-us/library/ms186939.aspx
     */
    isNchar: function ( string ) {
        var min = 1;
        var max = 4000;

        if( this.isEmpty( string ) && typeof string === 'string' ){
            return false;
        }
        else{
            var length = string.split('').length;
            if( length <= max && length >= min ){
                return true;
            }
            else{
                return false;
            }

        }

    },

    /**
     * @name    tsdt.isNvarchar
     * @param   string
     * @url     http://technet.microsoft.com/en-us/library/ms186939.aspx
     */
    isNvarchar: function (string) {
        return this.isNchar( string );
    },

    /**
     * @name    tsdt.isText
     * @param   string
     * @url     http://technet.microsoft.com/en-us/library/ms187993.aspx
     */
    isText: function ( string ) {
        var min = 1;
        var max = 2147483647;

        if( this.isEmpty( string ) && typeof string === 'string' ){
            return false;
        }
        else{
            var length = string.split('').length;
            if( length <= max && length >= min ){
                return true;
            }
            else{
                return false;
            }

        }

    },

    /**
     * @name    tsdt.isNtext
     * @param   string
     * @url     http://technet.microsoft.com/en-us/library/ms187993.aspx
     */
    isNtext: function ( string ) {
        var min = 1;
        var max = 1073741823;

        if( this.isEmpty( string ) && typeof string === 'string' ){
            return false;
        }
        else{
            var length = string.split('').length;
            if( length <= max && length >= min ){
                return true;
            }
            else{
                return false;
            }

        }

    },

    /**
     * @name    tsdt.isBinary
     * @param   string
     * @url     http://technet.microsoft.com/en-us/library/ms188362.aspx
     */
    isBinary: function ( string ) {
        var min = 1;
        var max = 8000;

        if( this.isEmpty( string ) && typeof string === 'string' ){
            return false;
        }
        else{
            var length = string.split('').length;
            if( length <= max && length >= min ){
                return true;
            }
            else{
                return false;
            }

        }

    },

    /**
     * @name    tsdt.isNvarchar
     * @param   string
     * @url     http://technet.microsoft.com/en-us/library/ms188362.aspx
     */
    isVarbinary: function (string) {
        return this.isBinary( string );
    },

    /**
     * @name    tsdt.isDate
     * @param   stringDate
     * @url     http://technet.microsoft.com/en-us/library/bb630352.aspx
     */
    isDate: function (stringDate) {
        return /^\d{4}-\d{2}-\d{2}$/.test( stringDate );
    },

    /**
     * @name    tsdt.idDatetime
     * @param   stringDatetime
     * @url     http://technet.microsoft.com/en-us/library/ms187819.aspx
     */
    idDatetime: function (stringDatetime) {
        if( /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test( stringDatetime ) || /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}.\d{,3}$/.test( stringDatetime ) ){
            return true;
        }
        else{
            return false;
        }
    },

    /**
     * @name    tsdt.idDatetime2
     * @param   stringDatetime
     * @url     http://technet.microsoft.com/en-us/library/bb677335.aspx
     */
    idDatetime2: function (stringDatetime) {
        if( /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test( stringDatetime ) || /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}.\d{,7}$/.test( stringDatetime ) ){
            return true;
        }
        else{
            return false;
        }
    },

    /**
     * @name    tsdt.idDatetimeoffset
     * @param   stringDatetime
     * @url     http://technet.microsoft.com/en-us/library/bb630289.aspx
     */
    idDatetimeoffset: function (stringDatetime) {
       return /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\s\d{2}:\d{2}$/.test( stringDatetime );

    },

    /**
     * @name    tsdt.isSmalldatetime
     * @param   stringDatetime
     * @url     http://technet.microsoft.com/en-us/library/ms182418.aspx
     */
    isSmalldatetime: function (stringDatetime) {
        return /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test( stringDatetime );

    },

    /**
     * @name    tsdt.isTime
     * @param   stringTime
     * @url     http://technet.microsoft.com/en-us/library/bb677243.aspx
     */
    isTime: function (stringTime) {
        return /^\d{2}:\d{2}:\d{2}$/.test( stringTime );

    },

    /**
     * @name    tsdt.isMoney
     * @param   stringNumber
     * @url     http://technet.microsoft.com/en-us/library/bb677243.aspx
     */
    isMoney: function (stringNumber) {
        return /^\-?\d{,15}.\d{,4}$/.test( stringNumber );

    },

    /**
     * @name    tsdt.isSmallmoney
     * @param   stringNumber
     * @url     http://technet.microsoft.com/en-us/library/bb677243.aspx
     */
    isSmallmoney: function (stringNumber) {
        return /^\-?\d{,6}.\d{,4}$/.test( stringNumber );

    }





};

module.exports = tsdt;