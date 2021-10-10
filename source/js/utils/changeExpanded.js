export default function changeExpanded(element) {
	const currentStatus = element.ariaExpanded === "true";
	element.ariaExpanded = !currentStatus;
}
