export function formatTimeAgo(timestamp) {
	const timeDiff = Math.floor((new Date() - new Date(timestamp)) / 1000);
	const minute = 60;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;

	if (isNaN(timeDiff) || timeDiff < 0) {
		return '';
	}

	if (timeDiff < minute) {
		return 'just now';
	} else if (timeDiff < hour) {
		const diff = Math.floor(timeDiff / minute);
		return `${diff} minute${diff > 1 ? 's' : ''} ago`;
	} else if (timeDiff < day) {
		const diff = Math.floor(timeDiff / hour);
		return `${diff} hour${diff > 1 ? 's' : ''} ago`;
	} else if (timeDiff < week) {
		const diff = Math.floor(timeDiff / day);
		return `${diff} day${diff > 1 ? 's' : ''} ago`;
	} else {
		const diff = Math.floor(timeDiff / week);
		return `${diff} week${diff > 1 ? 's' : ''} ago`;
	}
}
