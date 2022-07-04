import { format } from 'node:util';



export function fmtRegExp(patt:string, flags:string | null, ...args:Array<any>){
   return new RegExp(format(patt, ...args), (flags ??= ''));
}
