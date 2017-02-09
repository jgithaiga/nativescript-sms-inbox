exports.convertNativeCursorToJson = function(cursor) {
    //noinspection JSUnresolvedFunction
    var count = cursor.getColumnCount();
    var results = {};

    for (var i = 0; i < count; i++) {
        var type = cursor.getType(i);
        //noinspection JSUnresolvedFunction
        var name = cursor.getColumnName(i);

        switch (type) {
            case 0: // NULL
                results[name] = null;
                break;
            case 1: // Integer
                //noinspection JSUnresolvedFunction
                results[name] = cursor.getInt(i);
                break;
            case 2: // Float
                //noinspection JSUnresolvedFunction
                results[name] = cursor.getFloat(i);
                break;
            case 3: // String
                results[name] = cursor.getString(i);
                break;
            case 4: // Blob
                results[name] = cursor.getBlob(i);
                break;
            default:
                throw new Error('Sms - Unknown Field Type '+ type);
        }
    }

    return results;
};