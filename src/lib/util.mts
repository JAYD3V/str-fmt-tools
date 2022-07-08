import { format } from 'node:util';



export function fmtRegExp(patt:string, flags:string | null, ...args:Array<any>){
   return new RegExp(format(patt, ...args), (flags ??= ''));
}

const a = 'foo';
const x = `${a} = boohoo `;

//

/*
"scope": [
   "string.template",
   "punctuation.definition.string.template",
   "string.template meta.template.expression meta.embedded.line variable.other"
],

 */
