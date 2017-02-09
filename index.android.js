var app = require("application");
var contentResolver = app.android.context.contentResolver;

const CONTENT_SMS_INBOX_URI = "content://sms/inbox";
const READ_ALL_SMS = -1;

exports.getAllMessages = function(options) {
	return new Promise(function (resolve, reject) {
		var sortOrder = "date DESC" + ((numberOfTexts == READ_ALL_SMS) ? "" : " limit " + numberOfTexts);
		var cursor = contentResolver.query(android.net.Uri.parse(CONTENT_SMS_INBOX_URI), null, null, null, sortOrder);

		if (cursor.getCount() > 0) {
			var smsList = [];
			while (cursor.moveToNext()) {
                var smsModel = new Sms();
                smsModel.initializeFromNative(cursor);
                smsList.push(smsModel);
            }
            cursor.close();
            resolve({ data: smsList, response: "fetch" });
		} else {
            cursor.close();
            resolve({ data: null, response: "fetch" });
        }

	});
};

exports.getMessagesByPhoneNumber = function(phoneNumber, options) {
	var numberOfTexts = options.max || READ_ALL_SMS;
	return new Promise(function (resolve, reject) {
		var sortOrder = "date DESC" + ((numberOfTexts == READ_ALL_SMS) ? "" : " limit " + numberOfTexts);
		var cursor = contentResolver.query(android.net.Uri.parse("content://sms/inbox"), null, "address=?", phoneNumber, sortOrder);

		if (cursor.getCount() > 0) {
			var smsList = [];
			while (cursor.moveToNext()) {
                var smsModel = new Sms();
                smsModel.initializeFromNative(cursor);
                smsList.push(smsModel);
            }
            cursor.close();
            resolve({ data: smsList, response: "fetch" });
		} else {
            cursor.close();
            resolve({ data: null, response: "fetch" });
        }

	});
};