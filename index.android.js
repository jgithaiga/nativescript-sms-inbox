var app = require("application");
var Sms = require("./sms-model");
const constants = require("./constants");

exports.getInboxes = function(options) {
	var max = options.max || constants.READ_ALL_SMS,
		sort = options.sort || constants.DEFAULT_SORT_PROP,
		order = options.order || constants.DEFAULT_SORT_ORDER;
	return new Promise(function (resolve, reject) {
		var contentResolver = app.android.context.getContentResolver();
		var sortOrder = sort + " " + order + ((max == constants.READ_ALL_SMS) ? "" : " limit " + max);
		var columns = [ "_id", "thread_id", "address", "date", "date_sent", "body", "type" ];
		var cursor = contentResolver.query(android.net.Uri.parse(constants.CONTENT_SMS_INBOX_URI), 			
			columns, null, null, sortOrder);  
		var count = cursor.getCount();

		var smsList = [];
		if (count > 0) {			
			while (cursor.moveToNext()) {
                var smsModel = new Sms();
                smsModel.parseFromNative(cursor);
                smsList.push(smsModel);
            }
            cursor.close();
            resolve({ data: smsList, total: count, status: "success" });
		} else {
            cursor.close();
            resolve({ data: smsList, total: count, status: "success" });
        }

	});
};

exports.getInboxesFromNumber = function(fromNumber, options) {
	var max = options.max || constants.READ_ALL_SMS,
		sort = options.sort || constants.DEFAULT_SORT_PROP,
		order = options.order || constants.DEFAULT_SORT_ORDER;
	return new Promise(function (resolve, reject) {
		var contentResolver = app.android.context.getContentResolver();
		var sortOrder = sort + " " + order + ((max == constants.READ_ALL_SMS) ? "" : " limit " + max);
		var columns = [ "_id", "thread_id", "address", "date", "date_sent", "body", "type" ];
		var cursor = contentResolver.query(android.net.Uri.parse(constants.CONTENT_SMS_INBOX_URI), 
			columns, "address=?", [fromNumber], sortOrder);
		var count = cursor.getCount();

		var smsList = [];
		if (count > 0) {			
			while (cursor.moveToNext()) {
                var smsModel = new Sms();
                smsModel.parseFromNative(cursor);
                smsList.push(smsModel);
            }
            cursor.close();
            resolve({ data: smsList, total: count, status: "success" });
		} else {
            cursor.close();
            resolve({ data: smsList, total: count, status: "success" });
        }

	});
};

exports.deleteSms = function(smsId) {
	return new Promise(function (resolve, reject) {
		var contentResolver = app.android.context.getContentResolver();
		resolve(contentResolver.delete(android.net.Uri.parse(constants.CONTENT_SMS_URI + smsId), null, null));		
	});
}

exports.Sms = Sms;