﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace OffLeash.Models
{
    public class Favorites
    {
        [Key]
        public int FavoriteId { get; set; }

        public int PlaceId { get; set; }
        public string Name { get; set; }
    }
}