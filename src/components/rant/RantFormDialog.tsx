import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import RantForm from './RantForm';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';

export default function RantFormDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            return setConfirmationOpen(true);
          }

          setIsOpen(open);
        }}
      >
        <DialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/80 mx-auto w-fit cursor-pointer rounded-md px-2.5 py-2 text-sm font-medium">
          Got something to share?
        </DialogTrigger>
        <DialogContent className={'md:max-w-[750px]'}>
          <RantForm closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
      {/* Confirmation dialog */}
      <AlertDialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Change your mind?</AlertDialogTitle>
            <AlertDialogDescription>
              Your words will be lost forever… or at least until you type them
              again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Never mind</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setConfirmationOpen(false);
                handleClose();
              }}
            >
              Goodbye, words
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
