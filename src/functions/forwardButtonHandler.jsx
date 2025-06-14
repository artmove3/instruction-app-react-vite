export const forwardButtonHandler = (bool, arr, currStep, func) => {
	return bool ? func(arr[0].id) : func(arr[Number(currStep)].id);
};
