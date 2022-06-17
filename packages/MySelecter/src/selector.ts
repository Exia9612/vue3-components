export interface IInputProps {
  placeholder: string
}

export interface IMeunItemData {
  id: string | number,
  value: string | number,
  text: string
}

export interface ISelectorMenuProps {
  data: IMeunItemData[]
}

export interface IMenuState {
  searchData: IMeunItemData[]
}

