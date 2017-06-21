/**
 * Get all text messages in the sms inbox.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxes(options: Options): Promise<Response>;

/**
 * Get all text messages in the sms inbox after a given date timestamp.
 * @param {string} timestamp - The date timestamp after which get SMS inbox messages.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxesAfterDate(timestamp: number, options: Options): Promise<Response>;

/**
 * Get all text messages in the sms inbox between the given date timestamps
 * @param {string} startTimestamp - The start date timestamp after which get SMS inbox messages.
 * @param {string} endTimestamp - The end date timestamp before which get SMS inbox messages.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxesBetweenDates(startTimestamp: number, endTimestamp: number, options: Options): Promise<Response>;

/**
 * Get all text messages in the sms inbox after a given sent date timestamp.
 * @param {string} timestamp - The date timestamp after which get SMS inbox messages.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxesAfterSentDate(timestamp: number, options: Options): Promise<Response>;

/**
 * Get all text messages in the sms inbox between the given sent date timestamps.
 * @param {string} startTimestamp - The start date timestamp after which get SMS inbox messages.
 * @param {string} endTimestamp - The end date timestamp before which get SMS inbox messages.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxesBetweenSentDates(startTimestamp: number, endTimestamp: number, options: Options): Promise<Response>;

/**
 * Get all text messages in the sms inbox sent by the provided fromNumber.
 * @param {string} fromNumber - The number on which to filter SMS inbox messages.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxesFromNumber(fromNumber: string, options: Options): Promise<Response>;

/**
 * Remove an sms instance from the sms list by its id
 * @param {number} smsId - The id of the sms to be deleted
 * @returns {Promise} response
 */
export function deleteSms(smsId: number): Promise<Response>;

interface Options {
	max?: number; 
	sort?: string; // Either 'date', 'address', 'type', '_id', 'body'
	order?: string; // Either 'ASC' or 'DESC'
}

interface Sms {	
	id: number;
	uuid: string;
	type: number;
	date: number;
	sentDate: number;
	threadId: number;
	fromNumber: string;
	message: string;	
}

interface Response {
    data?: Array<Sms>;
	total: number; 
	status: string
}