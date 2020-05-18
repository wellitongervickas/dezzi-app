export const namelize = (firstName, lastName) => String(`${firstName || ''} ${lastName || ''}`).trim();

export default namelize;
