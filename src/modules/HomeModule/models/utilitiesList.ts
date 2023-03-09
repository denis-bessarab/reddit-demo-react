import {NavbarLinkType} from "@/modules/HomeModule/types/types";

export const utilitiesList: NavbarLinkType[] = [
    {
        name: "Settings",
        icon: "ion:settings-outline",
        url: "#",
        options: [
            {name: "Edit Profile", url: '#'},
            {name: "Change Password", url: '#'},
            {name: "Delete Account", url: '#'}
        ]
    },
    {
        name: "Get App",
        icon: "ion:download-outline",
        url: "#",
        options: []
    },
]