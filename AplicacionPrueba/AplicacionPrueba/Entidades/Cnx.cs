using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacionPrueba.Entidades
{
    public class Cnx
    {
        private static string Sqlcon;
        public static string sqlcon
        {
            get { return Cnx.Sqlcon; }
            set { Cnx.Sqlcon = value; }
        }
    }
}
