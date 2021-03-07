using Algoritmo.Helpers;
using System;
using System.Text.RegularExpressions;

namespace Algoritmo
{
    class Program
    {
        static void Main(string[] args)
        {

            ChangeString  ChangeString = new ChangeString();

            Console.WriteLine("Introduzca un texto");
            var texto = Console.ReadLine();
            var response = ChangeString.build(texto);
            Console.WriteLine("El texto convertido es:{0}", response);
        }

    }
}
