export interface IProduct {
  title:       string;
  description: string;
  image:       string;
  price:       number;
  priceType:   string; // CALCULATION / FIXED
  formula:   string;
  tabs:        IProductTab[];
  options?:    IProductOptions;
  category?: string; 
  name?: string; 
}

export interface IProductOptions {
  size?:       IOption;
  quantity?:    IOption;
  locations?:  IOption;
  design?:     IOption;
  width?:      IOption;
  height?:     IOption;
  lamination?: IOption;
  inkblock?:   IOption;
}

export interface IOption {
  label?:   string;
  type?:    string; // int, float, dropdown, imagechoice
  required?: boolean;
  min?:      number;
  max?:     number;
  acceptedTypes?: IAcceptedType[];
  conditionalVisibility?: string;
  saveTo?: string;
  options?: {
    label?: string;
    value?: number;
    image?: string;
  }[]
}

enum IAcceptedType {
  AI = ".ai",
  Eps = ".eps",
  Jpg = ".jpg",
  PDF = ".pdf",
  PNG = ".png",
  Psd = ".psd",
  SVG = ".svg",
}

interface IProductTab {
  label:   string;
  content: string;
}
