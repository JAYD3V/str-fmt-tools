export class FormatText {
   strz: string[];


   constructor(...strz: string[]){
      this.strz = strz;
      this.compareStrz();
   }


   private compareStrz(){
      let longest;

      this.strz.forEach((str, i) => {
         if (str.length > longest.length || i == 0){
            longest = str;
         }
      });
   }
}



export function sumOf(alpha: number, beta: number){
   if (typeof alpha !== 'number'){
      throw new TypeError('Alpha is not a num');
   }

   return alpha + beta;
}
