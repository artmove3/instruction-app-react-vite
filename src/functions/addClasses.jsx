export const addClasses = (prop1, prop2) => {
	let returnClass = '';
	if (prop1 === prop2) returnClass = 'active';
	else if (prop1 >= prop2) returnClass = 'done';
	return returnClass;
};
