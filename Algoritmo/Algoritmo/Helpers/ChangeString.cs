using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Algoritmo.Helpers
{
    class ChangeString
    {
        public string build(string cadena) 
        {
            string resp = "";
            string[] abc = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" };
            for (int i=0; i< cadena.Length; i++) 
            {
                var letra = cadena.Substring(i,1);
                if (Regex.IsMatch(letra, @"^[a-zA-Z]+$")) 
                {
                    for (int e = 0; e < abc.Length; e++)
                    {
                       
                        if (abc[e].ToUpper() == letra.ToUpper())
                        {
                            letra = (letra.Any(c => char.IsUpper(c))) ? abc[e + 1].ToUpper() : abc[e + 1];
                            break;
                        }
                    }   
                    resp += letra;
                }
                else 
                {
                    resp += letra;
                }

            }

            return resp;
        }
    }
}
