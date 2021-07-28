import { v4 as uuidv4 } from "uuid";

const music = () => {
    return [
        {
            name: "Dawn",
            art: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
            artist: "Toonorth",
            link: "https://mp3.chillhop.com/serve.php/?mp3=17941",
            color: ["#454B61", "#A7B4F7"],
            id: uuidv4(),
            active: true
        },
        {
            name: "travelbag",
            art: "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
            artist: "mommy, Sleepy Fish",
            link: "https://mp3.chillhop.com/serve.php/?mp3=19060",
            color: ["#010602", "#F3D8C6"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Higher",
            art: "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
            artist: "Misha",
            link: "https://mp3.chillhop.com/serve.php/?mp3=15088",
            color: ["#F6877E", "#2E385B"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Viatecture",
            art: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist: "Leavy, Makzo",
            link: "https://mp3.chillhop.com/serve.php/?mp3=20119",
            color: ["#87A64A", "#B0CCCB"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Roses",
            art: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            artist: "C Y G N",
            link: "https://mp3.chillhop.com/serve.php/?mp3=14985",
            color: ["#E789F5", "#5E78A7"],
            id: uuidv4(),
            active: false
        }
    ];
}

export default music;