import { COURSE_STACK, TCourse, TStudent } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]


export const students: TStudent[] = [
    {
        id: "s001",
        name: "Arthur",
        age: 21
    },

    {
        id: "s002",
        name: "Lilian",
        age: 19
    },

    {
        id: "s003",
        name: "Rebeca",
        age: 25
    },

    {
        id: "s004",
        name: "Luisa",
        age: 30
    },
    
    {
        id: "s005",
        name: "Valter",
        age: 45
    },

] 