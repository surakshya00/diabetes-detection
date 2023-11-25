"use client";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface PredictionModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasDiabetes: boolean;
}

export default function PredictionModal({
  isOpen,
  onClose,
  hasDiabetes,
}: PredictionModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bgColor="#121212e6" />
      <ModalContent
        bgGradient={
          hasDiabetes
            ? "linear(to-r, red.700, red.500)"
            : "linear(to-r, green.600, green.400)"
        }
        color="white"
      >
        <ModalHeader>Prediction Result</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            h="200px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Text fontSize="4xl" borderRadius="100%">
              {hasDiabetes ? <CloseIcon /> : <CheckIcon />}
            </Text>

            <Text fontSize="xl" mt="5" fontWeight="bold">
              {hasDiabetes
                ? "You may be at risk of diabetes"
                : "You may be at low risk of diabetes"}
            </Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
