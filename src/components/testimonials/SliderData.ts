export interface slidersDataProps {
    name: string;
    title: string;
    bg: string;
    src: string;
    heading: string;
    text: string;
}

const slidersData: slidersDataProps[] = [
    {
        name: "Jane Cooper",
        title: "CEO at ABC Corporation",
        bg: "red.200",
        src:
            "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        heading: "Efficient Collaborating",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem."
    },
    {
        name: "Kopa mama",
        title: "VP of Engineering",
        bg: "orange.200",
        src:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        heading: "Intuitive Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem."
    },
    {
        name: "Tamjid zihan",
        title: "Product Manager",
        bg: "blue.200",
        src:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        heading: "Mindblowing Service",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem."
    },
    {
        name: "Mushfique",
        title: "Founder",
        bg: "purple.200",
        src:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        heading: "Game Changer!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem."
    }
];

export default slidersData;