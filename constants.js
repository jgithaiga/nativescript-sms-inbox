function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("CONTENT_SMS_URI", "content://sms");
define("CONTENT_SMS_INBOX_URI", "content://sms/inbox");

define("SMS_ID_COLUMN", "_id");
define("SMS_THREAD_ID_COLUMN", "thread_id");
define("SMS_ADDRESS_COLUMN", "address");
define("SMS_BODY_COLUMN", "body");
define("SMS_DATE_COLUMN", "date");
define("SMS_DATE_SENT_COLUMN", "date_sent");
define("SMS_TYPE_COLUMN", "type");

define("DEFAULT_SORT_PROP", "date");
define("DEFAULT_SORT_ORDER", "DESC");
define("READ_ALL_SMS", -1);

//define("", "");
