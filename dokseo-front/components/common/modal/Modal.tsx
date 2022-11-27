import React from "react";
import styled from "styled-components";

type ModalProps = {
  children: React.ReactNode;
  modalState: boolean;
};

const Modal = ({ children, modalState }: ModalProps) => {
  return <Wrapper>{modalState && children}</Wrapper>;
};

export default Modal;

const Wrapper = styled.div``;
