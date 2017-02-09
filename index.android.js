var appModule = require("application");
var Sms = require("./sms-model");

const CONTENT_SMS_INBOX_URI = "content://sms/inbox";
const READ_ALL_SMS = -1;

exports.getInboxes = function(options) {
	var numberOfTexts = options.max || READ_ALL_SMS;
	return new Promise(function (resolve, reject) {
		var contentResolver = appModule.android.context.getContentResolver();
		var sortOrder = "date DESC" + ((numberOfTexts == READ_ALL_SMS) ? "" : " limit " + numberOfTexts);
		var cursor = contentResolver.query(android.net.Uri.parse(CONTENT_SMS_INBOX_URI), null, null, null, sortOrder);
		var count = cursor.getCount();

		if (count > 0) {
			var smsList = [];
			while (cursor.moveToNext()) {
                var smsModel = new Sms();
                smsModel.initializeFromNative(cursor);
                smsList.push(smsModel);
            }
            cursor.close();
            resolve({ data: smsList, total: count, status: "success" });
		} else {
            cursor.close();
            resolve({ data: null, total: count, status: "success" });
        }

	});
};

exports.getInboxesFromNumber = function(fromNumber, options) {
	var numberOfTexts = options.max || READ_ALL_SMS;
	return new Promise(function (resolve, reject) {
		var contentResolver = appModule.android.context.getContentResolver();
		var sortOrder = "date DESC" + ((numberOfTexts == READ_ALL_SMS) ? "" : " limit " + numberOfTexts);
		var cursor = contentResolver.query(android.net.Uri.parse("content://sms/inbox"), null, "address=?", [fromNumber], sortOrder);
		var count = cursor.getCount();

		if (count > 0) {
			var smsList = [];
			while (cursor.moveToNext()) {
                var smsModel = new Sms();
                smsModel.initializeFromNative(cursor);
                smsList.push(smsModel);
            }
            cursor.close();
            resolve({ data: smsList, total: count, status: "success" });
		} else {
            cursor.close();
            resolve({ data: null, total: count, status: "success" });
        }

	});
};

exports.Sms = Sms;