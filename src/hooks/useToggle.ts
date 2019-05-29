import { useState, useCallback, Dispatch, SetStateAction } from 'react';

export default (initialValue: boolean): [boolean, Dispatch<SetStateAction<boolean>>] => {
   const [open, setOpen] = useState<boolean>(initialValue);
   return [open, useCallback((): void => setOpen(status => !status), [initialValue])];
};
