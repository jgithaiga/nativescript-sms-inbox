/**
 * Get all text messages in the sms inbox.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxes(options: any): Promise<response>;

/**
 * Get all text messages in the sms inbox sent by provided fromNumber.
 * @param {string} fromNumber - The number on which to filter SMS inbox messages.
 * @param {any} options - A map of parameters e.g. max (for max results), etc.
 * @returns {Promise} response
 */
export function getInboxesFromNumber(fromNumber: string, options: any): Promise<response>;

interface response {

    data: any;
	total: number; 
	status: string

}