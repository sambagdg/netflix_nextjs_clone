import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
    
    async function postData() {
        "use server"
        await prisma.movie.createMany({
            data: [
                {
                id: 0,
                title: "Gran Turismo",
                age: 12,
                duration: 2.15,
                overview:
                    "L'histoire ultime de réalisation des souhaits d'un adolescent joueur de Gran Turismo dont les compétences en matière de jeu lui ont valu une série de compétitions Nissan pour devenir un véritable pilote de course automobile professionnel.",
                videoSource:
                    "https://res.cloudinary.com/dsouibklx/video/upload/v1699471985/vxht66zpfit14wkgpj0a.mp4",
                imageString:
                    "https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
                release: 2023,
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/GVPzGBvPrzw",
                },
                {
                imageString:
                    "https://image.tmdb.org/t/p/original/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg",
                title: "A Haunting in Venice",
                age: 12,
                duration: 1.44,
                id: 1,
                overview:
                    "Le célèbre détective Hercule Poirot, aujourd'hui à la retraite et vivant en exil volontaire à Venise, assiste à contrecœur à une séance d'Halloween dans un palais hanté et en décomposition. Lorsqu'un des invités est assassiné, le détective est plongé dans un monde sinistre d'ombres et de secrets.",
                release: 2023,
                videoSource: "",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/yEddsSwweyE",
                },
                {
                id: 2,
                title: "Five Nights at Freddy's",
                age: 16,
                duration: 1.5,
                overview:
                    "Récemment licencié et désespéré de trouver du travail, un jeune homme en difficulté nommé Mike accepte de prendre un poste d'agent de sécurité de nuit dans un restaurant à thème abandonné : Freddy Fazbear's Pizzeria. Mais il découvre vite que chez Freddy's, rien n'est ce qu'il semble être.",
                release: 2023,
                videoSource: "",
                imageString:
                    "https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/0VH9WCFV6XQ",
                },

                {
                id: 3,
                title: "The Blacklist",
                age: 16,
                duration: 0,
                imageString:
                    "https://image.tmdb.org/t/p/original/dDPwCyZG8arYwMDoQl0sm4xccCE.jpg",
                overview: `Raymond "Red" Reddington, l'un des fugitifs les plus recherchés par le FBI, se rend en personne au siège du FBI à Washington, D.C. Il affirme que lui et le FBI ont les mêmes intérêts : faire tomber de dangereux criminels et terroristes. Au cours des deux dernières décennies, il a dressé une liste des criminels et des terroristes les plus importants, mais le FBI ne parvient pas à la retrouver car il ignore leur existence. Reddington appelle cela « la liste noire ». Reddington coopérera, mais insiste sur le fait qu'il ne parlera qu'à Elizabeth Keen, une recrue du profil du FBI.`,
                release: 2013,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/-WYdUaK54fU",
                },
                {
                id: 4,
                title: "Suits",
                age: 12,
                duration: 0,
                imageString:
                    "https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
                overview:
                    "Alors qu'il fuit un trafic de drogue qui tourne mal, Mike Ross, un jeune et brillant décrocheur universitaire, se lance dans un entretien d'embauche avec l'un des meilleurs juristes de New York, Harvey Specter. Fatigué des diplômés en droit à l'emporte-pièce, Harvey prend le pari en embauchant Mike sur-le-champ après avoir reconnu son talent brut et sa mémoire photographique.",
                release: 2011,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/85z53bAebsI",
                },
                {
                id: 5,
                title: "Chernobyl",
                age: 16,
                duration: 0,
                imageString:
                    "https://image.tmdb.org/t/p/original/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
                overview:
                    "L'histoire vraie de l'une des pires catastrophes d'origine humaine de l'histoire : l'accident nucléaire catastrophique de Tchernobyl. L'histoire d'hommes et de femmes courageux qui se sont sacrifiés pour sauver l'Europe d'un désastre inimaginable",
                release: 2019,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/s9APLXM9Ei8",
                },
                {
                id: 6,
                title: "Retribution",
                age: 12,
                duration: 1.31,
                imageString:
                    "https://image.tmdb.org/t/p/original/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
                overview:
                    "Lorsqu'un mystérieux appelant place une bombe sous son siège auto, Matt Turner se lance dans une course-poursuite à grande vitesse à travers la ville pour accomplir une série de tâches spécifiques, le tout avec ses enfants coincés sur la banquette arrière.",
                release: 2023,
                videoSource: "",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/jzQn0-WH4WM",
                },
                {
                id: 7,
                title: "Spider-Man: Across the Spider-Verse",
                age: 12,
                duration: 2.2,
                imageString:
                    "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
                overview:
                    "Après avoir retrouvé Gwen Stacy, Spider-Man, le sympathique quartier de Brooklyn à plein temps, est catapulté à travers le Multivers, où il rencontre la Spider Society, une équipe de Spider-People chargée de protéger l'existence même du Multivers. Mais lorsque les héros s'affrontent sur la manière de gérer une nouvelle menace, Miles se retrouve confronté aux autres araignées et doit partir seul pour sauver ceux qu'il aime le plus.",
                release: 2023,
                videoSource: "",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/shW9i6k8cB0",
                },

                {
                id: 8,
                title: "Coco",
                release: 2017,
                age: 0,
                duration: 1.45,
                imageString:
                    "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
                overview:
                    "Malgré l'interdiction déroutante de la musique imposée par sa famille depuis des générations, Miguel rêve de devenir un musicien accompli comme son idole, Ernesto de la Cruz. Désespéré de prouver son talent, Miguel se retrouve dans le magnifique et coloré Pays des Morts à la suite d'une mystérieuse chaîne d'événements. En chemin, il rencontre le charmant filou Hector et, ensemble, ils se lancent dans un voyage extraordinaire pour découvrir la véritable histoire de la famille de Miguel."
,
                videoSource: "",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/xlnPHQ3TLX8",
                },
                {
                id: 9,
                title: "Monk",
                release: 2002,
                age: 12,
                duration: 0,
                imageString:
                    "https://image.tmdb.org/t/p/original/cTQYB39EwM01fl9b9KpNUgZfOsT.jpg",
                overview:
                    "Adrian Monk était autrefois une étoile montante du département de police de San Francisco, légendaire pour avoir utilisé des moyens non conventionnels pour résoudre les cas les plus déroutants du département. Mais après le meurtre tragique (et toujours non résolu) de sa femme Trudy, il a développé un cas extrême de trouble obsessionnel-compulsif. Travaillant désormais comme consultant privé, Monk continue d'enquêter sur les cas de la manière la plus peu conventionnelle.",
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/mftbaaU82Uc",
                },
                {
                id: 10,
                title: "Family Guy",
                age: 16,
                duration: 0,
                imageString:
                    "https://image.tmdb.org/t/p/original/y4PDksvxM05sNxacoU8xIYITCDA.jpg",
                overview:
                    "Série animée malade, tordue, politiquement incorrecte et Freakin' Sweet présentant les aventures de la famille Griffin dysfonctionnelle. Le maladroit Peter et Lois, qui souffre depuis longtemps, ont trois enfants. Stewie (un bébé brillant mais sadique déterminé à tuer sa mère et à conquérir le monde), Meg (la fille la plus âgée et la plus impopulaire de la ville) et Chris (l'enfant du milieu, il n'est pas très brillant mais a une passion pour les films. ). Le dernier membre de la famille est Brian - un chien qui parle et bien plus qu'un animal de compagnie, il contrôle Stewie tout en sirotant des Martinis et en réglant ses propres problèmes de vie.",
                release: 1999,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/7hRxWGo49oc",
                },
            ],
            });
    }

    return (
        <div className="m-5">
            <form action={postData}>
                <Button type="submit">Soumettre</Button>
            </form>

        </div>
    )
}