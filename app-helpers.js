

/**
 * makeCapitalizeSentence
 * 
 * @param string
 * @returns {string capitalize | *|*}
 */
export const makeCapitalizeSentence = (string) => {
	return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || ''
}



/**
 * Making random string
 *
 * @param {int} limit
 * @return {string}
 */
export const makeRandomString = (limit = 8) => {
	return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).slice(-limit).toUpperCase();
};



/**
 * Making Unique Id
 *
 * @param {} 
 * @return {uniqueId}
 */
export const makeUniqueId = () => {
	let randomLetter = String.fromCharCode(65 + Math.floor(Math.random().toString(36).substring(2, 15) * 26));
	let uniqueId = randomLetter + Date.now();
	return uniqueId
}
