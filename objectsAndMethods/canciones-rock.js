// Dataset de canciones clasicas de rock y glam metal
// Usado en la clase 7: Metodos en Objetos + Reproductor de Rock
// Cada cancion es un objeto con:
//   id        -> identificador unico (numero)
//   titulo    -> nombre de la cancion (string)
//   banda     -> nombre de la banda (string)
//   album     -> nombre del album (string)
//   anio      -> anio de lanzamiento (number)
//   duracion  -> duracion en segundos (number)
//   genero    -> "rock", "hard rock", "glam metal", "heavy metal", "power ballad"

const canciones = [
    // Bon Jovi
    { id: 1,  titulo: "Livin' on a Prayer",        banda: "Bon Jovi",       album: "Slippery When Wet",         anio: 1986, duracion: 249, genero: "glam metal" },
    { id: 2,  titulo: "Wanted Dead or Alive",      banda: "Bon Jovi",       album: "Slippery When Wet",         anio: 1986, duracion: 305, genero: "glam metal" },
    { id: 3,  titulo: "You Give Love a Bad Name",  banda: "Bon Jovi",       album: "Slippery When Wet",         anio: 1986, duracion: 222, genero: "glam metal" },
    { id: 4,  titulo: "It's My Life",              banda: "Bon Jovi",       album: "Crush",                     anio: 2000, duracion: 224, genero: "rock" },
    { id: 5,  titulo: "Bad Medicine",              banda: "Bon Jovi",       album: "New Jersey",                anio: 1988, duracion: 315, genero: "glam metal" },
    { id: 6,  titulo: "Always",                    banda: "Bon Jovi",       album: "Cross Road",                anio: 1994, duracion: 338, genero: "power ballad" },
    { id: 7,  titulo: "Runaway",                   banda: "Bon Jovi",       album: "Bon Jovi",                  anio: 1984, duracion: 230, genero: "glam metal" },
    { id: 8,  titulo: "Bed of Roses",              banda: "Bon Jovi",       album: "Keep the Faith",            anio: 1992, duracion: 380, genero: "power ballad" },

    // Aerosmith
    { id: 9,  titulo: "Dream On",                  banda: "Aerosmith",      album: "Aerosmith",                 anio: 1973, duracion: 268, genero: "hard rock" },
    { id: 10, titulo: "Walk This Way",             banda: "Aerosmith",      album: "Toys in the Attic",         anio: 1975, duracion: 220, genero: "hard rock" },
    { id: 11, titulo: "Sweet Emotion",             banda: "Aerosmith",      album: "Toys in the Attic",         anio: 1975, duracion: 285, genero: "hard rock" },
    { id: 12, titulo: "Dude (Looks Like a Lady)",  banda: "Aerosmith",      album: "Permanent Vacation",        anio: 1987, duracion: 264, genero: "hard rock" },
    { id: 13, titulo: "Janie's Got a Gun",         banda: "Aerosmith",      album: "Pump",                      anio: 1989, duracion: 322, genero: "hard rock" },
    { id: 14, titulo: "Crazy",                     banda: "Aerosmith",      album: "Get a Grip",                anio: 1993, duracion: 317, genero: "power ballad" },
    { id: 15, titulo: "Cryin'",                    banda: "Aerosmith",      album: "Get a Grip",                anio: 1993, duracion: 308, genero: "power ballad" },
    { id: 16, titulo: "I Don't Want to Miss a Thing", banda: "Aerosmith",   album: "Armageddon",                anio: 1998, duracion: 298, genero: "power ballad" },
    { id: 17, titulo: "Love in an Elevator",       banda: "Aerosmith",      album: "Pump",                      anio: 1989, duracion: 322, genero: "hard rock" },

    // KISS
    { id: 18, titulo: "Rock and Roll All Nite",    banda: "KISS",           album: "Dressed to Kill",           anio: 1975, duracion: 168, genero: "hard rock" },
    { id: 19, titulo: "Detroit Rock City",         banda: "KISS",           album: "Destroyer",                 anio: 1976, duracion: 337, genero: "hard rock" },
    { id: 20, titulo: "Beth",                      banda: "KISS",           album: "Destroyer",                 anio: 1976, duracion: 174, genero: "power ballad" },
    { id: 21, titulo: "I Was Made for Lovin' You", banda: "KISS",           album: "Dynasty",                   anio: 1979, duracion: 270, genero: "hard rock" },
    { id: 22, titulo: "God of Thunder",            banda: "KISS",           album: "Destroyer",                 anio: 1976, duracion: 253, genero: "heavy metal" },
    { id: 23, titulo: "Heaven's on Fire",          banda: "KISS",           album: "Animalize",                 anio: 1984, duracion: 199, genero: "glam metal" },
    { id: 24, titulo: "Lick It Up",                banda: "KISS",           album: "Lick It Up",                anio: 1983, duracion: 240, genero: "glam metal" },

    // Guns N' Roses
    { id: 25, titulo: "Sweet Child o' Mine",       banda: "Guns N' Roses",  album: "Appetite for Destruction",  anio: 1987, duracion: 356, genero: "hard rock" },
    { id: 26, titulo: "Welcome to the Jungle",     banda: "Guns N' Roses",  album: "Appetite for Destruction",  anio: 1987, duracion: 274, genero: "hard rock" },
    { id: 27, titulo: "Paradise City",             banda: "Guns N' Roses",  album: "Appetite for Destruction",  anio: 1987, duracion: 406, genero: "hard rock" },
    { id: 28, titulo: "November Rain",             banda: "Guns N' Roses",  album: "Use Your Illusion I",       anio: 1991, duracion: 537, genero: "power ballad" },
    { id: 29, titulo: "Don't Cry",                 banda: "Guns N' Roses",  album: "Use Your Illusion I",       anio: 1991, duracion: 284, genero: "power ballad" },
    { id: 30, titulo: "You Could Be Mine",         banda: "Guns N' Roses",  album: "Use Your Illusion II",      anio: 1991, duracion: 343, genero: "hard rock" },
    { id: 31, titulo: "Patience",                  banda: "Guns N' Roses",  album: "GN'R Lies",                 anio: 1988, duracion: 356, genero: "power ballad" },
    { id: 32, titulo: "Knockin' on Heaven's Door", banda: "Guns N' Roses",  album: "Use Your Illusion II",      anio: 1991, duracion: 336, genero: "rock" },
    { id: 33, titulo: "Estranged",                 banda: "Guns N' Roses",  album: "Use Your Illusion II",      anio: 1991, duracion: 569, genero: "hard rock" },

    // Poison
    { id: 34, titulo: "Talk Dirty to Me",          banda: "Poison",         album: "Look What the Cat Dragged In", anio: 1986, duracion: 217, genero: "glam metal" },
    { id: 35, titulo: "Every Rose Has Its Thorn",  banda: "Poison",         album: "Open Up and Say... Ahh!",   anio: 1988, duracion: 261, genero: "power ballad" },
    { id: 36, titulo: "Nothin' But a Good Time",   banda: "Poison",         album: "Open Up and Say... Ahh!",   anio: 1988, duracion: 222, genero: "glam metal" },
    { id: 37, titulo: "Unskinny Bop",              banda: "Poison",         album: "Flesh & Blood",             anio: 1990, duracion: 224, genero: "glam metal" },
    { id: 38, titulo: "Look What the Cat Dragged In", banda: "Poison",      album: "Look What the Cat Dragged In", anio: 1986, duracion: 234, genero: "glam metal" },
    { id: 39, titulo: "Fallen Angel",              banda: "Poison",         album: "Open Up and Say... Ahh!",   anio: 1988, duracion: 238, genero: "glam metal" },

    // Tesla
    { id: 40, titulo: "Love Song",                 banda: "Tesla",          album: "The Great Radio Controversy", anio: 1989, duracion: 326, genero: "power ballad" },
    { id: 41, titulo: "Signs",                     banda: "Tesla",          album: "Five Man Acoustical Jam",   anio: 1990, duracion: 234, genero: "rock" },
    { id: 42, titulo: "Modern Day Cowboy",         banda: "Tesla",          album: "Mechanical Resonance",      anio: 1986, duracion: 320, genero: "hard rock" },
    { id: 43, titulo: "What You Give",             banda: "Tesla",          album: "Psychotic Supper",          anio: 1991, duracion: 365, genero: "power ballad" },
    { id: 44, titulo: "Little Suzi",               banda: "Tesla",          album: "Mechanical Resonance",      anio: 1986, duracion: 263, genero: "hard rock" },

    // Damn Yankees
    { id: 45, titulo: "High Enough",               banda: "Damn Yankees",   album: "Damn Yankees",              anio: 1990, duracion: 285, genero: "power ballad" },
    { id: 46, titulo: "Coming of Age",             banda: "Damn Yankees",   album: "Damn Yankees",              anio: 1990, duracion: 257, genero: "glam metal" },
    { id: 47, titulo: "Where You Goin' Now",       banda: "Damn Yankees",   album: "Don't Tread",               anio: 1992, duracion: 308, genero: "power ballad" },

    // Def Leppard
    { id: 48, titulo: "Pour Some Sugar on Me",     banda: "Def Leppard",    album: "Hysteria",                  anio: 1987, duracion: 267, genero: "glam metal" },
    { id: 49, titulo: "Photograph",                banda: "Def Leppard",    album: "Pyromania",                 anio: 1983, duracion: 252, genero: "glam metal" },
    { id: 50, titulo: "Love Bites",                banda: "Def Leppard",    album: "Hysteria",                  anio: 1987, duracion: 348, genero: "power ballad" },
    { id: 51, titulo: "Rock of Ages",              banda: "Def Leppard",    album: "Pyromania",                 anio: 1983, duracion: 244, genero: "glam metal" },
    { id: 52, titulo: "Hysteria",                  banda: "Def Leppard",    album: "Hysteria",                  anio: 1987, duracion: 345, genero: "glam metal" },
    { id: 53, titulo: "Animal",                    banda: "Def Leppard",    album: "Hysteria",                  anio: 1987, duracion: 244, genero: "glam metal" },
    { id: 54, titulo: "Bringin' on the Heartbreak", banda: "Def Leppard",   album: "High 'n' Dry",              anio: 1981, duracion: 277, genero: "hard rock" },
    { id: 55, titulo: "Foolin'",                   banda: "Def Leppard",    album: "Pyromania",                 anio: 1983, duracion: 254, genero: "glam metal" },

    // Motley Crue
    { id: 56, titulo: "Kickstart My Heart",        banda: "Motley Crue",    album: "Dr. Feelgood",              anio: 1989, duracion: 281, genero: "glam metal" },
    { id: 57, titulo: "Dr. Feelgood",              banda: "Motley Crue",    album: "Dr. Feelgood",              anio: 1989, duracion: 289, genero: "glam metal" },
    { id: 58, titulo: "Home Sweet Home",           banda: "Motley Crue",    album: "Theatre of Pain",           anio: 1985, duracion: 240, genero: "power ballad" },
    { id: 59, titulo: "Girls, Girls, Girls",       banda: "Motley Crue",    album: "Girls, Girls, Girls",       anio: 1987, duracion: 257, genero: "glam metal" },
    { id: 60, titulo: "Looks That Kill",           banda: "Motley Crue",    album: "Shout at the Devil",        anio: 1983, duracion: 246, genero: "glam metal" },
    { id: 61, titulo: "Wild Side",                 banda: "Motley Crue",    album: "Girls, Girls, Girls",       anio: 1987, duracion: 282, genero: "glam metal" },

    // Whitesnake
    { id: 62, titulo: "Here I Go Again",           banda: "Whitesnake",     album: "Whitesnake",                anio: 1987, duracion: 250, genero: "glam metal" },
    { id: 63, titulo: "Is This Love",              banda: "Whitesnake",     album: "Whitesnake",                anio: 1987, duracion: 283, genero: "power ballad" },
    { id: 64, titulo: "Still of the Night",        banda: "Whitesnake",     album: "Whitesnake",                anio: 1987, duracion: 396, genero: "hard rock" },

    // Skid Row
    { id: 65, titulo: "18 and Life",               banda: "Skid Row",       album: "Skid Row",                  anio: 1989, duracion: 230, genero: "glam metal" },
    { id: 66, titulo: "I Remember You",            banda: "Skid Row",       album: "Skid Row",                  anio: 1989, duracion: 333, genero: "power ballad" },
    { id: 67, titulo: "Youth Gone Wild",           banda: "Skid Row",       album: "Skid Row",                  anio: 1989, duracion: 211, genero: "glam metal" },

    // Warrant
    { id: 68, titulo: "Cherry Pie",                banda: "Warrant",        album: "Cherry Pie",                anio: 1990, duracion: 200, genero: "glam metal" },
    { id: 69, titulo: "Heaven",                    banda: "Warrant",        album: "Dirty Rotten Filthy Stinking Rich", anio: 1989, duracion: 240, genero: "power ballad" },
    { id: 70, titulo: "Down Boys",                 banda: "Warrant",        album: "Dirty Rotten Filthy Stinking Rich", anio: 1989, duracion: 244, genero: "glam metal" },

    // Cinderella
    { id: 71, titulo: "Nobody's Fool",             banda: "Cinderella",     album: "Night Songs",               anio: 1986, duracion: 295, genero: "power ballad" },
    { id: 72, titulo: "Don't Know What You Got",   banda: "Cinderella",     album: "Long Cold Winter",          anio: 1988, duracion: 350, genero: "power ballad" },
    { id: 73, titulo: "Shake Me",                  banda: "Cinderella",     album: "Night Songs",               anio: 1986, duracion: 230, genero: "glam metal" },

    // Ratt
    { id: 74, titulo: "Round and Round",           banda: "Ratt",           album: "Out of the Cellar",         anio: 1984, duracion: 252, genero: "glam metal" },
    { id: 75, titulo: "Lay It Down",               banda: "Ratt",           album: "Invasion of Your Privacy",  anio: 1985, duracion: 200, genero: "glam metal" },

    // Twisted Sister
    { id: 76, titulo: "We're Not Gonna Take It",   banda: "Twisted Sister", album: "Stay Hungry",               anio: 1984, duracion: 217, genero: "glam metal" },
    { id: 77, titulo: "I Wanna Rock",              banda: "Twisted Sister", album: "Stay Hungry",               anio: 1984, duracion: 184, genero: "glam metal" },

    // Quiet Riot
    { id: 78, titulo: "Cum On Feel the Noize",     banda: "Quiet Riot",     album: "Metal Health",              anio: 1983, duracion: 287, genero: "glam metal" },
    { id: 79, titulo: "Metal Health",              banda: "Quiet Riot",     album: "Metal Health",              anio: 1983, duracion: 318, genero: "heavy metal" },

    // Europe
    { id: 80, titulo: "The Final Countdown",       banda: "Europe",         album: "The Final Countdown",       anio: 1986, duracion: 309, genero: "glam metal" },
    { id: 81, titulo: "Carrie",                    banda: "Europe",         album: "The Final Countdown",       anio: 1986, duracion: 270, genero: "power ballad" },
    { id: 82, titulo: "Rock the Night",            banda: "Europe",         album: "The Final Countdown",       anio: 1985, duracion: 240, genero: "glam metal" },

    // Van Halen
    { id: 83, titulo: "Jump",                      banda: "Van Halen",      album: "1984",                      anio: 1984, duracion: 242, genero: "hard rock" },
    { id: 84, titulo: "Panama",                    banda: "Van Halen",      album: "1984",                      anio: 1984, duracion: 211, genero: "hard rock" },
    { id: 85, titulo: "Runnin' with the Devil",    banda: "Van Halen",      album: "Van Halen",                 anio: 1978, duracion: 215, genero: "hard rock" },
    { id: 86, titulo: "Eruption",                  banda: "Van Halen",      album: "Van Halen",                 anio: 1978, duracion: 102, genero: "hard rock" },
    { id: 87, titulo: "Hot for Teacher",           banda: "Van Halen",      album: "1984",                      anio: 1984, duracion: 283, genero: "hard rock" },
    { id: 88, titulo: "Why Can't This Be Love",    banda: "Van Halen",      album: "5150",                      anio: 1986, duracion: 227, genero: "hard rock" },

    // Scorpions
    { id: 89, titulo: "Rock You Like a Hurricane", banda: "Scorpions",      album: "Love at First Sting",       anio: 1984, duracion: 252, genero: "heavy metal" },
    { id: 90, titulo: "Wind of Change",            banda: "Scorpions",      album: "Crazy World",               anio: 1990, duracion: 313, genero: "power ballad" },
    { id: 91, titulo: "Still Loving You",          banda: "Scorpions",      album: "Love at First Sting",       anio: 1984, duracion: 401, genero: "power ballad" },
    { id: 92, titulo: "No One Like You",           banda: "Scorpions",      album: "Blackout",                  anio: 1982, duracion: 234, genero: "heavy metal" },

    // Journey
    { id: 93, titulo: "Don't Stop Believin'",      banda: "Journey",        album: "Escape",                    anio: 1981, duracion: 251, genero: "rock" },
    { id: 94, titulo: "Any Way You Want It",       banda: "Journey",        album: "Departure",                 anio: 1980, duracion: 202, genero: "rock" },
    { id: 95, titulo: "Faithfully",                banda: "Journey",        album: "Frontiers",                 anio: 1983, duracion: 267, genero: "power ballad" },
    { id: 96, titulo: "Open Arms",                 banda: "Journey",        album: "Escape",                    anio: 1981, duracion: 199, genero: "power ballad" },
    { id: 97, titulo: "Separate Ways",             banda: "Journey",        album: "Frontiers",                 anio: 1983, duracion: 323, genero: "rock" },

    // Foreigner
    { id: 98,  titulo: "I Want to Know What Love Is", banda: "Foreigner",   album: "Agent Provocateur",         anio: 1984, duracion: 305, genero: "power ballad" },
    { id: 99,  titulo: "Cold as Ice",              banda: "Foreigner",      album: "Foreigner",                 anio: 1977, duracion: 199, genero: "rock" },
    { id: 100, titulo: "Juke Box Hero",            banda: "Foreigner",      album: "4",                         anio: 1981, duracion: 251, genero: "rock" },
    { id: 101, titulo: "Hot Blooded",              banda: "Foreigner",      album: "Double Vision",             anio: 1978, duracion: 240, genero: "rock" },

    // Heart
    { id: 102, titulo: "Barracuda",                banda: "Heart",          album: "Little Queen",              anio: 1977, duracion: 252, genero: "hard rock" },
    { id: 103, titulo: "Alone",                    banda: "Heart",          album: "Bad Animals",               anio: 1987, duracion: 220, genero: "power ballad" },
    { id: 104, titulo: "Crazy on You",             banda: "Heart",          album: "Dreamboat Annie",           anio: 1976, duracion: 275, genero: "hard rock" },

    // ZZ Top
    { id: 105, titulo: "Sharp Dressed Man",        banda: "ZZ Top",         album: "Eliminator",                anio: 1983, duracion: 252, genero: "hard rock" },
    { id: 106, titulo: "La Grange",                banda: "ZZ Top",         album: "Tres Hombres",              anio: 1973, duracion: 232, genero: "hard rock" },
    { id: 107, titulo: "Legs",                     banda: "ZZ Top",         album: "Eliminator",                anio: 1983, duracion: 275, genero: "hard rock" },

    // AC/DC
    { id: 108, titulo: "Back in Black",            banda: "AC/DC",          album: "Back in Black",             anio: 1980, duracion: 255, genero: "hard rock" },
    { id: 109, titulo: "Highway to Hell",          banda: "AC/DC",          album: "Highway to Hell",           anio: 1979, duracion: 208, genero: "hard rock" },
    { id: 110, titulo: "Thunderstruck",            banda: "AC/DC",          album: "The Razors Edge",           anio: 1990, duracion: 292, genero: "hard rock" },
    { id: 111, titulo: "You Shook Me All Night Long", banda: "AC/DC",       album: "Back in Black",             anio: 1980, duracion: 210, genero: "hard rock" }
];

// Para verificar en consola:
// console.log(`Total de canciones: ${canciones.length}`);
// console.log(canciones[0]);
