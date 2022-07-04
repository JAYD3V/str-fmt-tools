import { format as fmt } from 'node:util';

function wrap(str: string, len = 80): string{
   const regexp = new RegExp(fmt('(.{1,%d})(\\s)', len), 'g');
   const matches = (str + ' ').matchAll(regexp);

   let match;
   let wrappedStr = '';

   for (match of matches){ wrappedStr += match.at(1) + '\n'; }

   return wrappedStr.trim();
}
