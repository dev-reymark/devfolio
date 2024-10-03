"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  Divider,
} from "@nextui-org/react";

export default function ModalComponent({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isDismissable={false}
      placement="center"
      //   backdrop="blur"
      hideCloseButton
      className="bg-warning-100"
      size="lg"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Notice</ModalHeader>

            <ModalBody className="mb-4">
              <p>
                The components used on this services page are provided directly
                from Tailwind CSS itself.
              </p>
              <p>
                If you are interested, you can directly access more components
                and templates from{" "}
                <a
                  href="https://tailwindui.com"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Tailwind UI
                </a>
                .
              </p>

              <p className="text-tiny">Thank you.</p>
            </ModalBody>

            <Divider />

            <ModalFooter className="flex justify-end">
              <Button
                color="primary"
                size="sm"
                variant="shadow"
                onPress={onClose}
              >
                Got it
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
