var app = require("application");
const constants = require("./constants");

var Sms = (function () {
	function Sms() {
		this.id = "";
		this.threadId = "";
		this.fromNumber = "";
		this.message = "";
		this.date = "";
		this.sentDate = "";
		this.type = "";

		this.uuid = "";
	};

	Sms.prototype.parseFromNative = function(cursor) {
		this.id = cursor.getInt(cursor.getColumnIndex(constants.SMS_ID_COLUMN));
		this.threadId = cursor.getInt(cursor.getColumnIndex(constants.SMS_THREAD_ID_COLUMN));
		this.fromNumber = cursor.getString(cursor.getColumnIndex(constants.SMS_ADDRESS_COLUMN));
		this.message = cursor.getString(cursor.getColumnIndex(constants.SMS_BODY_COLUMN));
		this.date = cursor.getString(cursor.getColumnIndex(constants.SMS_DATE_COLUMN));
		this.sentDate = cursor.getString(cursor.getColumnIndex(constants.SMS_DATE_SENT_COLUMN));
		this.type = cursor.getInt(cursor.getColumnIndex(constants.SMS_TYPE_COLUMN));

		this.uuid = `SMS${this.id}-${this.date}-${this.fromNumber}`;
    };

	return Sms;
})();

module.exports = Sms;