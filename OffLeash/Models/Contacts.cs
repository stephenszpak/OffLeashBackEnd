using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace OffLeash.Models
{
    public class Contacts
    {
        [Key]
        public int ContactId { get; set; }

        public string DogName { get; set; }
        public string OwnerName { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
    }
}