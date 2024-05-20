const jsPDFMock = jest.fn(() => ({
  output: () => "mocked pdf content",
}));

export default jsPDFMock;
