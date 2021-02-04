using Algoritmo2.Helpers;
using System;

namespace Algoritmo2
{
    class Program
    {
        static void Main(string[] args)
        {

            OrderRange OrderRange = new OrderRange();
            int[] numbers = { 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 4, 5, 8 };
            Console.WriteLine(OrderRange.build(numbers));
            Console.ReadLine();
        }
    }
}
