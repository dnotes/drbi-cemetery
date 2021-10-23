/// <reference types="@sveltejs/kit" />

export type Gravesite = {
  slug:string
  name:string
  nickname?:string
  spellcheck?:string
  section?:SEARS|NEQ|NWQ|SEQ|SWQ
  row?:number
  site?:number
  born?:string
  deceased?:string
  image:string|Image
  html:string
  [key:string]:any
}

export type Image = {
  src:string,
  alt?:string,
  title?:string
}