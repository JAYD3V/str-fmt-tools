import { format as fmt } from 'node:util';
import { fmtRegExp } from './util.mjs';




type PrintFmtIndentOpts = {
   indentBy: number; useTabs: boolean; indentParagraph: boolean;
};

interface PrintFormatOpts {
   printWidth: number;
   indentation: PrintFmtIndentOpts | number;
}




/** #### PrintFormatter  */
export class Fmt {
   text;
   settings: PrintFormatOpts;


   constructor(str: string, opts: PrintFormatOpts){
      this.text = str;
      this.settings = opts;
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
