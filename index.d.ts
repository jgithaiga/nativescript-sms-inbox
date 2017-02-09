/**
 * Get all text messages in the sms inbox.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxes(options: Options): Promise<Response>;

/**
 * Get all text messages in the sms inbox sent by the provided fromNumber.
 * @param {string} fromNumber - The number on which to filter SMS inbox messages.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxesFromNumber(fromNumber: string, options: Options): Promise<Response>;

interface Options {
	max?: number; 
	sort?: string; // Either 'date', 'address', 'type', '_id', 'body'
	order?: string; // Either 'ASC' or 'DESC'
}

interface Sms {	
	id: number;
	type: number;
	sentDate: number;
	fromNumber: string;
	message: string;	
}

interface Response {
    data: Array<Sms>;
	total: number; 
	status: string
}