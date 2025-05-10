declare module '*.scss' {
  type IClassNames = {
    [className: string]: string;
  };
  const classNames: IClassNames;
  export = classNames;
}
declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const value: string;
  export default value;
}
declare module '*.mp3' {
  const value: string;
  export default value;
}
