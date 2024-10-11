export { };

declare global {
  interface Window {
    showDirectoryPicker: function;
  }

  type TFile = {
    name: string
    path: string
    fileHandle: any
  }
}
