var app = require("application");

var helper = require("./sms-helper");

var SMS_ID_COLUMN = "_id";
var SMS_ADDRESS_COLUMN = "address";
var SMS_BODY_COLUMN = "body";
var SMS_DATE_COLUMN = "date";
var SMS_TYPE_COLUMN = "type";

var Sms = (function () {
	function Sms() {
		this.id = "";
		this.phoneNumber = "";
		this.message = "";
		this.sentDate = "";
		this.type = "";
	};

	Sms.prototype.initializeFromNative = function(cursor) {
		var jsonCursor = helper.convertNativeCursorToJson(cursor);
		this.id = jsonCursor[SMS_ID_COLUMN];
		this.phoneNumber = jsonCursor[SMS_ADDRESS_COLUMN];
		this.message = jsonCursor[SMS_BODY_COLUMN];
		this.sentDate = jsonCursor[SMS_DATE_COLUMN];
		this.type = jsonCursor[SMS_TYPE_COLUMN];
    };

	return Sms;
})();

module.exports = Sms;