import { Spring } from 'svelte/motion';

export const IconSize = () => {
	const iconSize = new Spring(3);
	return {
		current: () => iconSize.current,
		handleEnter: handleEnter(iconSize),
		handleLeave: handleLeave(iconSize)
	};
};

export const handleEnter = (iconSize: Spring<number>) => () => {
	iconSize.target = 4;
};
export const handleLeave = (iconSize: Spring<number>) => () => {
	iconSize.target = 3;
};
