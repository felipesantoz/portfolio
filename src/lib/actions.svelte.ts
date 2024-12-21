import type { Action } from 'svelte/action';

export const modalActions: Action<
	HTMLDivElement,
	undefined,
	{ onclickoutside: (e: CustomEvent) => void }
> = (node) => {
	$effect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				node &&
				(!(event.target instanceof Element) ||
					(!node.contains(event.target) && !event.defaultPrevented))
			) {
				node.dispatchEvent(new CustomEvent('clickoutside'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	});
};
