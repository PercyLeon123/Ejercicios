using System;
using System.Collections.Generic;
using System.Text;

namespace Algoritmo2.Helpers
{
    class OrderRange
    {

        public string build(int[] numeros) 
        {

            string pares = "[";
            string impares = "[";

            for (int i = 0; i< numeros.Length; i++ )
            {
                if (numeros[i] % 2 == 0)
                    pares += numeros[i]+",";
                else
                    impares += numeros[i] + ",";
            }
            pares = pares.Remove(pares.Length - 1);
            impares = impares.Remove(impares.Length - 1);
            pares += "]";
            impares += "]";

            return pares + " " + impares;
        }
    }
}
