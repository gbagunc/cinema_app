export interface IModalSlice {
  opened: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}
