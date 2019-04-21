import { useState, useCallback } from 'react';

export default (initialValue: boolean) => {
	const [open, setOpen] = useState<boolean>(initialValue);
	return [open, useCallback((): void => setOpen(status => !status), [status])];
};
