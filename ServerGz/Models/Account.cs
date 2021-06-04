using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ServerGz.Models
{
    public class Account
    {
        [Key]
        public string name {get;set;}
        public string password {get;set;}

    }


}