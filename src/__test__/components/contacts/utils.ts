import { fireEvent } from "@testing-library/react";

export const changeInputValue = (
  container: HTMLElement,
  testId: string,
  value: string
) => {
  const inputElement = container.querySelector(
    `[data-testid="${testId}"] input`
  );
  if (!inputElement) {
    return new Error(`Input element with data-testid "${testId}" not found`);
  }
  fireEvent.change(inputElement, { target: { value } });
};

export const changeTextareaValue = (
  container: HTMLElement,
  testId: string,
  value: string
) => {
  const inputElement = container.querySelector(
    `[data-testid="${testId}"] textarea`
  );
  if (!inputElement) {
    return new Error(`Input element with data-testid "${testId}" not found`);
  }
  fireEvent.change(inputElement, { target: { value } });
};
