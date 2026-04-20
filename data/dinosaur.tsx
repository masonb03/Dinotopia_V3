
export interface Dinosaur {
  id: string;
  name: string;
  period: "Triassic" | "Jurassic" | "Cretaceous";
  yearStart: number; // millions of years ago
  yearEnd: number;   // millions of years ago
  diet: "Carnivore" | "Herbivore" | "Omnivore";
  length: number;    // meters
  weight: number;    // kilograms
  classification: string;
  region: string;
  description: string;
  funFact: string;
  imageUrl: string;
}

export const dinosaurs: Dinosaur[] = [
  // ── Cretaceous ──────────────────────────────────────────────
  {
    id: "tyrannosaurus-rex",
    name: "Tyrannosaurus rex",
    period: "Cretaceous",
    yearStart: 68,
    yearEnd: 66,
    diet: "Carnivore",
    length: 13,
    weight: 8000,
    classification: "Theropoda",
    region: "North America",
    description:
      "One of the largest land predators to ever walk the Earth. T. rex had a massive skull, powerful legs, and a bite force stronger than any other land animal ever measured.",
    funFact:
      "Despite its fearsome reputation, T. rex may have had feathers covering parts of its body, similar to modern birds.",
    imageUrl: `/images/dinosaurs/tyrannosaurus-rex.jpg`
  },
  {
    id: "triceratops",
    name: "Triceratops",
    period: "Cretaceous",
    yearStart: 68,
    yearEnd: 66,
    diet: "Herbivore",
    length: 9,
    weight: 6000,
    classification: "Ceratopsidae",
    region: "North America",
    description:
      "A large horned dinosaur with three facial horns and a bony frill extending from its skull. Triceratops was one of the last non-avian dinosaurs to exist before the mass extinction.",
    funFact:
      "Triceratops had one of the largest skulls of any land animal ever — up to 2.5 meters long, nearly a third of its total body length.",
    imageUrl: "/images/dinosaurs/triceratops.jpg",
  },
  {
    id: "velociraptor",
    name: "Velociraptor",
    period: "Cretaceous",
    yearStart: 75,
    yearEnd: 71,
    diet: "Carnivore",
    length: 1.8,
    weight: 15,
    classification: "Dromaeosauridae",
    region: "Central Asia",
    description:
      "A small but agile feathered predator known for its curved sickle-shaped claw on each foot. Velociraptor was far smaller than its movie portrayal — closer to the size of a turkey.",
    funFact:
      "Velociraptor was covered in feathers and is one of the closest dinosaur relatives of modern birds, more so than even T. rex.",
    imageUrl: "/images/dinosaurs/velociraptor.jpg",
  },
  {
    id: "spinosaurus",
    name: "Spinosaurus",
    period: "Cretaceous",
    yearStart: 99,
    yearEnd: 93,
    diet: "Carnivore",
    length: 15,
    weight: 7000,
    classification: "Spinosauridae",
    region: "North Africa",
    description:
      "Potentially the largest carnivorous dinosaur ever discovered, Spinosaurus had a distinctive sail or hump on its back and was well-adapted for an aquatic lifestyle, hunting fish in rivers.",
    funFact:
      "Spinosaurus is the only known dinosaur adapted to a semi-aquatic lifestyle, with dense bones for buoyancy control like a modern crocodile.",
    imageUrl: "/images/dinosaurs/spinosaurus.jpg",
  },
  {
    id: "ankylosaurus",
    name: "Ankylosaurus",
    period: "Cretaceous",
    yearStart: 68,
    yearEnd: 66,
    diet: "Herbivore",
    length: 9,
    weight: 6000,
    classification: "Ankylosauridae",
    region: "North America",
    description:
      "A heavily armored dinosaur covered in bony plates and spikes, with a massive club-like tail it could swing at predators. It was built like a living tank.",
    funFact:
      "The tail club of Ankylosaurus could generate enough force to break the bones of a T. rex — it was one of the most effective defensive weapons in the dinosaur world.",
    imageUrl: "/images/dinosaurs/ankylosaurus.jpg",
  },
  {
    id: "parasaurolophus",
    name: "Parasaurolophus",
    period: "Cretaceous",
    yearStart: 76,
    yearEnd: 73,
    diet: "Herbivore",
    length: 10,
    weight: 2500,
    classification: "Hadrosauridae",
    region: "North America",
    description:
      "A duck-billed dinosaur famous for its long, hollow cranial crest that could be over a meter in length. Scientists believe it used this crest to produce low, resonant calls to communicate.",
    funFact:
      "The hollow crest of Parasaurolophus may have worked like a trombone — CT scans reveal a complex system of tubes that could produce distinct sounds for each individual.",
    imageUrl: "/images/dinosaurs/parasaurolophus.jpg",
  },
  {
    id: "pachycephalosaurus",
    name: "Pachycephalosaurus",
    period: "Cretaceous",
    yearStart: 70,
    yearEnd: 66,
    diet: "Omnivore",
    length: 4.5,
    weight: 450,
    classification: "Pachycephalosauridae",
    region: "North America",
    description:
      "Named for its extraordinarily thick domed skull, Pachycephalosaurus likely used its reinforced head for combat or display. It was bipedal and relatively small compared to other Cretaceous dinosaurs.",
    funFact:
      "The dome of Pachycephalosaurus was up to 25 cm thick — solid bone — and its skull was one of the most robust structures in the entire dinosaur kingdom.",
    imageUrl: "/images/dinosaurs/pachycephalosaurus.jpg",
  },

  // ── Jurassic ────────────────────────────────────────────────
  {
    id: "brachiosaurus",
    name: "Brachiosaurus",
    period: "Jurassic",
    yearStart: 154,
    yearEnd: 153,
    diet: "Herbivore",
    length: 26,
    weight: 56000,
    classification: "Brachiosauridae",
    region: "North America",
    description:
      "One of the tallest dinosaurs ever, Brachiosaurus had front legs longer than its hind legs, giving it a giraffe-like posture. It used its long neck to browse tree canopies that no other animal could reach.",
    funFact:
      "Brachiosaurus could raise its head up to 13 meters off the ground — taller than a four-story building.",
    imageUrl: "/images/dinosaurs/brachiosaurus.jpg",
  },
  {
    id: "stegosaurus",
    name: "Stegosaurus",
    period: "Jurassic",
    yearStart: 155,
    yearEnd: 150,
    diet: "Herbivore",
    length: 9,
    weight: 3500,
    classification: "Stegosauridae",
    region: "North America, Europe",
    description:
      "Recognizable by the large bony plates running along its back and a spiked tail called a thagomizer. Despite its size, Stegosaurus had one of the smallest brains relative to body size of any dinosaur.",
    funFact:
      "Stegosaurus had a brain roughly the size of a walnut — about 80 grams — for a body weighing over 3,000 kg.",
    imageUrl: "/images/dinosaurs/stegosaurus.jpg",
  },
  {
    id: "allosaurus",
    name: "Allosaurus",
    period: "Jurassic",
    yearStart: 155,
    yearEnd: 145,
    diet: "Carnivore",
    length: 12,
    weight: 2300,
    classification: "Allosauridae",
    region: "North America, Europe",
    description:
      "The apex predator of the Late Jurassic, Allosaurus was a large bipedal carnivore with powerful arms and three-fingered hands tipped with large claws. It likely hunted the giant sauropods of its era.",
    funFact:
      "Allosaurus may have hunted by ambushing prey and using its skull like a hatchet — opening its jaws wide and driving the upper jaw down with force rather than biting like most predators.",
    imageUrl: "/images/dinosaurs/allosaurus.jpg",
  },
  {
    id: "diplodocus",
    name: "Diplodocus",
    period: "Jurassic",
    yearStart: 154,
    yearEnd: 152,
    diet: "Herbivore",
    length: 27,
    weight: 12000,
    classification: "Diplodocidae",
    region: "North America",
    description:
      "One of the longest dinosaurs ever discovered, Diplodocus had an extremely long neck and an even longer whip-like tail. Its teeth were peg-shaped, designed for stripping leaves from branches.",
    funFact:
      "Diplodocus could crack its tail like a whip, potentially producing a sonic boom-level sound — one of the earliest known biological sonic weapons.",
    imageUrl: "/images/dinosaurs/diplodocus.jpg",
  },
  {
    id: "archaeopteryx",
    name: "Archaeopteryx",
    period: "Jurassic",
    yearStart: 150,
    yearEnd: 148,
    diet: "Carnivore",
    length: 0.5,
    weight: 1,
    classification: "Archaeopterygidae",
    region: "Europe",
    description:
      "Often called the first bird, Archaeopteryx was a transitional species between feathered dinosaurs and modern birds. It had feathers and wings like a bird but also claws, teeth, and a bony tail like a dinosaur.",
    funFact:
      "Archaeopteryx is one of the most important fossils ever discovered — it was found just two years after Darwin published On the Origin of Species and became immediate evidence for evolution.",
    imageUrl: "/images/dinosaurs/archaeopteryx.jpg",
  },
  {
    id: "compsognathus",
    name: "Compsognathus",
    period: "Jurassic",
    yearStart: 150,
    yearEnd: 145,
    diet: "Carnivore",
    length: 1,
    weight: 3,
    classification: "Compsognathidae",
    region: "Europe",
    description:
      "One of the smallest known dinosaurs, Compsognathus was a swift, bird-like predator about the size of a chicken. It hunted small lizards and insects in what is now southern Germany and France.",
    funFact:
      "For nearly a century after its discovery in 1859, Compsognathus was considered the smallest dinosaur ever found — and it remains one of the smallest known to science.",
    imageUrl: "/images/dinosaurs/compsognathus.jpg",
  },

  // ── Triassic ────────────────────────────────────────────────
  {
    id: "eoraptor",
    name: "Eoraptor",
    period: "Triassic",
    yearStart: 231,
    yearEnd: 228,
    diet: "Omnivore",
    length: 1,
    weight: 10,
    classification: "Eodromaeidae",
    region: "South America",
    description:
      "One of the earliest known dinosaurs, Eoraptor was a small, lightly built omnivore that walked on two legs. Its mixed teeth — some for meat, some for plants — suggest it ate both.",
    funFact:
      "Eoraptor lived at the very dawn of the dinosaur age and gives scientists a rare glimpse of what the earliest dinosaurs looked like before they diversified into giants.",
    imageUrl: "/images/dinosaurs/eoraptor.jpg",
  },
  {
    id: "coelophysis",
    name: "Coelophysis",
    period: "Triassic",
    yearStart: 213,
    yearEnd: 201,
    diet: "Carnivore",
    length: 3,
    weight: 20,
    classification: "Coelophysidae",
    region: "North America",
    description:
      "A slender, fast-moving early dinosaur with hollow bones and sharp teeth. Coelophysis lived in large groups and was one of the most successful early dinosaurs, with fossils found by the thousands at Ghost Ranch, New Mexico.",
    funFact:
      "A skull of Coelophysis was carried aboard the Space Shuttle Endeavour in 1998, making it the first dinosaur to travel to space.",
    imageUrl: "/images/dinosaurs/coelophysis.jpg",
  },
  {
    id: "plateosaurus",
    name: "Plateosaurus",
    period: "Triassic",
    yearStart: 214,
    yearEnd: 204,
    diet: "Herbivore",
    length: 8,
    weight: 4000,
    classification: "Plateosauridae",
    region: "Europe",
    description:
      "One of the first large dinosaurs, Plateosaurus was a prosauropod — an early relative of the giant sauropods that would dominate the Jurassic. It could walk on two or four legs and was the dominant herbivore of its time.",
    funFact:
      "Plateosaurus shows evidence of determinate growth — it stopped growing at a fixed size, unlike most reptiles, which grow throughout their lives. This is more similar to mammals and birds.",
    imageUrl: "/images/dinosaurs/plateosaurus.jpg",
  },
  {
    id: "herrerasaurus",
    name: "Herrerasaurus",
    period: "Triassic",
    yearStart: 231,
    yearEnd: 229,
    diet: "Carnivore",
    length: 6,
    weight: 350,
    classification: "Herrerasauridae",
    region: "South America",
    description:
      "One of the earliest and most primitive known dinosaurs, Herrerasaurus was a swift bipedal predator with a flexible lower jaw that helped it grip struggling prey. It lived alongside Eoraptor at the very start of the dinosaur era.",
    funFact:
      "Herrerasaurus was so primitive that paleontologists debated for decades whether it was even a true dinosaur — its classification was only confirmed after a complete skull was discovered in 1988.",
    imageUrl: "/images/dinosaurs/herrerasaurus.jpg",
  },
  {
    id: "nyasasaurus",
    name: "Nyasasaurus",
    period: "Triassic",
    yearStart: 243,
    yearEnd: 240,
    diet: "Omnivore",
    length: 3,
    weight: 60,
    classification: "Dinosauriformes",
    region: "Africa",
    description:
      "Possibly the oldest known dinosaur or dinosaur-like reptile ever discovered. Nyasasaurus lived about 10–15 million years before other early dinosaurs, making it a crucial piece of the dinosaur origin puzzle.",
    funFact:
      "If confirmed as a true dinosaur, Nyasasaurus pushes the origin of dinosaurs back to at least 243 million years ago — making the dinosaur lineage even older than previously thought.",
    imageUrl: "/images/dinosaurs/nyasasaurus.jpg",
  },
  {
    id: "postosuchus",
    name: "Postosuchus",
    period: "Triassic",
    yearStart: 228,
    yearEnd: 201,
    diet: "Carnivore",
    length: 5,
    weight: 300,
    classification: "Rauisuchidae",
    region: "North America",
    description:
      "Not technically a dinosaur but a large rauisuchian archosaur — a crocodile-line relative — that was actually the apex predator of the Triassic before dinosaurs rose to dominance. It competed directly with early dinosaurs like Coelophysis.",
    funFact:
      "Postosuchus is a reminder that dinosaurs did not instantly dominate after they appeared — they had to compete with powerful crocodile-line reptiles for millions of years before becoming dominant.",
    imageUrl: "/images/dinosaurs/postosuchus.jpg",
  },
];