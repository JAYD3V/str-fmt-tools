import { DEFAULT_ECDH_CURVE } from 'node:tls';
import { fmtRegExp } from './util.mjs';



type PrintFmtIndentOpts = {
   indentBy: number; useTabs: boolean; indentParagraph: boolean;
};



interface PrintFormatOpts {
   printWidth: number;
   indentation: PrintFmtIndentOpts | number;
}



/** #### PrintFormatter  */
export class TextFormat {
   text;
   settings;
   foobar: string;

   constructor(str: string, opts: {
      indentBy: number; useTabs: boolean; indent: boolean;
   }){
      this.text = str;
      this.settings = opts;
      this.foobar = 'Hello World';
   }

   wrapAndSplit(str: string, len: number){
      const regexp = fmtRegExp('(.{1,%d})(\\s)', 'g', len);
      const matches = (str + ' ').matchAll(regexp);

      let match;
      let wrappedStr = '';

      for (match of matches){ wrappedStr += match.at(1) + '\n'; }

      return wrappedStr.trim();
   }
}


const fmt = new TextFormat('foo', {
   indentBy : 0,
   useTabs  : false,
   indent   : false,
});

let test = true;

if (fmt.wrapAndSplit('apple', 22)){
   test = false;
}
