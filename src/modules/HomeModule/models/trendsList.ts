import {TrendInterface} from "@/modules/HomeModule/types/types";
import icon1 from '@/assets/images/trends/icon-1.jpg'
import icon2 from '@/assets/images/trends/icon-2.jpg'
import icon4 from '@/assets/images/trends/icon-4.jpg'
import cover1 from '@/assets/images/trends/cover-1.jpg'
import cover2 from '@/assets/images/trends/cover-2.jpg'
import cover3 from '@/assets/images/trends/cover-3.jpg'
import cover4 from '@/assets/images/trends/cover-4.jpg'

export const trendsList:TrendInterface[] = [
    {
        category:'Formula 1',
        heading:'2023 MoneyGram Haas VF Livery',
        description:'Meet the new painting from the formula',
        icon:icon1,
        url:'#',
        cover:cover1,
    },
    {
        category:'Minecraft1234',
        heading:'What would you add to minecraft?',
        description:'Is there was one thing you could add to Minecraft what would it be?',
        icon:icon2,
        url:'#',
        cover:cover2,
    },
    {
        category:'Lola',
        heading:'Miley Cyrus looks different',
        description:'Miley looks like a mix of Cher, Dolly Parton, and Kim Kardashian',
        icon:null,
        url:'#',
        cover:cover3,
    },
    {
        category:'NBA',
        heading:'LeBron James is less than 100 POINTS',
        description:'Kareem Abdul-Jabbar is the all-time leading scorer in the NBA',
        icon:icon4,
        url:'#',
        cover:cover4,
    },
]